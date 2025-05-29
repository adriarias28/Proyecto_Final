import React from 'react'

import PaginaPrin from '../Components/PaginaPrin/PaginaPrin'
import NavbarCom from '../Components/Navbar/NavbarCom'
import Video from '../Components/Vi/Video'
import FooderCom from '../Components/Fooder/FooderCom'

function PaginaPrincipal() {
  return (
    <div>
      <NavbarCom />
      <PaginaPrin />
      <Video/>
      <FooderCom/>
    </div>
  )
}

export default PaginaPrincipal