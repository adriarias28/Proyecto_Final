import PartidosCom from '../Components/Partidos/PartidosCom'
import AdminCom from '../Components/Administrador/AdminCom'
import MapeoPartidos from '../Components/MapeoPartidos/MapeoPartidos'


function Partidos() {

  return (
    <div>

      <PartidosCom/>
      <MapeoPartidos esAdmin={true}/>
      
    </div>
  )
}

export default Partidos
