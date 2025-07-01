import React, { useState, useEffect } from 'react'
import CrudJugadores from '../../Services/CrudJugadores'
import { useParams } from 'react-router-dom';
import '../../Components/Jugadores/Jugadores.css'

//useParams: es una libreria propia (es un gancho proporcionado 
// por React Router que permite leer los parámetros de la URL actual)
function JugadoresCom() {

const { id } = useParams();
console.log(id);

const[guardarJugadoresid, setGuardarJugadoresid] = useState({})

    useEffect(() => {
            async function fetchDataUsers() {
                const data = await CrudJugadores.getJugadorid(id)
                setGuardarJugadoresid(data)
            };
            fetchDataUsers()
        }, []);

    console.log(guardarJugadoresid);
    


  return (
    
    <div className='infJug'>
      <div className="contenedor-imagen">
        <img className='imgBio' src={guardarJugadoresid.Imagen} alt="" />
      </div>
        <div className="contenedor-datos">
          <p className="datBio"><label htmlFor="">Nombre:</label>{guardarJugadoresid.Nombre_Completo}</p>
          <p className="datBio"><label htmlFor="">Fecha de Nacimiento:</label>{guardarJugadoresid.Fecha_Nacimiento}</p>
          <p className="datBio"><label htmlFor="">Edad:</label>{guardarJugadoresid.Edad}</p>
          <p className="datBio"><label htmlFor="">Lugar de Nacimiento:</label>{guardarJugadoresid.Lugar_Nacimiento}</p>
          <p className="datBio"><label htmlFor="">Nacionalidad:</label>{guardarJugadoresid.Nacionalidad}</p>
          <p className="datBio"><label htmlFor="">Altura:</label>{guardarJugadoresid.Altura}</p>
          <p className="datBio"><label htmlFor="">Peso:</label>{guardarJugadoresid.Peso}</p>
          <p className="datBio"><label htmlFor="">Posición:</label>{guardarJugadoresid.Posicion}</p>
          <p className="datBio"><label htmlFor="">Número:</label>{guardarJugadoresid.Numero}</p>
          <p className="datBio"><label htmlFor="">Club Actual:</label>{guardarJugadoresid.Club_Actual}</p>
          <p className="datBio"><label htmlFor="">Pie Dominante:</label>{guardarJugadoresid.Pie_Dominante}</p>
        </div>
    </div>
  )
}
export default JugadoresCom
