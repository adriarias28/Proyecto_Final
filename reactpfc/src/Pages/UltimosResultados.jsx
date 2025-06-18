import UltimosResulCom from '../Components/UltimosResultados/UltimosResulCom'
import FooderCom from '../Components/Fooder/FooderCom'
import NavbarCom from '../Components/Navbar/NavbarCom'
import MapeoUltimosResultados from '../Components/MapeoUltimosResultados/MapeoUltimosResultados'

function UltimosResultados() {
  return (

    <div>
      
      <UltimosResulCom/>
      {/* <MapeoUltimosResultados/>  */}
      {/* <MapeoUltimosResultados esAdmin={true}/> */}
      <FooderCom/>
      <NavbarCom/>

    </div>
  )
}

export default UltimosResultados
