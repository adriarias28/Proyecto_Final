import CrudJugadores from '../../Services/CrudJugadores'
import React, { useEffect, useState } from 'react'

function MapeoJuga() {

const[guardarJugadores, setGuardarJugadores] = useState([])

    useEffect(() => {

        async function fetchDataUsers() {
            const dato = await CrudJugadores.getBiografiaJugador()
            setGuardarJugadores(dato)
        };
        fetchDataUsers()
    }, []) 


    function eliminar(id) {
    CrudJugadores.deleteBiografiaJugador(id)
    } 


    function editar() {
    CrudJugadores.updateBiografiaJugador(nombreJugador,fechaNacimiento,edadJugador,lugarNacimiento,nacionalidadJugador,alturaJugador,pesoJugador,posicionJugador,numeroJugador,clubActual,pieDominante)
    } 

    

  return (
    <div>

        {guardarJugadores.map((dato,index) => (
        <tr key={dato.id}>
          <td>{dato.Nombre_Completo}</td>
          <td>{dato.Fecha_Nacimiento}</td>
          <td>{dato.Edad}</td>
          <td>{dato.Lugar_Nacimiento}</td>
          <td>{dato.Nacionalidad}</td>
          <td>{dato.Altura}</td>
          <td>{dato.Peso}</td>
          <td>{dato.Posicion}</td>
          <td>{dato.Numero}</td>
          <td>{dato.Club_Actual}</td>
          <td>{dato.Pie_Dominante}</td>
          <td className='butt'>
            <button className='boton' onClick={() => eliminar(dato.id)}>Eliminar</button>
            <button className='boton' onClick={() => editar(dato.id)}>Editar</button>
          </td>
        </tr>
            ))}

    </div>
  )
}

export default MapeoJuga