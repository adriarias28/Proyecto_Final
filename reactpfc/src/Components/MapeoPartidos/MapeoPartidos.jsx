import React, { useEffect, useState } from 'react'
import CrudPartidos from '../../Services/CrudPartidos'
import '../../Components/MapeoPartidos/Mapeo.css'
import Swal from 'sweetalert2'
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUsers, FaTrashAlt, FaEdit, FaTicketAlt } from 'react-icons/fa'


function MapeoPartidos({ esAdmin = false }) {

const[guardarPartidos, setGuardarPartidos] = useState([])

    useEffect(() => {

        async function fetchDataUsers() {
            const dato = await CrudPartidos.getPartidos()
            console.log(dato);
            
            setGuardarPartidos(dato)
        };
        fetchDataUsers()
    }, []) 

//ELIMINAR
function eliminar(id) {
  location.reload();
    CrudPartidos.deletePartidos(id)
    } 


// EDITAR
 async function editar(id) {
    const partidoEditar = guardarPartidos.find((partido) => partido.id === id)
    if (!partidoEditar) {
      Swal.fire('Error', 'Partido no encontrado', 'error')
      return
    }

    const { value: formValues } = await Swal.fire({
      title: 'Editar Partido',
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Ubicación" value="${partidoEditar.Ubicacion || ''}">
        <input id="swal-input2" class="swal2-input" placeholder="Fecha" value="${partidoEditar.Fecha || ''}">
        <input id="swal-input3" class="swal2-input" placeholder="Hora" value="${partidoEditar.Hora || ''}">
        <input id="swal-input4" class="swal2-input" placeholder="Equipos" value="${partidoEditar.Equipos || ''}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const Ubicacion = document.getElementById('swal-input1').value
        const Fecha = document.getElementById('swal-input2').value
        const Hora = document.getElementById('swal-input3').value
        const Equipos = document.getElementById('swal-input4').value

        if (!Ubicacion || !Fecha || !Hora || !Equipos) {
          Swal.showValidationMessage('Por favor, completa todos los campos')
          return null
        }

        return { Ubicacion, Fecha, Hora, Equipos }
      },
    })

    if (formValues) {
      try {
        /* location.reload(); */
        await CrudPartidos.updatePartidos(id, formValues)

        setGuardarPartidos(
          guardarPartidos.map((partido) =>
            partido.id === id
              ? {
                  ...partido,
                  Ubicacion: formValues.Ubicacion,
                  Fecha: formValues.Fecha,
                  Hora: formValues.Hora,
                  Equipos: formValues.Equipos,
                }
              : partido
          )
        )

        Swal.fire('Actualizado', 'El partido ha sido actualizado.', 'success')
      } catch (error) {
        console.error('Error al actualizar el partido:', error)
        Swal.fire('Error', 'No se pudo actualizar el partido.', 'error')
      }
    }
  }


  return (
   <div className="partidoss">
        {guardarPartidos.slice(-1).map((dato,index) => (
        <div key={dato.id} className="cardpartido">
          {esAdmin === false &&(
             <div className='partido-agregado'>
              <h1 className='tituloPT'>Partido</h1>
                <p><FaMapMarkerAlt className="icon" /><strong className='pa'> Ubicación: </strong>{dato.Ubicacion}</p>
                <p><FaCalendarAlt className="icon" /><strong className='pa'> Fecha: </strong>{dato.Fecha}</p>
                <p><FaClock className="icon" /><strong className='pa'> Hora: </strong>{dato.Hora}</p>
                <p><FaUsers className="icon" /><strong className='pa'> Equipos: </strong>{dato.Equipos}</p>
            </div>
          )
          } 
        </div>
            ))} 
            {guardarPartidos.map((dato,index) => (
        <div key={dato.id} className="cardpartido">
          {esAdmin && (
             <div className='partido-agregado'>
                <p><FaMapMarkerAlt className="icon" /><strong className='pa'> Ubicación: </strong>{dato.Ubicacion}</p>
                <p><FaCalendarAlt className="icon" /><strong className='pa'> Fecha: </strong>{dato.Fecha}</p>
                <p><FaClock className="icon" /><strong className='pa'> Hora: </strong>{dato.Hora}</p>
                <p><FaUsers className="icon" /><strong className='pa'> Equipos: </strong>{dato.Equipos}</p>
                 <div className="partidosbotones">
                     <button className='botondelete' onClick={() => eliminar(dato.id)}><FaTrashAlt /> Eliminar</button>
                     <button className='botonupdate' onClick={() => editar(dato.id)}><FaEdit /> Editar</button>
                  </div>
              </div>
          )
          } 
        </div>
            ))} 

    </div>
  )
}

export default MapeoPartidos