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
        location.reload();
    }


//EDITAR 
  async function editarEvento(id) {
  const evento = guardarEvento.find(e => e.id === id);
  if (!evento) {
    Swal.fire('Error', 'Evento no encontrado', 'error');
    return;
  }

  const { value: formValues } = await Swal.fire({
    title: 'Editar Evento',
    html: `
      <input id="swal-evento" class="swal2-input" placeholder="Evento" value="${evento.Eventos}">
      <input id="swal-descripcion" class="swal2-input" placeholder="Descripción" value="${evento.Descripcion}">
      <input id="swal-imagen" type="file" accept="image/*" class="swal2-file">
    `,
    focusConfirm: false,
    preConfirm: () => {
      const Eventos = document.getElementById('swal-evento').value;
      const Descripcion = document.getElementById('swal-descripcion').value;
      const fileInput = document.getElementById('swal-imagen');
      const file = fileInput.files[0];

      if (!Eventos || !Descripcion) {
        Swal.showValidationMessage('Completa todos los campos');
        return null;
      }

      return { Eventos, Descripcion, file };
    }
  });

  if (formValues) {
    try {
      let imagenURL = evento.Imagen;

      if (formValues.file) {
        const base64 = await new Promise((res, rej) => {
          const reader = new FileReader();
          reader.onload = () => res(reader.result);
          reader.onerror = rej;
          reader.readAsDataURL(formValues.file);
        });
        imagenURL = base64;
      }

      await EventosCrud.updateEventos(id, {
        Eventos: formValues.Eventos,
        Descripcion: formValues.Descripcion,
        Imagen: imagenURL
      });

      setguardarEvento(prev =>
        prev.map(ev =>
          ev.id === id
            ? { ...ev, Eventos: formValues.Eventos, Descripcion: formValues.Descripcion, Imagen: imagenURL }
            : ev
        )
      );

      Swal.fire('Actualizado', 'Evento actualizado con éxito', 'success');
    } catch (e) {
      console.error(e);
      Swal.fire('Error', 'No se pudo actualizar', 'error');
    }
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