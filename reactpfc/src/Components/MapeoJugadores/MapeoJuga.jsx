import CrudJugadores from '../../Services/CrudJugadores'
import React, { useEffect, useState } from 'react'
import '../../Components/MapeoJugadores/MapeoJugadores.css'
import { Link, useNavigate } from 'react-router-dom';

//COMPONENTE DE CARDS EN PERFIL

function MapeoJuga({ esAdmin = false }) {

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

    function btnTodos() {
      
    navigate('/jugadores')

    }
  
  return (
    <div className='divJuga'>
      <div className="titulosJugadores">
        <p className="subTituloPfc"><strong>PFC</strong></p>
        <h1 className="tituloPrincipal">TIBURONES</h1>
        <p className="descripcionEquipo"><strong></strong>Conocé a todos los jugadores de primera división</p>
      </div>
      <div className="mapeojuga">
        {guardarJugadores.slice(-5).map((dato,index) => (
          <div key={dato.id} className="cardJugadores" onClick={() => cargarid(dato.id)}>
          <img className="jugadorImgn" src={dato.Imagen} alt={dato.Nombre_Completo} />
          <div className="jugadorInfo">
          <p className="JN">{dato.Nombre_Completo.toUpperCase()}</p>
          <p className="JP">{dato.Posicion}</p>
      </div>
        </div>
            ))}
      </div>
            <div className="contenedorBoton">
              <button onClick={btnTodos} className="btnVerTodos">Ver Todos Los Jugadores</button>
            </div><br /><br /><br /><br /><br />
    </div>
  )
}

export default MapeoJuga