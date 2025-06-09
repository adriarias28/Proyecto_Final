import React from 'react'
import PartidosCom from '../Partidos/PartidosCom'
import MapeoPartidos from '../MapeoPartidos/MapeoPartidos'

function PartidosCRUD() {

  return (

    <div>

        <PartidosCom/>
        <MapeoPartidos esAdmin={true}/>

    </div>
  )
}

export default PartidosCRUD