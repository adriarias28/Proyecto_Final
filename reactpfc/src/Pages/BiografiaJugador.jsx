import React from 'react'
import BioJugadorCom from '../Components/BiografiaJugador/BioJugadorCom'

import AdminCom from '../Components/Administrador/AdminCom'
import MapeoJuga from '../Components/MapeoJugadores/MapeoJuga'
import "../styles.css/PartidosPage.css"

function BiografiaJugador() {
  return (
    <div className='bodyPartidos'>

      <AdminCom/>
      <BioJugadorCom/>
      <MapeoJuga esAdmin={true} /> 
      
    </div>
  )
}

export default BiografiaJugador
