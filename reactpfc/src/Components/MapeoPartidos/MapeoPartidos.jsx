import React, { useEffect, useState } from 'react'
import CrudPartidos from '../../Services/CrudPartidos'
import '../../Components/MapeoPartidos/Mapeo.css'
import Swal from 'sweetalert2'

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




   // function editar() {
   // CrudPartidos.updatePartidos(ubicacionPartido,fechaPartido,horaPartido,equiposPartido)
   // } 

  return (
    <div className="partidos-grid">
        {guardarPartidos.map((dato,index) => (
        <div key={dato.id} className="jugador-card">
            <div className='jugador-agregado'>
              <div className='hh'>
                  <p className='datos'><strong>Ubicacion: </strong>{dato.Ubicacion}</p><br />
                  <p className='datos'><strong>Fecha: </strong>{dato.Fecha}</p><br />
                  <p className='datos'><strong>Hora: </strong>{dato.Hora}</p><br />
                  <p className='datos'><strong>Equipos: </strong>{dato.Equipos}</p><br />
                  </div>
                {esAdmin && (
                  <div className="botones-partidos">
                    <p className='but'>
                        <button className='boton delete' onClick={() => eliminar(dato.id)}>Eliminar</button>
                        <button className='boton update' onClick={() => editar(dato.id)}>Editar</button>
                    </p>
                  </div>
                )}
            </div>
        </div>
            ))}

    </div>
  )
}

export default MapeoPartidos