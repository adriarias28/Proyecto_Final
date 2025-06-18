import React from 'react'
import UltimosResulCom from '../UltimosResultados/UltimosResulCom'
import MapeoUltimosResultados from '../MapeoUltimosResultados/MapeoUltimosResultados'

function UltimosResCrud() {
  return (
    <div>
        <UltimosResulCom/>
        <MapeoUltimosResultados esAdmin={true}/>
    </div>
  )
}

export default UltimosResCrud