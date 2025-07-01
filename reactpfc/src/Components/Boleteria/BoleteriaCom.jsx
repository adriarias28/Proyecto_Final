import React from 'react';
import '../../Components/Boleteria/Boleteria.css';
import MapeoLocalidad from '../MapeoLocalidad/MapeoLocalidad';
import MapeoPartidos from '../MapeoPartidos/MapeoPartidos';


function BoleteriaCom() {


  return (
    <div className="boleteria-wrapper">
      
            <div className="banner">
        <h2 className='tituloPar'>COMPRAR ENTRADAS</h2>
      </div>

      <div className="contenedor-flex">
        <MapeoPartidos esAdmin={false}/>  
        <MapeoLocalidad esAdmin={false}/>
        
      </div>
    </div>
  );
}

export default BoleteriaCom;