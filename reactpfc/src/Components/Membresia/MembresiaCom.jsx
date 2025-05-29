import React from 'react'
import '../../Components/Membresia/Membresia.css'
import Equipo from '../../Components/Imagenes/Equipo.jpeg'

function MembresiaCom() {
  return (
    <div className='divContainer'>
      <h1 className='tit'>ASOCIADOS PFC</h1>
      <img src={Equipo} alt="" className='equipo'/>
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