import React from 'react'

import PaginaPrin from '../Components/PaginaPrin/PaginaPrin'
import NavbarCom from '../Components/Navbar/NavbarCom'
import Video from '../Components/Vi/Video'

function PaginaPrincipal() {
  return (
    <div>
      <NavbarCom />
      <PaginaPrin />
      <Video/>
    </div>
  )
}

export default PaginaPrincipal