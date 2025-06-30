import { Link, useNavigate} from 'react-router-dom'
import '../../Components/Navbar/Navbar.css';
import logo from '../../Images/logo.png'
import NavSocialCom from './NavSocialCom';



function NavbarCom() {

  const navigate = useNavigate() 

  function btnIngreso() {

      navigate('/login')
    
  }

  function btnRegistro() {
    
    navigate('/register')

  }

 return (
    <div className="navbar-fixed-container">
      <NavSocialCom />
      <nav className="navbar">
        <Link to="/"><img className="logo" src={logo} alt="Logo Puntarenas FC" /></Link>
        <ul className="nav-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/jugadores">Jugadores</Link></li>
          <li><Link to="/proximoseventos">Eventos</Link></li>
          <li><Link to="/membresia">Socios</Link></li>
          <li><Link to="/boleteria">Boleteria</Link></li>
          <li><Link to="/acercade">Historia</Link></li>
          <li><Link to="/contactos">Contactanos</Link></li>
        </ul>
        <div className="nav-buttons">
          <button onClick={btnIngreso}>Ingreso</button>
          <button onClick={btnRegistro}>Registro</button>
        </div>
      </nav>
    </div>
  );
}

export default NavbarCom
