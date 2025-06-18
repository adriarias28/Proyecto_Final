import React from 'react'
import LocalidadCom from '../Localidad/LocalidadCom'
import MapeoLocalidad from '../MapeoLocalidad/MapeoLocalidad'

function LocalidadesCRUD() {
  return (

    <div>

        <LocalidadCom/>
        <MapeoLocalidad esAdmin={true}/>

    </div>
  )
}

export default LocalidadesCRUD