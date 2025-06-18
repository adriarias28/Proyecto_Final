import React, { useState, useEffect } from 'react';
import '../../Components/Localidad/Localidad.css';
import CrudLocalidad from '../../Services/CrudLocalidad'

function LocalidadCom() {

const[nombreLocalidad,setNombreLocalidad] = useState('')
const[precioLocalidad,setPrecioLocalidad] = useState('')

  function nombre(evento) {
    setNombreLocalidad(evento.target.value)
  }

  function precio(evento) {
    setPrecioLocalidad(evento.target.value)
  }

  function setear(){
    setNombreLocalidad('')
    setPrecioLocalidad('')
  }

   function btnAgregar() {
     CrudLocalidad.postLocalidades(nombreLocalidad,precioLocalidad)
     setear()
   } 


  return (
    <div className="localidades-background">
      <div>
        <label>Nombre</label>
          <input className='inputTodos' placeholder='Nombre' value={nombreLocalidad} onChange={nombre} type="text" />
          <label>Precio</label>
          <input className='inputTodos' placeholder='Precio' value={precioLocalidad} onChange={precio} type="text" />
          <button  onClick={btnAgregar}>Agregar </button><br /><br /> 
      </div>
    </div>
  );
}

export default LocalidadCom;