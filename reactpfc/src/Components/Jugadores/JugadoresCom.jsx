import React, { useState, useEffect } from 'react'
import CrudJugadores from '../../Services/CrudJugadores'

function JugadoresCom() {

const id = localStorage.getItem("cargarid")
console.log(id);

const[guardarJugadoresid, setGuardarJugadoresid] = useState([])

    useEffect(() => {
            async function fetchDataUsers() {
                const data = await CrudJugadores.getJugadorid(id)
                setGuardarJugadoresid(data)
            };
            fetchDataUsers()
        }, []);


  return (
    
    <div>
      
    </div>
  )
}
export default JugadoresCom
