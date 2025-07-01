import React, { useEffect, useState } from 'react'
import CrudUltimosResultados from '../../Services/CrudUltimosResultados'
import Swal from 'sweetalert2'
import '../../Components/MapeoUltimosResultados/MapUResultados.css'
import Escudopfc from '../../Images/Escudopfc.png'


import uploadImageToS3 from '../../Components/AWS/AwsConection'
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
    location.reload();
    CrudUltimosResultados.deleteUltimosResultados(id)
} 

    
//EDITAR
async function editar(id) {
  
  const resultado = guardarUltimosResultados.find(r => r.id === id);

  if (!resultado) return Swal.fire('Error', 'Resultado no encontrado', 'error');
  /* console.log(resultado); */
  

  const { value: formValues } = await Swal.fire({
    title: 'Editar Resultado',
    html: `
      <input id="resultado" class="swal2-input" placeholder="Resultado" value="${resultado.Resultado || ''}">
      
      <div class="swal2-file">
        <label for="imagen">Imagen (opcional)</label>
        <input id="imagen" type="file" accept="image/*">
        ${resultado.Imagen_Url ? `<img id="imagenPreview" src="${resultado.Imagen_Url}" alt="Imagen actual" style="max-width: 100px; margin-top: 10px;">` : ''}
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
    const url = resultado.Imagen
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


//Subir la nueva imagen
    subirAWS(archivoRenombrado)
    
    async  function subirAWS(imagenActualizar) {
        const rest_amazon = await uploadImageToS3(imagenActualizar)

        console.log(rest_amazon);
        
    }

      // Aqui hacemos la peticion a amazon para editar la imagen yb colocarla en el obj del la BD
   
     //   console.log(jugador.Imagen);
      
     
      const campos = {
        Resultado: document.getElementById('resultado').value.trim(),
        ImagenFile: document.getElementById('imagen').files[0] || null
      };

     /*  console.log(campos); */
      

      const hayVacios = Object.values(campos).some(val => !val && val !== null);
      if (hayVacios) {
        Swal.showValidationMessage('Por favor, completa todos los campos');
        return null;
      }

      return campos;
    }
  });

 /*  console.log(formValues) */
  let imageUrl = resultado.Imagen_Url;

   /*  if (formValues.ImagenFile) {
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
    location.reload(); */
    await CrudUltimosResultados.updateUltimosResultados(id, {
      Resultado: formValues.Resultado,
      Imagen: imageUrl
    });

    setUltimosResultados(prev =>
      prev.map(r =>
        r.id === id ? { ...r, ...formValues, Imagen_Url: imageUrl } : r
      )
    );

    Swal.fire('Actualizado', 'Los datos del resultado han sido actualizados.', 'success');
  
}



  return (
    <div>
      <h1 className="urcl">ÚLTIMOS RESULTADOS</h1>
      <div className="divPrin">
        {guardarUltimosResultados.map(dato => (
          <div key={dato.id} className="caj">
            <div className="hh">
              <p className="ps"><strong>Resultado:</strong> {dato.Resultado}</p>
              <p className="ps"><strong>Fecha:</strong> {dato.fecha}</p>
              <p className="ps"><strong>Equipos:</strong> {dato.equipos}</p>
              <div className="vs">
                <img className="imgEscudo" src={Escudopfc} alt="" />
                <p className="vs"><strong>VS</strong></p>
                <img src={dato.Imagen} className="imagenEquipo" alt="" />
              </div>
            </div>
            {esAdmin && (
              <div className="bottns">
                <button className="boton delete" onClick={() => eliminar(dato.id)}>Eliminar</button>
                <button className="boton update" onClick={() => editar(dato.id)}>Editar</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MapeoUltimosResultados