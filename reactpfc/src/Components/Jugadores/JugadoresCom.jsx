import React, { useState, useEffect } from 'react'
import CrudJugadores from '../../Services/CrudJugadores'
import { useParams } from 'react-router-dom';

//useParams: es una libreria propia
function JugadoresCom() {

/* const Id =({valor}) => {

} */
  
/* const id = localStorage.getItem("cargarid") */

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
    
    <div>
        <p>{guardarJugadoresid.Nombre_Completo}</p>
        <p>{guardarJugadoresid.Posicion}</p>
    </div>
  )
}
export default JugadoresCom
