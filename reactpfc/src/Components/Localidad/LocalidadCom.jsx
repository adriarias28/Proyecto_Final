import React, { useState, useEffect } from 'react';
import '../../Components/Localidad/Localidad.css';
import CrudLocalidad from '../../Services/CrudLocalidad'
import { FaPlusCircle } from 'react-icons/fa';

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
     location.reload();
     setear()
   } 

 return (
    <div className="form-localidad-wrapper">
      <h2 className="form-title">Agregar Localidad</h2>
      <div className="form-localidad">
        
        <label className='labelLocal' htmlFor="">Nombre</label>
        <input className="input-localidad" id="nombre" placeholder="Ej: Sombra Oeste" value={nombreLocalidad} onChange={nombre} type="text"/>
        <label className='labelLocal' htmlFor="">Precio</label>
        <input className="input-localidad" id="precio" placeholder="Ej: 10000" value={precioLocalidad} onChange={precio} type="number"/>

        <button className="btn-agregar" onClick={btnAgregar}><FaPlusCircle className="icon" /> Agregar</button>
      </div>
    </div>
  );
}

export default LocalidadCom;