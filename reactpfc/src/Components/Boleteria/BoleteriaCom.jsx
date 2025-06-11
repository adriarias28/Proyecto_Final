import React from 'react';
import '../../Components/Boleteria/Boleteria.css';
import Tib from '../../Images/Tib.png';
import MapeoLocalidad from '../MapeoLocalidad/MapeoLocalidad';

function BoleteriaCom() {
  return (
    <div className="boleteria">
      <h1 className="boleteria-titulo barco">EL BARCO VA QUE VA</h1>
     {/*  <h2 className="boleteria-subtitulo">LOCALIDADES:</h2> */}
      <MapeoLocalidad/>
    </div>
  );
}

export default BoleteriaCom;