import FooderCom from '../Components/Fooder/FooderCom'
import JugadoresCom from '../Components/Jugadores/JugadoresCom'
import MapeoJuga from '../Components/MapeoJugadores/MapeoJuga'
import NavbarCom from '../Components/Navbar/NavbarCom'

function Jugadores() {
  return (
    <div>

      <NavbarCom/>
      <JugadoresCom/>
      <MapeoJuga/>
      <FooderCom/>
      
    </div>
  )
}

export default Jugadores
