/*import CrudJugadores from '../../Services/CrudJugadores'
import React, { useEffect, useState } from 'react'
import '../../Components/MapeoJugadores/MapeoJugadores.css'
import Swal from 'sweetalert2'


function Prueba({ esAdmin = false }) {

const[guardarJugadores, setGuardarJugadores] = useState([])

    useEffect(() => {

        async function fetchDataUsers() {
            const dato = await CrudJugadores.getBiografiaJugador()
            console.log(dato);
            
            setGuardarJugadores(dato)
        };
        fetchDataUsers()
    }, []) 

    
//ELIMINAR
    function eliminar(id) {
    CrudJugadores.deleteBiografiaJugador(id)
    } 

//EDITAR
  async function editar(id) {
    const jugador = guardarJugadores.find(j => j.id === id)
    if (!jugador) return Swal.fire('Error', 'Jugador no encontrado', 'error')

    const { value: formValues } = await Swal.fire({
      title: 'Editar Jugador',
      html: `
        <input id="nombre" class="swal2-input" placeholder="Nombre" value="${jugador.Nombre_Completo || ''}">
        <input id="fecha" class="swal2-input" type="date" value="${jugador.Fecha_Nacimiento || ''}">
        <input id="edad" class="swal2-input" placeholder="Edad" value="${jugador.Edad || ''}">
        <input id="lugar" class="swal2-input" placeholder="Lugar Nacimiento" value="${jugador.Lugar_Nacimiento || ''}">
        <input id="nacionalidad" class="swal2-input" placeholder="Nacionalidad" value="${jugador.Nacionalidad || ''}">
        <input id="altura" class="swal2-input" placeholder="Altura" value="${jugador.Altura || ''}">
        <input id="peso" class="swal2-input" placeholder="Peso" value="${jugador.Peso || ''}">
        <input id="posicion" class="swal2-input" placeholder="Posición" value="${jugador.Posicion || ''}">
        <input id="numero" class="swal2-input" placeholder="Número" value="${jugador.Numero || ''}">
        <input id="club" class="swal2-input" placeholder="Club Actual" value="${jugador.Club_Actual || ''}">
        <input id="pie" class="swal2-input" placeholder="Pie Dominante" value="${jugador.Pie_Dominante || ''}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const campos = {
          Nombre_Completo: document.getElementById('nombre').value.trim(),
          Fecha_Nacimiento: document.getElementById('fecha').value.trim(),
          Edad: document.getElementById('edad').value.trim(),
          Lugar_Nacimiento: document.getElementById('lugar').value.trim(),
          Nacionalidad: document.getElementById('nacionalidad').value.trim(),
          Altura: document.getElementById('altura').value.trim(),
          Peso: document.getElementById('peso').value.trim(),
          Posicion: document.getElementById('posicion').value.trim(),
          Numero: document.getElementById('numero').value.trim(),
          Club_Actual: document.getElementById('club').value.trim(),
          Pie_Dominante: document.getElementById('pie').value.trim()
        }

        const hayVacios = Object.values(campos).some(val => !val)
        if (hayVacios) {
          Swal.showValidationMessage('Por favor, completa todos los campos')
          return null
        }

        return campos
      }
    })

    if (formValues) {
      try {
        await CrudJugadores.updateBiografiaJugador(id, formValues)

        setGuardarJugadores(prev =>
          prev.map(j =>
            j.id === id ? { ...j, ...formValues } : j
          )
        )

        Swal.fire('Actualizado', 'Los datos del jugador han sido actualizados.', 'success')
      } catch (error) {
        console.error(error)
        Swal.fire('Error', 'No se pudo actualizar el jugador.', 'error')
      }
    }
  }


const filJug = (e) => {
 const postJug = guardarJugadores.filer((i) => i.guardarJugadores === e.target.value)
  setGuardarJugadores(postJug);
  console.log(postJug);
}

/* const filJug = (e) => {
 const postJug = Nombre_Completo.filer((i) => i.Nombre_Completo === e.target.value)
  setNombre_Completo(postJug);
  console.log(postJug);
} */

  /*return (
    <div className="jugadores-grid">
        {guardarJugadores.map((dato,index) => (
        <div key={dato.id} className="jugador-card">
            <div className='jugador-agregado'>
                  <p className='datos'><strong>Nombre: </strong>{dato.Nombre_Completo}</p><br />
                  <p className='datos'><strong>Fecha Nacimiento: </strong>{dato.Fecha_Nacimiento}</p><br />
                  <p className='datos'><strong>Edad: </strong>{dato.Edad}</p><br />
                  <p className='datos'><strong>Lugar Nacimiento: </strong>{dato.Lugar_Nacimiento}</p><br />
                  <p className='datos'><strong>Nacionalidad: </strong>{dato.Nacionalidad}</p><br />
                  <p className='datos'><strong>Altura: </strong>{dato.Altura}</p><br />
                  <p className='datos'><strong>Peso: </strong>{dato.Peso}</p><br />
                  <p className='datos'><strong>Posicion: </strong>{dato.Posicion}</p><br />
                  <p className='datos'><strong>Numero: </strong>{dato.Numero}</p><br />
                  <p className='datos'><strong>Club: </strong>{dato.Club_Actual}</p><br />
                  <p className='datos'><strong>Pie Dominante: </strong>{dato.Pie_Dominante}</p>
                {esAdmin && (
                  <div className="botones-jugador">
                    <p className='butt'>
                        <button className='boton eliminar' onClick={() => eliminar(dato.id)}>Eliminar</button>
                        <button className='boton editar' onClick={() => editar(dato.id)}>Editar</button>
                    </p>
                  </div>
                )}
            </div>
        </div>
            ))} 
    </div>
  )
}

export default Prueba*/