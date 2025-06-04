import React from 'react'

import PaginaPrin from '../Components/PaginaPrin/PaginaPrin'
import NavbarCom from '../Components/Navbar/NavbarCom'
import Video from '../Components/Vi/Video'
import FooderCom from '../Components/Fooder/FooderCom'
import UltimosResulCom from '../Components/UltimosResultados/UltimosResulCom'
import BoleteriaCom from '../Components/Boleteria/BoleteriaCom'
import MapeoEventos from '../Components/MapeoEventos/MapeoEventos'

function PaginaPrincipal() {
  return (
    <div>
      <NavbarCom />
      <Video/>
      <UltimosResulCom/>
      <PaginaPrin/>
      <BoleteriaCom/>
      <MapeoEventos/>
      <FooderCom/>

    </div>
  )
}

export default PaginaPrincipal