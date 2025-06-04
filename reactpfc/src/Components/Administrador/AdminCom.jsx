import { Link, useNavigate} from 'react-router-dom'
import '../../Components/Administrador/Admin.css'

function AdminCom() {
  return (

    <div className="dashboard-container">
      <div className="sidebar">
        <h2>ADMINISTRACIÓN CRUD</h2>
        <Link to="/biografiaJugador">Crud Jugadores</Link>
        <Link to="/partidos">Crud Partidos</Link>
        <Link to="/register">Crud Register</Link>
      </div>
    </div>
  );
}

export default AdminCom