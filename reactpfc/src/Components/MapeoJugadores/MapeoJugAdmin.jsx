import CrudJugadores from '../../Services/CrudJugadores'
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import '../../Components/MapeoJugadores/MapeoJugAdmin.css'
import { FaTrashAlt, FaEdit } from 'react-icons/fa';

//COMPONENTE DE PAGINA ADMINISTRADOR
import uploadImageToS3 from '../../Components/AWS/AwsConection'
function MapeoJugAdmin() {
const[guardarJugadores, setGuardarJugadores] = useState([])

    useEffect(() => {

        async function fetchDataUsers() {
            const dato = await CrudJugadores.getBiografiaJugador()
            console.log(dato);
            
            setGuardarJugadores(dato)
        };
        fetchDataUsers()
    }, []) 

    
//ELIMINAR
    function eliminar(id) {
      location.reload();
    CrudJugadores.deleteBiografiaJugador(id)
    } 

    
//EDITAR
async function editar(id) {
  
  const jugador = guardarJugadores.find(j => j.id === id);

  if (!jugador) return Swal.fire('Error', 'Jugador no encontrado', 'error');
 /*  console.log(jugador); */
  

  const { value: formValues } = await Swal.fire({
    title: 'Editar Jugador',
    html: `
      <input id="nombre" class="swal2-input" placeholder="Nombre" value="${jugador.Nombre_Completo || ''}">
      <input id="fecha" class="swal2-input" type="date" value="${jugador.Fecha_Nacimiento || ''}">
      <input id="edad" class="swal2-input" placeholder="Edad" value="${jugador.Edad || ''}">
      <input id="lugar" class="swal2-input" placeholder="Lugar Nacimiento" value="${jugador.Lugar_Nacimiento || ''}">
      <input id="nacionalidad" class="swal2-input" placeholder="Nacionalidad" value="${jugador.Nacionalidad || ''}">
      <input id="altura" class="swal2-input" placeholder="Altura" value="${jugador.Altura || ''}">
      <input id="peso" class="swal2-input" placeholder="Peso" value="${jugador.Peso || ''}">
      <input id="posicion" class="swal2-input" placeholder="Posición" value="${jugador.Posicion || ''}">
      <input id="numero" class="swal2-input" placeholder="Número" value="${jugador.Numero || ''}">
      <input id="club" class="swal2-input" placeholder="Club Actual" value="${jugador.Club_Actual || ''}">
      <input id="pie" class="swal2-input" placeholder="Pie Dominante" value="${jugador.Pie_Dominante || ''}">
      <div class="swal2-file">
        <label for="imagen">Imagen (opcional)</label>
        <input id="imagen" type="file" accept="image/*">
        ${jugador.Imagen_Url ? `<img id="imagenPreview" src="${jugador.Imagen_Url}" alt="Imagen actual" style="max-width: 100px; margin-top: 10px;">` : ''}
      </div>
    `,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    cancelButtonText: 'Cancelar',

    preConfirm: () => {

  //Aqui va la imagen de file escogida nueva
//const actualizaAmazon =  uploadImageToS3()


//ESTA ES LA NUEVA
    const imagenActualizar = document.getElementById('imagen').files[0]

//Esto para que guarde la imagen nueva con el mismo nombre que la vieja
    const url = jugador.Imagen
    const partes = url.split("/");
    const nombreArchivo = decodeURIComponent(partes[partes.length - 1]);

     // Supongamos que tienes el archivo original
    const archivoOriginal = imagenActualizar; // por ejemplo, el que obtienes con un input type="file"
    const nuevoNombre = nombreArchivo;

    // Crear un nuevo archivo con el nuevo nombre
    const archivoRenombrado = new File([archivoOriginal], nuevoNombre, {
      type: archivoOriginal.type,
      lastModified: archivoOriginal.lastModified,
});

/*   console.log(archivoRenombrado); */
  
//Subir la nueva imagen
    subirAWS(archivoRenombrado)
    
    async  function subirAWS(imagenActualizar) {
        const rest_amazon = await uploadImageToS3(imagenActualizar)

        console.log(rest_amazon);
        
    }

      // Aqui hacemos la peticion a amazon para editar la imagen yb colocarla en el obj del la BD
   
     //   console.log(jugador.Imagen);
      
     
      const campos = {
        Nombre_Completo: document.getElementById('nombre').value.trim(),
        Fecha_Nacimiento: document.getElementById('fecha').value.trim(),
        Edad: document.getElementById('edad').value.trim(),
        Lugar_Nacimiento: document.getElementById('lugar').value.trim(),
        Nacionalidad: document.getElementById('nacionalidad').value.trim(),
        Altura: document.getElementById('altura').value.trim(),
        Peso: document.getElementById('peso').value.trim(),
        Posicion: document.getElementById('posicion').value.trim(),
        Numero: document.getElementById('numero').value.trim(),
        Club_Actual: document.getElementById('club').value.trim(),
        Pie_Dominante: document.getElementById('pie').value.trim(),
        ImagenFile: document.getElementById('imagen').files[0] || null
      };

      /* console.log(campos); */
      

      const hayVacios = Object.values(campos).some(val => !val && val !== null);
      /* console.log(hayVacios); */
      
      if (hayVacios) {
        Swal.showValidationMessage('Por favor, completa todos los campos');
        return null;
      }

      return campos;
    }
  });

/*   console.log(formValues); */


     let imageUrl = jugador.Imagen;
/*
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
    } */

  /*   console.log(formValues.Nombre_Completo,
      formValues.Fecha_Nacimiento,
      formValues.Edad,
       formValues.Lugar_Nacimiento,
       formValues.Nacionalidad,
       formValues.Altura,
      formValues.Peso,
       formValues.Posicion,
      formValues.Numero,
       formValues.Club_Actual,
      formValues.Pie_Dominante,
     imageUrl); */
    
    await CrudJugadores.updateBiografiaJugador(id, {
      Nombre_Completo: formValues.Nombre_Completo,
      Fecha_Nacimiento: formValues.Fecha_Nacimiento,
      Edad: formValues.Edad,
      Lugar_Nacimiento: formValues.Lugar_Nacimiento,
      Nacionalidad: formValues.Nacionalidad,
      Altura: formValues.Altura,
      Peso: formValues.Peso,
      Posicion: formValues.Posicion,
      Numero: formValues.Numero,
      Club_Actual: formValues.Club_Actual,
      Pie_Dominante: formValues.Pie_Dominante,
      Imagen: imageUrl
    });

    setGuardarJugadores(prev =>
      prev.map(j =>
        j.id === id ? { ...j, ...formValues, Imagen_Url: imageUrl } : j
      )
    );

    Swal.fire('Actualizado', 'Los datos del jugador han sido actualizados.', 'success');
}



  return (
    <div className='divPrincipal'>
      <div className="mapeoadm">
            {guardarJugadores.map((dato,index) => (
            <div key={dato.id} className="cardJug">
                
                <div className='agregado'>
                      <p className='datostrong'><strong>Nombre: </strong>{dato.Nombre_Completo}</p><br />
                      <p className='datostrong'><strong>Posicion: </strong>{dato.Posicion}</p><br />
                      <p className='datostrong'><strong>Fecha Nacimiento: </strong>{dato.Fecha_Nacimiento}</p><br />
                      <p className='datostrong'><strong>Edad: </strong>{dato.Edad}</p><br />
                      <p className='datostrong'><strong>Lugar Nacimiento: </strong>{dato.Lugar_Nacimiento}</p><br />
                      <p className='datostrong'><strong>Nacionalidad: </strong>{dato.Nacionalidad}</p><br />
                      <p className='datostrong'><strong>Altura: </strong>{dato.Altura}</p><br />
                      <p className='datostrong'><strong>Peso: </strong>{dato.Peso}</p><br />
                      <p className='datostrong'><strong>Numero: </strong>{dato.Numero}</p><br />
                      <p className='datostrong'><strong>Club: </strong>{dato.Club_Actual}</p><br />
                      <p className='datostrong'><strong>Pie Dominante: </strong>{dato.Pie_Dominante}</p>
                      <img className='imgs' src={dato.Imagen} alt="im" />
                      
                      <div className="botones-jugador">
                            <button className='boton1' onClick={() => eliminar(dato.id)}><FaTrashAlt style={{ marginRight: '5px' }} />Eliminar</button>
                            <button className='boton2' onClick={() => editar(dato.id)}><FaEdit style={{ marginRight: '5px' }} />Editar</button>
                      </div>
                  </div>
            </div>
           ))} 
      </div>
    </div>
  )
}

export default MapeoJugAdmin