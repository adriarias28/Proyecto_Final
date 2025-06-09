import React from 'react'
import BioJugadorCom from '../BiografiaJugador/BioJugadorCom'
import MapeoJuga from '../MapeoJugadores/MapeoJuga'

function JugadoresCRUS() {
  return (

    <div>

        <BioJugadorCom/>
        <MapeoJuga esAdmin={true}/>

    </div>
  )
}

export default JugadoresCRUS