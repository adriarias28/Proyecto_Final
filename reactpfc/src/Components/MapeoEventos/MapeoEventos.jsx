import React, { useEffect, useState } from 'react'
import EventosCrud from '../../Services/EventosCrud'
import '../../Components/MapeoEventos/MapeoEventos.css'
import Swal from 'sweetalert2';

import uploadImageToS3 from '../../Components/AWS/AwsConection'
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
  if (!evento) return Swal.fire('Error', 'Evento no encontrado', 'error');
  

  const { value: formValues } = await Swal.fire({
    title: 'Editar Evento',
    html: `
      <input id="eventos" class="swal2-input" placeholder="Eventos" value="${evento.Eventos || ''}">
      <input id="descripcion" class="swal2-input" placeholder="Descripción" value="${evento.Descripcion || ''}">
      <input id="swal-imagen" type="file" accept="image/*" class="swal2-file">
      <div class="swal2-file">
        <label for="imagen">Imagen (opcional)</label>
        <input id="imagen" type="file" accept="image/*">
        ${evento.Imagen_Url ? `<img id="imagenPreview" src="${evento.Imagen_Url}" alt="Imagen actual" style="max-width: 100px; margin-top: 10px;">` : ''}
      </div>
      `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    cancelButtonText: 'Cancelar',

    preConfirm: () => {

    const imagenActualizar = document.getElementById('imagen').files[0]

    const url = evento.Imagen
    const partes = url.split("/");
    const nombreArchivo = decodeURIComponent(partes[partes.length - 1]);

    const archivoOriginal = imagenActualizar; // por ejemplo, el que obtienes con un input type="file"
    const nuevoNombre = nombreArchivo;

    const archivoRenombrado = new File([archivoOriginal], nuevoNombre, {
      type: archivoOriginal.type,
      lastModified: archivoOriginal.lastModified,
});

    subirAWS(archivoRenombrado)
    
    async  function subirAWS(imagenActualizar) {
        const rest_amazon = await uploadImageToS3(imagenActualizar)

        console.log(rest_amazon);
        
    }


      const campos ={
        Eventos : document.getElementById('eventos').value.trim(),
        Descripcion : document.getElementById('descripcion').value.trim(),
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

  if (formValues){
    let imageUrl = evento.Imagen_Url;
  

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
      Eventos: formValues.Nombre_Completo,
      Descripcion: formValues.Fecha_Nacimiento,
      Imagen_Url: imageUrl
    });

    setGuardarJugadores(prev =>
      prev.map(j =>
        j.id === id ? { ...j, ...formValues, Imagen_Url: imageUrl } : j
      )
    );




    await fetch(`/api/eventos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Eventos: formValues.Eventos,
        Descripcion: formValues.Descripcion,
        Imagen: imageUrl
      })
    });

    // 3. Actualiza estado local
    setguardarEvento(prev =>
      prev.map(ev =>
        ev.id === id ? { ...ev, ...formValues, Imagen_Url: imageUrl }: ev
      )
    );

    Swal.fire('Actualizado', 'Evento actualizado con éxito', 'success');
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