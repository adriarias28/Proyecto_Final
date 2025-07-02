import React from 'react'
import '../../Components/Patrocinadores/Patrocinadores.css'
import bn from '../../Images/bn.png'
import elec from '../../Images/elec.png'
import bp from '../../Images/bp.jpg'
import hoteltio from '../../Images/hoteltio.png'
import incop from '../../Images/incop.png'
import monta from '../../Images/monta.png'
import tigo from '../../Images/tigo.png'

function PatrocinadoresCom() {


  return (

    <div className='contePatrocinadores'>
        <div className="carrusel-wrapper">
            <h2 className="titulo-carrusel">Patrocinadores Oficiales</h2>
            <p>¡Estas marcas son parte de nuestra familia!</p>
            
            <img className='bn' src={bn} width={50} height={50} alt="..." />
            <img className='bn' src={bp} width={50} height={50} alt="..." />
            <img className='bn' src={elec} width={50} height={50} alt="..." />
            <img className='bn' src={hoteltio} width={50} height={50} alt="..." />
            <img className='bn' src={incop} width={50} height={50} alt="..." />
            <img className='bn' src={monta} width={50} height={50} alt="..." />
            <img className='bn' src={tigo} width={50} height={50} alt="..." />
            
        </div>

    </div>
  )
}

export default PatrocinadoresCom
