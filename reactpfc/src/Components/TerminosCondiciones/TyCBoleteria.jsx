import React from 'react'
import { useState } from 'react'

function TyCBoleteria() {

  const [aceptoTC,setAceptoTC]=useState("")

    function acepto(evento) {
    
      setAceptoTC(evento.target.value)

    }

  return (
    <div className='ptcb'>
        <p className='ptcb'>
          El evento es cancelado, reprogramado o cambia de lugar. 
           En tal caso deberá seguir el procedimiento publicado en el sitio web 
           dentro del plazo indicado.
           Si no se solicita el reembolso o cambio en el tiempo establecido,
           se entenderá que el Comprador acepta las condiciones nuevas.
           No se realizan devoluciones por no asistencia, pérdida de boletos o 
           casos no previstos anteriormente.”
        </p>
        <div className='ip'>
          {/* <input className='inpuesti' value={nombrePersona} onChange={nombre} placeholder='Ingrese tu nombre' type="text" /> */}
          <input value={aceptoTC} onChange={acepto} type="checkbox" />
          <p> <strong>Acepto los Términos y Condiciones</strong></p>
       </div>
  </div>
  )
}

export default TyCBoleteria