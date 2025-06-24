import CrudJugadores from '../../Services/CrudJugadores'
import React, { useEffect, useState } from 'react'
import '../../Components/MapeoJugadores/MapeoJugadores.css'
import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';

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
      localStorage.setItem("cargarid", id)
      navigate ("/")
    }
  
  return (
    <div className='divPp'>
      <div className="mapeoj">
        {guardarJugadores.slice(-5).map((dato,index) => (
        <div key={dato.id} className="jugadorr">
          {esAdmin === false &&(
            <div className='jugadoragregado'>
            <img onClick={e=> cargarid(dato.id)} src={dato.Imagen} alt="im" />
            <p className='dt'>{dato.Nombre_Completo}</p><br />
            <p className='td'>{/* <strong>Posicion: </strong> */}{dato.Posicion}</p><br />
            </div>
          )}
          </div>
            ))}
      </div>
    </div>
  )
}

export default MapeoJuga