import React from 'react';
import '../../Components/Boleteria/Boleteria.css';
import MapeoLocalidad from '../MapeoLocalidad/MapeoLocalidad';
import MapeoPartidos from '../MapeoPartidos/MapeoPartidos';
import ImgTiburon from '../../Images/ImgTiburon.png'

import { FaTicketAlt } from 'react-icons/fa'

function BoleteriaCom() {


  return (
    <div className="boleteria-wrapper">
      
      <img className='imgBol' src={ImgTiburon} width={1500} height={230} alt="..." />
      <h2 className='tituloPar'><FaTicketAlt className="iconDos" /> Detalle de compra</h2>

      <div className="contenedor-flex">
        <MapeoPartidos esAdmin={false}/>  
        <MapeoLocalidad esAdmin={false}/>
        
      </div>
    </div>
  );
}

export default BoleteriaCom;