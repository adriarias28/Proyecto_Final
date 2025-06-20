import React, { useEffect, useState } from 'react'
import CrudUltimosResultados from '../../Services/CrudUltimosResultados'
import Swal from 'sweetalert2'
import '../../Components/MapeoUltimosResultados/MapUResultados.css'
import MapeoPartidos from '../MapeoPartidos/MapeoPartidos'

function MapeoUltimosResultados({ esAdmin = false }) {

const[guardarUltimosResultados, setUltimosResultados] = useState([])

    useEffect(() => {

        async function fetchDataUsers() {
            const dato = await CrudUltimosResultados.getUltimosResultados()
            console.log(dato);
            
            setUltimosResultados(dato)
        };
        fetchDataUsers()
    }, []) 


//ELIMINAR

function valor(evento) {

  setUltimosResultados(evento.target.value)
}

function eliminar(id) {
    console.log(id);
    CrudUltimosResultados.deleteUltimosResultados(id)
} 

    
//EDITAR



  return (
    <div className="partidos-grid">
        {guardarUltimosResultados.map((dato,index) => (
        <div key={dato.id} className="jugador-card">
           {/* <MapeoPartidos/>  */}
            <div className=''>
              <div className='hh'>
                  <p className='datos'><strong>Resultado: </strong>{dato.Resultado}</p><br />{/* 
                  <p className='datos'><strong>Partido: </strong>{dato.Partido}</p><br /> */}
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

export default MapeoUltimosResultados