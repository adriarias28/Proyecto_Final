import React from 'react';
import '../../Components/Boleteria/Boleteria.css';
import MapeoLocalidad from '../MapeoLocalidad/MapeoLocalidad';
import { useState } from 'react';
import Swal from 'sweetalert2';

function BoleteriaCom() {



  return (

    <div className="boleteria">
      
      <h2 className="boleteria-titulo">¡Nos vemos en La Olla Mágica!</h2>
      
      <MapeoLocalidad />

      
    </div>
  );
}

export default BoleteriaCom;