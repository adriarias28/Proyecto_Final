import React from 'react';
import '../../Components/Boleteria/Boleteria.css';

function BoleteriaCom() {
  return (
    <div className='boleteria'> 
      <div className='boleto-box'>
        <h1 className='barco'>EL BARCO VA QUE VA</h1>
        <p className='subtexto'>🎟️ Adquiere tus entradas para el próximo partido del PFC</p>
        <button className='boleto'>Comprar Entradas</button>
      </div>
    </div>
  );
}

export default BoleteriaCom;
