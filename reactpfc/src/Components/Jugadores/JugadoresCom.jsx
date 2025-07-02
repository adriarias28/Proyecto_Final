import React, { useState, useEffect } from 'react'
import CrudJugadores from '../../Services/CrudJugadores'
import { useParams, useNavigate } from 'react-router-dom';
import '../../Components/Jugadores/Jugadores.css'
import FooderCom from '../Fooder/FooderCom';
import NavbarCom from '../Navbar/NavbarCom';
import { FaArrowLeft } from 'react-icons/fa'; 

//useParams: es una libreria propia (es un gancho proporcionado 
// por React Router que permite leer los parámetros de la URL actual)
function JugadoresCom() {

const { id } = useParams();
console.log(id);

const navigate = useNavigate();
const[guardarJugadoresid, setGuardarJugadoresid] = useState({})

    useEffect(() => {
            async function fetchDataUsers() {
                const data = await CrudJugadores.getJugadorid(id)
                setGuardarJugadoresid(data)
            };
            fetchDataUsers()
        }, []);

    console.log(guardarJugadoresid);
    
    
  function btnVol() {
    
    navigate('/jugadores')

  }

   return (
    <>
      <NavbarCom />
    <div className='dt'>
      <div className='infJug'>
        <div className="contenedor-imagen">
          <img className='imgBio' src={guardarJugadoresid.Imagen} alt="" />
        </div>

        <div className="contenedor-datos">
          <p className="datBio"><label>Nombre:</label>{guardarJugadoresid.Nombre_Completo}</p>
          <p className="datBio"><label>Fecha de Nacimiento:</label>{guardarJugadoresid.Fecha_Nacimiento}</p>
          <p className="datBio"><label>Edad:</label>{guardarJugadoresid.Edad}</p>
          <p className="datBio"><label>Lugar de Nacimiento:</label>{guardarJugadoresid.Lugar_Nacimiento}</p>
          <p className="datBio"><label>Nacionalidad:</label>{guardarJugadoresid.Nacionalidad}</p>
          <p className="datBio"><label>Altura:</label>{guardarJugadoresid.Altura}</p>
          <p className="datBio"><label>Peso:</label>{guardarJugadoresid.Peso}</p>
          <p className="datBio"><label>Posición:</label>{guardarJugadoresid.Posicion}</p>
          <p className="datBio"><label>Número:</label>{guardarJugadoresid.Numero}</p>
          <p className="datBio"><label>Club Actual:</label>{guardarJugadoresid.Club_Actual}</p>
          <p className="datBio"><label>Pie Dominante:</label>{guardarJugadoresid.Pie_Dominante}</p>
        </div>
      </div>
      
      <button className="btnVolver" onClick={btnVol}><FaArrowLeft/> Volver a Jugadores</button><br /><br /><br /><br /><br />
      <FooderCom />

    </div>
    </>
  )
}

export default JugadoresCom;