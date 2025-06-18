import '../../Components/Fooder/Fooder.css';
import { Link, useNavigate} from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

function FooderCom() {
  return (

    <footer className="footer-container">
      <div className="footer-section">
        <h3>Contacto</h3>
        <ul className="catg">
          <li><FaPhone /> (506) 2661-6006</li>
          <li><FaEnvelope /> puntarenasfc@gmail.com</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Ubicación</h3>
        <ul className="catg">
          <li><FaMapMarkerAlt /> Provincia de Puntarenas</li>
          <li>Puntarenas, Costa Rica</li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Legal</h3>
        <ul className="catg">
          <li>Política de Privacidad</li>
          <li>Accesibilidad</li>
          <li>Política de Envío</li>
          <li className='tc'><Link to="/terminosYCondiciones">TÉrminos Y Condiciones</Link></li>
          <li>Política de Reembolso</li>
        </ul>
      </div>

      <div className="footer-section redes">
        <h3>Redes Sociales</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/PuntarenasFCOficial" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/puntarenasfcoficial/?hl=es" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.tiktok.com/@puntarenas_fc6?_t=ZM-8wnNY2Q4Uxs&_r=1" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        </div>

        
      </div>
         <p className='derechos'>© 2025 Puntarenas Fútbol Club, Todos los Derechos Reservados.</p>
    </footer>
  );
}

export default FooderCom;
