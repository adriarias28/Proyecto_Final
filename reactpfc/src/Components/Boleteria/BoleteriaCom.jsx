import React from 'react';
import '../../Components/Boleteria/Boleteria.css';
import MapeoLocalidad from '../MapeoLocalidad/MapeoLocalidad';
import MapeoPartidos from '../MapeoPartidos/MapeoPartidos';
import ImgTiburon2 from '../../Images/ImgTiburon2.png'


function BoleteriaCom() {


  return (
    <div className="boleteria-wrapper">
      
            <div className="banner">
        <h2 className='tituloPar'>COMPRAR ENTRADAS</h2>
      </div>{/* 
      <img className='imgBol' src={ImgTiburon2} width={1351} height={230} alt="..." /> */}

      <div className="contenedor-flex">
        <MapeoPartidos esAdmin={false}/>  
        <MapeoLocalidad esAdmin={false}/>
        
      </div>
    </div>
  );
}

export default BoleteriaCom;