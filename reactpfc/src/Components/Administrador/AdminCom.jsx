import { useState } from 'react';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import '../../Components/Administrador/Admin.css';

function AdminCom() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = () => {
    navigate('/');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Botón hamburguesa */}
      <button className="menu-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <h2 className='tituloadmi'>¡Bienvenido administrador!</h2>
        <nav>
          <Link to="/Admin">Pagina Administrador</Link>
          <Link to="jugadorescrud">Crud Jugadores</Link>
          <Link to="partidos">Crud Partidos</Link>
          <Link to="eventos">Crud Eventos</Link>
          <Link to="localidades">Crud Localidades</Link>
          <Link to="usuarios">Crud Usuarios</Link>
        </nav>
        <button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button>
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
