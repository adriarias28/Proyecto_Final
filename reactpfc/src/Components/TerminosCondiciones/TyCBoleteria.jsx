import React from 'react'
import { useState } from 'react'
import '../../Components/TerminosCondiciones/TyC.css'


function TyCBoleteria({ aceptoTC, setAceptoTC }) {

  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = () => setMostrarModal(true); 
  const cerrarModal = () => setMostrarModal(false);

  return (

    <div className="contenedorTer">
      <div className="ip">

        <input type="checkbox" checked={aceptoTC} onChange={(e) => setAceptoTC(e.target.checked)} />
        <p><strong>Acepto los </strong>
          <button className="btn-ver-tyc" onClick={abrirModal}>Términos y Condiciones</button>
        </p>
      </div>

      {mostrarModal && (
        <div className="modal-overlay">
          <div className="modal-contenido">
            <h3><span className="icono-alerta">⚠️</span> Términos y Condiciones</h3>
            <p>
              El evento puede ser cancelado, reprogramado o cambiar de lugar. En tal caso, deberá seguir el procedimiento publicado en el sitio web dentro del plazo indicado.
              Si no se solicita el reembolso o cambio en el tiempo establecido, se entenderá que el<strong> comprador acepta las nuevas condiciones.</strong>
              No se realizan devoluciones por no asistencia, pérdida de boletos o casos no previstos anteriormente.
            </p>
            <button className="btn-cerrar" onClick={cerrarModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TyCBoleteria;