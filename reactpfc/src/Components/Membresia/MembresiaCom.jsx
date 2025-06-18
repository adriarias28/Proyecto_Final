import React from 'react'
import '../../Components/Membresia/Membresia.css'


function MembresiaCom() {
  return (
    <div className='divContainer'>
      <h1 className='tit'>Socios PFC</h1>
      <div><br />
        <p className='parrafoMem'>Podés adquirir tu membresía a través de nuestro WhatsApp 
        8888-8888 o bien en las oficinas administrativas ubicadas en el Estadio José Rafael «Fello» Meza en horario de 8:00 a.m. a 12:00 m.d. y de 1:00 p.m. a 5:00 p.m.</p>
      </div><br />
      <h2 className='precios'>Precios de Entradas por Localidad</h2>
      <table className='tablaEntradas'>
        <tr>
          <th>Localidad</th>
          <th>1 Entrada</th>
          <th>2 Entrada</th>
          <th>3 Entrada</th>
        </tr>
        <tr>
          <td>Sol Oeste</td>
          <td>₡8,000</td>
          <td>₡15,000</td>
          <td>₡24,000</td>
        </tr>
        <tr>
          <td>Sol Este</td>
          <td>₡6,000</td>
          <td>₡11,000</td>
          <td>₡17,000</td>
        </tr>
        <tr>
          <td>Sombra</td>
          <td>₡14,000</td>
          <td>₡25,000</td>
          <td>—</td>
        </tr>
      </table>
    </div>
  )
}

export default MembresiaCom