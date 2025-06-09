import React, { useEffect, useState } from 'react'
import CrudLocalidad from '../../Services/CrudLocalidad'
import '../../Components/Localidad/Local.css'
import Swal from 'sweetalert2'

function MapeoLocalidad({ esAdmin = false }) {

const[guardarLocalidad, setGuardarLocalidad] = useState([])


    useEffect(() => {

        async function fetchDataUsers() {
            const dato = await CrudLocalidad.getLocalidades()
            console.log(dato);
            
            setGuardarLocalidad(dato)
        };
        fetchDataUsers()
    }, []) 

//ELIMINAR
function eliminar(id) {
    CrudLocalidad.deleteLocalidades(id)
    } 

  // EDITAR
  async function editar(id) {
    const localidadEditar = guardarLocalidad.find((loc) => loc.id === id);
    if (!localidadEditar) {
      Swal.fire('Error', 'Localidad no encontrada', 'error');
      return;
    }

    const { value: formValues } = await Swal.fire({
      title: 'Editar Localidad',
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Nombre" value="${localidadEditar.Nombre || ''}">
        <input id="swal-input2" class="swal2-input" placeholder="Precio" type="number" value="${localidadEditar.Precio || ''}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const Nombre = document.getElementById('swal-input1').value;
        const Precio = document.getElementById('swal-input2').value;

        if (!Nombre || !Precio) {
          Swal.showValidationMessage('Por favor, completa todos los campos');
          return null;
        }

        return { Nombre, Precio };
      },
    });

    if (formValues) {
      try {
        await CrudLocalidad.updateLocalidades(id, formValues);

        setGuardarLocalidad(prev =>
          prev.map((loc) =>
            loc.id === id
              ? { ...loc, Nombre: formValues.Nombre, Precio: formValues.Precio }
              : loc
          )
        );

        Swal.fire('Actualizado', 'La localidad ha sido actualizada.', 'success');
      } catch (error) {
        console.error('Error al actualizar la localidad:', error);
        Swal.fire('Error', 'No se pudo actualizar la localidad.', 'error');
      }
    }
  }

  return (
    <div className='localidad-container'>
        {guardarLocalidad.map((dato,index) => (
        <div key={dato.id} className="localidad-card">
            <div className='jugador-agregado'>
              <div className='hh'>
                  <p className='datolocal'><strong>Nombre: </strong>{dato.Nombre}</p><br />
                  <p className='datolocal'><strong>Precio: </strong>{dato.Precio}</p><br />
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

export default MapeoLocalidad