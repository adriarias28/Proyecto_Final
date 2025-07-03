import React from 'react'
import '../../Components/Patrocinadores/Patrocinadores.css'
import bn from '../../Images/bn.png'
import elec from '../../Images/elec.png'
import bp from '../../Images/bp.jpg'
import hoteltio from '../../Images/hoteltio.png'
import incop from '../../Images/incop.png'
import monta from '../../Images/monta.png'
import tigo from '../../Images/tigo.png'
import jb from '../../Images/jb.jpg'
import UH from '../../Images/UH.jpg'

function PatrocinadoresCom() {


  return (

    <div className='contePatrocinadores'>
        <div className="carrusel-wrapper">
            
            <p className='parrafoPatro'>¡Estas marcas son parte de nuestra familia!</p>
            <h2 className="titulo-carrusel">Patrocinadores Oficiales</h2><br />
            <div className="slider">
                <div className="slide-track">
                <img className='imgPa' src={bn} width={200} height={200} alt="..." />
                <img className='imgPa' src={bp} width={200} height={200} alt="..." />
                <img className='imgPa' src={elec} width={200} height={200} alt="..." />
                <img className='imgPa' src={hoteltio} width={200} height={200} alt="..." />
                <img className='imgPa' src={incop} width={200} height={200} alt="..." />
                <img className='imgPa' src={monta} width={200} height={200} alt="..." />
                <img className='imgPa' src={tigo} width={200} height={200} alt="..." />
                <img className='imgPa' src={jb} width={200} height={200} alt="..." />
                <img className='imgPa' src={UH} width={200} height={200} alt="..." />

                </div>
            </div>
        </div>

    </div>
  )
}

export default PatrocinadoresCom
