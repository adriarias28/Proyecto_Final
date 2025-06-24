import React from 'react'
import BioJugadorCom from '../Components/BiografiaJugador/BioJugadorCom'
import AdminCom from '../Components/Administrador/AdminCom'
import MapeoJugAdmin from '../Components/MapeoJugadores/MapeoJugAdmin'


function BiografiaJugador() {
  return (
    <div>

      <AdminCom/>
      <BioJugadorCom/>
      <MapeoJugAdmin/>
    </div>
  )
}

export default BiografiaJugador
