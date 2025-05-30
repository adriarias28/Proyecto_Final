import React from 'react'

import PaginaPrin from '../Components/PaginaPrin/PaginaPrin'
import NavbarCom from '../Components/Navbar/NavbarCom'
import Video from '../Components/Vi/Video'
import FooderCom from '../Components/Fooder/FooderCom'
import UltimosResulCom from '../Components/UltimosResultados/UltimosResulCom'
import BoleteriaCom from '../Components/Boleteria/BoleteriaCom'

function PaginaPrincipal() {
  return (
    <div>
      <NavbarCom />
      <Video/>
      <FooderCom/>

      <UltimosResulCom/>
      <PaginaPrin/>
      <BoleteriaCom/>

    </div>
  )
}

export default PaginaPrincipal