import React, { useEffect, useState } from 'react'
import CrudLocalidad from '../../Services/CrudLocalidad'
import '../../Components/MapeoLocalidad/MapeoLocalidad.css'
import Swal from 'sweetalert2'
import Paypal from '../../Components/Boleteria/PayPal'
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
  {guardarLocalidad.map((dato, index) => {
    const cantidad = dato.cantidad || 0;
    /* functión Suma */
    const suma = () => {
      const nuevasLocalidades = guardarLocalidad.map(loc =>
        loc.id === dato.id ? { ...loc, cantidad: (loc.cantidad || 0) + 1 } : loc
      );
      setGuardarLocalidad(nuevasLocalidades);
    };
    /* ...loc= cantidad anterior,
         nueva cantidad y va sumando 1 al tocar el botón
         Todo en un mapeo, para que se realice el ciclo*/
    /* functión Resta */
    const resta = () => {
      const nuevasLocalidades = guardarLocalidad.map(loc =>
        loc.id === dato.id && (loc.cantidad || 0) > 0
          ? { ...loc, cantidad: loc.cantidad - 1 }
          : loc
      );
      setGuardarLocalidad(nuevasLocalidades);
      /* va restando 1 al tocar el botón  */
    };
    return (
      <div key={dato.id} className="localidad-card entrada-item">
        <div className='entrada-info'>
          <div className='tipo-entrada'>{dato.Nombre}</div>
          <div className='precio-entrada'>₡ {parseFloat(dato.Precio).toLocaleString()}</div>
        </div>  {/* parseFloat= convierte una cadena de texto en un número de punto flotante*/}
        <div className="cantidad-control">
          <button className="cantidad-btn" onClick={resta}>−</button>
          <span className="cantidad-num">{cantidad}</span>
          <button className="cantidad-btn" onClick={suma}>+</button>
        </div>
        {esAdmin && (
          <div className="botones-partidos">
            <button className='boton delete' onClick={() => eliminar(dato.id)}>Eliminar</button>
            <button className='boton update' onClick={() => editar(dato.id)}>Editar</button>
          </div>
        )}
      </div>
    );
  })}
  {/* Mostrar total de entradas y total en colones */}
  <div className='total-container'>
    <p><strong>CANTIDAD DE ENTRADAS:</strong> {
      guardarLocalidad.reduce((acc, loc) => acc + (loc.cantidad || 0), 0)
    }</p>
     {/* reduce= suma la cantidad total de entradas compradas */}
    <p><strong>TOTAL A PAGAR:</strong> ₡ {
      guardarLocalidad.reduce((acc, loc) => acc + (loc.cantidad || 0) * parseFloat(loc.Precio || 0), 0).toLocaleString()
    } <div>IVA incluido</div></p>
    <button className='btnPagar'>PAGAR</button>
  </div>
  <Paypal/>
</div>
  )
}
export default MapeoLocalidad






