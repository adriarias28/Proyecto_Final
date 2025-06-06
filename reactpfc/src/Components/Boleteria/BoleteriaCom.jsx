import React from 'react';
import '../../Components/Boleteria/Boleteria.css';
import Tib from '../../Images/Tib.png';

function BoleteriaCom() {
  return (
    <div className="boleteria">
      <h1 className="boleteria-titulo barco">EL BARCO VA QUE VA</h1>
      <h2 className="boleteria-subtitulo">LOCALIDADES:</h2>

      {/* <div className="boleteria-detalles">
        <h3 className="boleteria-label">Norte</h3>
        <h3 className="boleteria-label">Este</h3>
        <h3 className="boleteria-label">Oeste</h3>
        <h3 className="boleteria-label">Sur</h3>
      </div> */}

      <h2 className="boleteria-subtitulo">Entradas:</h2>

      <div className="boleteria-cargo">
        <h2 className="boleteria-label">CARGO POR SERVICIO:</h2>
        <h3 className="boleteria-monto">¢ 500.00</h3>
      </div>

      <h2 className="boleteria-total">TOTAL A PAGAR:</h2>

      <div className="boleteria-botones">
        <button className="btn-cancelar">Cancelar</button>
        <button className="btn-pagar">Pagar</button>
      </div>
    </div>
  );
}

export default BoleteriaCom;
