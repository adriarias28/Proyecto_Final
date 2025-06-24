import React, { useEffect, useState } from 'react'
import EventosCrud from '../../Services/EventosCrud'
import '../../Components/MapeoEventos/MapeoEventos.css'
import Swal from 'sweetalert2';

function MapeoEventos({ esAdmin = false }) {

const[guardarEvento, setguardarEvento] = useState([])

    useEffect(() => {

        async function fetchDataUsers() {
            const data = await EventosCrud.getEventos()
            
            setguardarEvento(data)
        };
        fetchDataUsers()
    }, []) 


//ELIMINAR 
    function eliminarEvento(id) {
        EventosCrud.deleteEventos(id)
    }


//EDITAR 
    async function editarEvento(id) {
        const eventoEditar = guardarEvento.find((loc) => loc.id === id);
        if (!eventoEditar) {
            Swal.fire('Error', 'Localidad no encontrada', 'error');
            return;
        }

        const { value: formValues } = await Swal.fire({
            title: 'Editar Evento',
            html: `
            <input id="swal-input1" class="swal2-input" placeholder="Evento" value="${eventoEditar.Eventos || ''}">
            <input id="swal-input1" class="swal2-input" placeholder="Evento" value="${eventoEditar.Descripcion || ''}">
            `,
            focusConfirm: false,
            showCancelButton: true,
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar',
            preConfirm: () => {
            const Eventos = document.getElementById('swal-input1').value;
            const Descripcion = document.getElementById('swal-input2').value;

            if (!Eventos || !Descripcion) {
                Swal.showValidationMessage('Por favor, completa todos los campos');
                return null;
            }

            return { Eventos, Descripcion };
            },
        });

        if (formValues) {
            try {
            await EventosCrud.updateEventos(id, formValues);

            setguardarEvento(prev =>
                prev.map((loc) =>
                loc.id === id
                    ? { ...loc, Eventos: formValues.Eventos, Descripcion: formValues.Descripcion }
                    : loc
                )
            );

            Swal.fire('Actualizado', 'El evento ha sido actualizado.', 'success');
            } catch (error) {
            console.error('Error al actualizar', error);
            Swal.fire('Error', 'No se pudo actualizar el evento.', 'error');
            }
        }
        }

  return (
    <div className="eventos-container">
        <h1>Próximos Eventos</h1>
         {guardarEvento.map((data,index) => ( 
            <div key={data.id} className="evento-card">
                <div>
                     <p className='datoevento'><strong>Evento: </strong>{data.Eventos}</p>
                     <p className='datoevento'><strong>Descripcion: </strong>{data.Descripcion}</p>
                     <img src={data.Imagen} className='imagenDato' alt="" />
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