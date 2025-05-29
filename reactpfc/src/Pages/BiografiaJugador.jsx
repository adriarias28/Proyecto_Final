import React from 'react'
import BioJugadorCom from '../Components/BiografiaJugador/BioJugadorCom'
import NavbarCom from '../Components/Navbar/NavbarCom'
import MapeoJuga from '../Components/MapeoJugadores/MapeoJuga'

function BiografiaJugador() {
  return (
    <div>
      <NavbarCom/>
      <BioJugadorCom/>
      <MapeoJuga/>
    </div>
  )
}

export default BiografiaJugador
