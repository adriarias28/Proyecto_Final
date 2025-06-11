import NavbarCom from '../Components/Navbar/NavbarCom'
import ProximosEventosCom from '../Components/ProximosEventos/ProximosEventosCom'
import FooderCom from '../Components/Fooder/FooderCom'
import MapeoEventos from '../Components/MapeoEventos/MapeoEventos'
import MapeoPartidos from '../Components/MapeoPartidos/MapeoPartidos'

function ProximosEventos() {

  return (
    <div>

      <NavbarCom/>
      <ProximosEventosCom/>
      <MapeoEventos/>
      <MapeoPartidos/>
      <FooderCom/>

    </div>
  )
}

export default ProximosEventos
