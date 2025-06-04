import PartidosCom from '../Components/Partidos/PartidosCom'
import AdminCom from '../Components/Administrador/AdminCom'
import MapeoPartidos from '../Components/MapeoPartidos/MapeoPartidos'
import "../styles.css/PartidosPage.css"

function Partidos() {

  return (
    <div className='bodyPartidos'>
      <AdminCom/>
      <PartidosCom/>
      <MapeoPartidos esAdmin={true}/>
    </div>
  )
}

export default Partidos
