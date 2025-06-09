import React, { useEffect, useState } from 'react'
import EventosCrud from '../../Services/EventosCrud'
import '../../Components/MapeoEventos/MapeoEventos.css'

function MapeoEventos({ esAdmin = false }) {

const[guardarEvento, setguardarEvento] = useState([])

    useEffect(() => {

        async function fetchDataUsers() {
            const data = await EventosCrud.getEventos()
            
            setguardarEvento(data)
        };
        fetchDataUsers()
    }, []) 

    function eliminarEvento(id) {
        
        EventosCrud.deleteEventos(id)

    }

    function editarEvento(id) {

        
        
    }

  return (
    <div className="eventos-container">
         {guardarEvento.map((data,index) => ( 
            <div key={data.id} className="evento-card">
                <div>
                     <p className='datoevento'><strong>Evento: </strong>{data.Eventos}</p>
                     <p className='datoevento'><strong>Descripcion: </strong>{data.Descripcion}</p>
                    {esAdmin && (
                        <div className='botones'>
                            <p className='butt'>
                                <button className='botonEliminar' onClick={() => eliminarEvento(data.id)}>Eliminar</button>
                                <button className='botonEditar' onClick={() => editarEvento(data.id)}>Editar</button>
                            </p>
                        </div>
                    )}
                </div>
            </div>
         ))}
    </div>
  )
}

export default MapeoEventos