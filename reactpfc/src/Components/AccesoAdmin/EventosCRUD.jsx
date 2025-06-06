import React from 'react'
import MapeoEventos from '../MapeoEventos/MapeoEventos'
import AdminEventosCom from '../AdministrativoEventos/AdminEventosCom'

function EventosCRUD() {
  return (

    <div>
        
        <AdminEventosCom/>
        <MapeoEventos esAdmin={true}/>


    </div>
  )
}

export default EventosCRUD