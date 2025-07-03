import React, { useEffect, useState } from 'react'
import EventosCrud from '../../Services/EventosCrud'
import '../../Components/MapeoEventos/MapeoEventos.css'
import Swal from 'sweetalert2';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

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


//ELIMINAR 
    function eliminarEvento(id) {
        EventosCrud.deleteEventos(id)
        location.reload();
    }


//EDITAR
/* async function editarEvento(id) {
  
  const evento = guardarEvento.find(e => e.id === id);
  console.log(evento);
  

  if (!evento) return Swal.fire('Error', 'Evento no encontrado', 'error');  

  const { value: formValues } = await Swal.fire({
    title: 'Editar Eventos',
    html: `
      <input id="eventos" class="swal2-input" placeholder="Eventos" value="${evento.Eventos || ''}">
      <input id="descripcion" class="swal2-input" placeholder="Descripcion" value="${evento.Descripcion || ''}">
      <div class="swal2-file">
        <label for="imagen">Imagen (opcional)</label>
        <input id="imagen" type="file" accept="image/*">
        ${evento.Imagen ? `<img id="imagenPreview" src="${evento.Imagen}" alt="Imagen actual" style="max-width: 100px; margin-top: 10px;">` : ''}
      </div>
    `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    cancelButtonText: 'Cancelar',

    preConfirm: () => {

    const imagenActualizar = document.getElementById('imagen').files[0]
    console.log(imagenActualizar);
    

    const url = evento.Imagen
    const partes = url.split("/");
    const nombreArchivo = decodeURIComponent(partes[partes.length - 1]);

    const archivoOriginal = imagenActualizar; por ejemplo, el que obtienes con un input type="file"
    const nuevoNombre = nombreArchivo;

    const archivoRenombrado = new File([archivoOriginal], nuevoNombre, {
      type: archivoOriginal.type,
      lastModified: archivoOriginal.lastModified,
});


Subir la nueva imagen
    subirAWS(archivoRenombrado)
    
    async  function subirAWS(imagenActualizar) {
        const rest_amazon = await uploadImageToS3(imagenActualizar)

        console.log(rest_amazon);
        
    }

       Aqui hacemos la peticion a amazon para editar la imagen yb colocarla en el obj del la BD
   
     console.log(jugador.Imagen);
      
     
      const campos = {
        Eventos: document.getElementById('eventos').value.trim(),
        Descripcion: document.getElementById('descripcion').value.trim(),
        ImagenFile: document.getElementById('imagen').files[0] || null
      };

      console.log(campos);
      

      const hayVacios = Object.values(campos).some(val => !val && val !== null);
      if (hayVacios) {
        Swal.showValidationMessage('Por favor, completa todos los campos');
        return null;
      }

      return campos;
    }
  });

  console.log(formValues)
  let imageUrl = resultado.Imagen;

     if (formValues.ImagenFile) {
      const fd = new FormData();
      fd.append('file', formValues.ImagenFile);

      const res = await fetch('/upload-s3', {
        method: 'POST',
        body: fd
      });
      if (!res.ok) throw new Error(res.statusText);
      const { Location } = await res.json();
      imageUrl = Location;
    }
    location.reload(); 
    await EventosCrud.updateEventos(id, {
      Eventos: formValues.Eventos,
      Descripcion: formValues.Descripcion,
      Imagen: imageUrl
    });

    setguardarEvento(prev =>
      prev.map(e =>
        e.id === id ? { ...e, ...formValues, Imagen_Url: imageUrl } : e
      )
    );

    Swal.fire('Actualizado', 'Los datos del Eventos han sido actualizados.', 'success');
  
} */



  return (
    <div className="eventos-container">
        <p className='pxevDos'><strong>PRÓXIMOS</strong></p>
        <h1 className='pxev'> Eventos</h1>
         {guardarEvento.map((data,index) => ( 
            <div key={data.id} className="asd">
                <div>
                    <img src={data.Imagen} className='imagenDato' alt="" />
                     <p className='datoevento'><strong className='str'>Evento: </strong>{data.Eventos}</p>
                     <p className='datoevento'><strong className='str'>Descripcion: </strong>{data.Descripcion}</p>
                    {esAdmin && (
                        <div className='botones'>
                                <button className='botonEliminar' onClick={() => eliminarEvento(data.id)}><FaTrashAlt style={{ marginRight: '5px' }} />Eliminar</button>
                                <button className='botonEditar' onClick={() => editarEvento(data.id)}><FaEdit style={{ marginRight: '5px' }} />Editar</button>
                            <p className='butt'>
                                <button className='botonEliminar' onClick={() => eliminarEvento(data.id)}>Eliminar</button>
                                {/* <button className='botonEditar' onClick={() => editarEvento(data.id)}>Editar</button> */}
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