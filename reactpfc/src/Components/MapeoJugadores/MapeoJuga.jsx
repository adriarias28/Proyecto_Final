import CrudJugadores from '../../Services/CrudJugadores'
import React, { useEffect, useState } from 'react'
import '../../Components/MapeoJugadores/MapeoJugadores.css'
import Swal from 'sweetalert2'


function MapeoJuga({ esAdmin = false }) {

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

      const hayVacios = Object.values(campos).some(val => !val && val !== null);
      if (hayVacios) {
        Swal.showValidationMessage('Por favor, completa todos los campos');
        return null;
      }

      return campos;
    }
  });

  if (formValues) {
    let imageUrl = jugador.Imagen_Url;

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
      Imagen_Url: imageUrl
    });

    setGuardarJugadores(prev =>
      prev.map(j =>
        j.id === id ? { ...j, ...formValues, Imagen_Url: imageUrl } : j
      )
    );

    Swal.fire('Actualizado', 'Los datos del jugador han sido actualizados.', 'success');
  }
}



  return (
    <div className='divP'>
      <h1>NUESTROS JUGADORES</h1>
      <div className="jugadores-grid">
        {guardarJugadores.map((dato,index) => (
        <div key={dato.id} className="jugador-card">
          {esAdmin === false &&(
            <div className='jugador-agregado'>
            <img src={dato.Imagen} alt="im" />
            <p className='dt'>{dato.Nombre_Completo}</p><br />
            <p className='td'>{/* <strong>Posicion: </strong> */}{dato.Posicion}</p><br />
            </div>
          )}
          </div>
            ))}

            {guardarJugadores/* .slice(-5) */.map((dato,index) => (
            <div key={dato.id} className="jugador-card">
                {esAdmin && (
                <div className='jugador-agregado'>
                      <p className='datos'><strong>Nombre: </strong>{dato.Nombre_Completo}</p><br />
                      <p className='datos'><strong>Posicion: </strong>{dato.Posicion}</p><br />
                      <p className='datos'><strong>Fecha Nacimiento: </strong>{dato.Fecha_Nacimiento}</p><br />
                      <p className='datos'><strong>Edad: </strong>{dato.Edad}</p><br />
                      <p className='datos'><strong>Lugar Nacimiento: </strong>{dato.Lugar_Nacimiento}</p><br />
                      <p className='datos'><strong>Nacionalidad: </strong>{dato.Nacionalidad}</p><br />
                      <p className='datos'><strong>Altura: </strong>{dato.Altura}</p><br />
                      <p className='datos'><strong>Peso: </strong>{dato.Peso}</p><br />
                      
                      <p className='datos'><strong>Numero: </strong>{dato.Numero}</p><br />
                      <p className='datos'><strong>Club: </strong>{dato.Club_Actual}</p><br />
                      <p className='datos'><strong>Pie Dominante: </strong>{dato.Pie_Dominante}</p>
                      <img src={dato.Imagen} alt="im" />
                      
                      <div className="botones-jugador">
                        <p className='butt'>
                            <button className='botoned' onClick={() => eliminar(dato.id)}>Eliminar</button>
                            <button className='botoned' onClick={() => editar(dato.id)}>Editar</button>
                        </p>
                      </div>
                  </div>
                )}
            
            </div>
           ))} 
      </div>
    </div>
  )
}

export default MapeoJuga