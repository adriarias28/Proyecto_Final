import React, { useEffect, useState } from 'react'
import EventosCrud from '../../Services/EventosCrud'
import '../../Components/MapeoEventos/MapeoEventos.css'
/* import Swal from 'sweetalert2'; */

import uploadImageToS3 from '../../Components/AWS/AwsConection'
function MapeoEventos({ esAdmin = false }) {

const[guardarEvento, setguardarEvento] = useState([])


    useEffect(() => {

        async function fetchDataUsers() {
            const dato = await EventosCrud.getEventos()
            console.log();
            
            setguardarEvento(dato)
        };
        fetchDataUsers()
    }, []) 


/*  ELIMINAR 
    function eliminarEvento(id) {
        EventosCrud.deleteEventos(id)
        location.reload();
    } */



async function editarEvento(id) {
  
         try {
          await EventosCrud.updateEventos(nombreEvento, nombreDescrip, imagenEvento);
          alert("Evento actualizado correctamente.");
          location.reload();
      } catch (error) {
      }

 }


  return (
    <div className="eventos-container">
        <h1 className='pxev'>Próximos Eventos</h1>
         {guardarEvento.map((data,index) => ( 
            <div key={data.id} className="asd">
                <div>
                    <img src={data.Imagen} className='imagenDato' alt="" />
                     <p className='datoevento'><strong className='str'>Evento: </strong>{data.Eventos}</p>
                     <p className='datoevento'><strong className='str'>Descripcion: </strong>{data.Descripcion}</p>
                     
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