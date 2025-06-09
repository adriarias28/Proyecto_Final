import React from 'react'
import BioJugadorCom from '../Components/BiografiaJugador/BioJugadorCom'
import AdminCom from '../Components/Administrador/AdminCom'
import MapeoJuga from '../Components/MapeoJugadores/MapeoJuga'


function BiografiaJugador() {
  return (
    <div>

      <AdminCom/>
      <BioJugadorCom/>
      <MapeoJuga esAdmin={true} /> 
      
    </div>
  )
}

export default BiografiaJugador
