import { useState } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import '../../Components/Administrador/Admin.css';
import { FaHome, FaSignOutAlt } from 'react-icons/fa';
import Cookies from 'js-cookie'
import Swal from 'sweetalert2';

function AdminCom() {

  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
      //limpias las cookies del application 
      Cookies.remove('access_token');
      Cookies.remove('refresh_token');
      Cookies.remove('role');
      Cookies.remove('id');

      Swal.fire({
        title: 'Sesión cerrada',
        text: 'Gracias por tu visita. ¡Hasta pronto!',
        icon: 'success',
        confirmButtonColor: '#fd800c',
        confirmButtonText: 'Aceptar'
      }).then(() => {
      navigate('/');
      });
    };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  function backBtn() {

    navigate('/mi-perfil')
    
  }

  return (
    <div className="dashboard-container">
      {/* Botón hamburguesa */}
      <button className="menu-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <h2 className='tituloadmi'><FaHome /> Panel administrativo</h2>
        <nav>
          <Link to="/Admin">Pagina Administrador</Link>
          <Link to="jugadorescrud">Crud Jugadores</Link>
          <Link to="partidos">Crud Partidos</Link>
          <Link to="eventos">Crud Eventos</Link>
          <Link to="localidades">Crud Localidades</Link>
          <Link to="usuarios">Crud Usuarios</Link>
          <Link to="ultimosResultados">Crud Ultimos Resultados</Link>
        </nav>
        <button className="logout-btn" onClick={handleLogout}> <FaSignOutAlt /> Cerrar sesión</button>
        <button onClick={backBtn} className='back-btn'>← Volver</button>
        {/* <button className="back-btn" onClick={() => navigate(-1)}>← Volver</button> */}
      </div>
      <div className={`content ${sidebarOpen ? 'with-sidebar' : 'full-width'}`}>
        <div className="welcome-message">
          <p>Este es tu centro de control. Organiza, actualiza, elimina y gestiona con facilidad usando el menú de la izquierda.</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
export default AdminCom;
