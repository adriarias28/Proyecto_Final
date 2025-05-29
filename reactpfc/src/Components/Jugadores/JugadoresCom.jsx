import React from 'react'
import '../../Components/Jugadores/Jugadores.css'
import hiram from '../../Components/Imagenes/hiram.png'

function JugadoresCom() {
  return (
    <div>
        <div className="bio">
          <img src={hiram} alt="Hiram Muñoz" className="jug" />
        </div>
    </div>
  )
}

export default JugadoresCom
