import React from 'react'

import PaginaPrin from '../Components/PaginaPrin/PaginaPrin'
import NavbarCom from '../Components/Navbar/NavbarCom'
import Video from '../Components/Vi/Video'
import FooderCom from '../Components/Fooder/FooderCom'
import UltimosResulCom from '../Components/UltimosResultados/UltimosResulCom'
import MapeoEventos from '../Components/MapeoEventos/MapeoEventos'
import MapeoPartidos from '../Components/MapeoPartidos/MapeoPartidos'


function PaginaPrincipal() {
  return (
    <div>
      <NavbarCom/>
      <Video/>
      <UltimosResulCom/>
      <PaginaPrin/>
      <MapeoEventos/>
      <MapeoPartidos/>
      <FooderCom/>
    </div>
  )
}

export default PaginaPrincipal