import React from 'react'
import '../../Components/Perfil/MiPerfil.css'
import { Link, useNavigate } from 'react-router-dom'
import UsuariosCrud from '../../Services/UsuariosCrud'
import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import tiburonpeque from '../../Images/tiburonpeque.ico'
import { FaUser, FaCalendarAlt, FaSignOutAlt, FaSave, FaTools, FaEdit} from 'react-icons/fa';
import Swal from 'sweetalert2';


    function MiperfilCom() {
        
    const[guardarPerfil, setguardarPerfil] = useState([])  
    const navigate = useNavigate()
    const [perfilNombre,setperfilNombre]=useState("")
    const [perfilApellido,setperfilApellido]=useState("")
    const [perfilCorreo,setperfilCorreo]=useState("")

    //para traer el rol y el id desde la cookie
    const id = Cookies.get('id')
    const rol = Cookies.get('role') 
    //const con funcion para limpiar las cookies del application
    const btnCerrarSe = () => {
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

    useEffect(() => {

        async function fetchDataUsers() {
            const data = await UsuariosCrud.getUsuariosid(id)
            console.log(data);
            
            setguardarPerfil(data)
            setperfilNombre(data.username || "");
            setperfilApellido(data.last_name || "");
            setperfilCorreo(data.email || "");
        };
        fetchDataUsers()
    }, []);


    function nombre(evento) {

        setperfilNombre(evento.target.value)
        
    }

    function apellido(evento) {

        setperfilApellido(evento.target.value)
        
    }

    function correo(evento) {

        setperfilCorreo(evento.target.value)
        
    }

    async function btnCambios() {
        try {
        await UsuariosCrud.updateUsuarios(perfilNombre, perfilApellido, perfilCorreo, id);
        alert("Perfil actualizado correctamente.");
    } catch (error) {

    }
    }

    function btnEdita() {

        setperfilNombre(guardarPerfil.username || "")
        setperfilApellido(guardarPerfil.last_name || "")
        setperfilCorreo(guardarPerfil.email || "")
    }

    function btnAdmin() {
    
    navigate('/admin')

    }


  return (
    
    <div className="perfil-container">
      <div className="perfil-card">
        <h2 className=''> MI PERFIL</h2><br />
        <div className="avatar">
            <img className='estadio' src={tiburonpeque} width={50} height={50} alt="..." />
        </div>
        <p>Bienvenid@</p><br />
        <h3>Usuario</h3>
        <p className="correo">{guardarPerfil.email}</p><br />
        <p><strong><FaCalendarAlt />  Miembro desde: </strong><br />
        {guardarPerfil.date_joined?.slice(0, 10)}</p><br /> {/* utilizamos slice para que me aparezcan los 10 primeros caracteres */}

          <div className="botones-perfil">
            <p className="but">
              <button className="btnEditar" onClick={btnEdita}><FaEdit /> Editar Perfil</button>
            </p>
            {/* Validacion para administradores*/}
            {rol === 'admins' && (
              <button className="btnAdmin" onClick={btnAdmin}><FaTools /> Panel Administrativo</button>
            )}            
              <button className="btnCerrar" onClick={btnCerrarSe}> <FaSignOutAlt /> Cerrar Sesión</button>
          </div>
      </div>
      <div className="perfil-containerDos">
        <div className="perfil-cardDos">
        <h2 className='tituloPerfil'><FaUser /> Información Personal</h2><br /><br />
        <label htmlFor="">Nombre</label>
        <input className='inputPerfil' value={perfilNombre} onChange={nombre} type="text" /><br /><br />
        <label htmlFor="">Apellido</label>
        <input className='inputPerfil' value={perfilApellido} onChange={apellido} type="text" /><br /><br />
        <label htmlFor="">Correo Electronico</label>
        <input className='inputPerfil' value={perfilCorreo} onChange={correo} type="text" name="" id="" /><br /><br />
        <button className="btnCambios" onClick={btnCambios}> <FaSave /> Guardar Cambios</button>
        </div>
      </div>
    </div>
  );
}

export default MiperfilCom
