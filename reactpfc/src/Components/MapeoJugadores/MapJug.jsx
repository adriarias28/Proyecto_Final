import CrudJugadores from '../../Services/CrudJugadores'
import React, { useEffect, useState } from 'react'
import '../../Components/MapeoJugadores/MapeoJugadores.css'
import { Link, useNavigate } from 'react-router-dom';
import '../../Components/MapeoJugadores/MapJug.css'

function MapJug({ esAdmin = false }) {

const[guardarJugadores, setGuardarJugadores] = useState([])
const navigate= useNavigate()

    useEffect(() => {

        async function fetchDataUsers() {
            const dato = await CrudJugadores.getBiografiaJugador()
            console.log(dato);
            
            setGuardarJugadores(dato)
        };
        fetchDataUsers()
    }, []) 

    function cargarid(id){

      console.log(id);
      navigate(`/jugador/${id}`)
      
    }
  
  return (
    <div className='divPp'>
      <h1 className='jugadoresTi'>Nuestros Jugadores</h1>
      <div className="mapeoj">
        {guardarJugadores.map((dato,index) => (
        <div key={dato.id} className="cardJugador">
  <img
    className="jugadorImg"
    onClick={() => cargarid(dato.id)}
    src={dato.Imagen}
    alt={dato.Nombre_Completo}
  />
  <div className="jugadorInfo">
    <h3 className="jugadorNombre">{dato.Nombre_Completo}</h3>
    <p className="jugadorPosicion">{dato.Posicion}</p>
    <button className="btnVerMas" onClick={() => cargarid(dato.id)}>
  Ver más
</button>
  </div>
</div>

            ))}
      </div>
    </div>
  )
}

export default MapJug