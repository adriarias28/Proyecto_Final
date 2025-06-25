import React from 'react';
import '../../Components/Boleteria/Boleteria.css';
import MapeoLocalidad from '../MapeoLocalidad/MapeoLocalidad';
import MapeoPartidos from '../MapeoPartidos/MapeoPartidos';

function BoleteriaCom() {


  return (
    <div className="boleteria-wrapper">

      <h2 className='tituloBole'>¡El barco va que va!</h2>
      
      <div className="contenedor-flex">
        <MapeoPartidos esAdmin={false}/>  
        <MapeoLocalidad esAdmin={false}/>
      </div>
    </div>
  );
}

export default BoleteriaCom;