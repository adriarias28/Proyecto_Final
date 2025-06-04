import React from 'react'
import '../../Components/UltimosResultados/UltimosResul.css'
import escudopfc from '../../Images/escudopfc.png'
import EscudoLiga from '../../Images/EscudoLiga.png'
import SantaAna from '../../Images/SantaAna.jfif'


function UltimosResulCom() {
  return (
    <div className='bodyUltimosResul'>
      <h3 className='h3'>PARTIDOS</h3>
      <h1 className='h1'>ÚLTIMOS RESULTADOS</h1>

      <div className='df'>
      <div className="resultados">
        <div className="fecha">14 mayo, 2025</div>
        <div className="equipos">
          <img src={escudopfc} alt="" />
          <h1>0 - 1</h1>
          <img src={EscudoLiga} alt="" />
        </div>
        <div className="fut">
          Fútbol de Primera División - Liga Promerica
        </div>
        </div>
        <div className='resultados'>
        <div className="fecha">11 mayo, 2025</div>
        <div className="equipos">
          <img src={escudopfc} alt="" />
          <h1>0 - 0</h1>
          <img src={EscudoLiga} alt="" />
        </div>
        <div className="fut">
          Fútbol de Primera División - Liga Promerica
        </div>
        </div>
        <div className='resultados'>
        <div className="fecha">07 mayo, 2025</div>
        <div className="equipos">
          <img src={escudopfc} alt="" />
          <h1>1 - 0</h1>
          <img src={SantaAna} alt="" />
        </div>
        <div className="fut">
          Fútbol de Primera División - Liga Promerica
        </div>
        </div>
      </div>
    </div>
  );
}

export default UltimosResulCom
