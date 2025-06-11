import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import UsuariosCrud from '../../Services/UsuariosCrud'
import "../../Components/Login/Login.css"
import pfc from '../../Images/pfc.jpg'
import Cookies from 'js-cookie'

function Test() {

    const[correoPersona,setcorreoPersona]=useState("")
    const[passwordPersona,setpasswordPersona]=useState("")
    /* const [usuarios,setUsuarios]=useState() */

    const navigate = useNavigate()

    function correo(evento) {

      setcorreoPersona(evento.target.value)

    }

    function password(evento) {
      
      setpasswordPersona(evento.target.value)

    }

   async  function btnIniciar() {
         try {
          const tokenData = await UsuariosCrud.postApiToken(correoPersona, passwordPersona);
    console.log(tokenData);
    
    if (tokenData && tokenData.access && tokenData.refresh) {
      // Guardar cada token en una cookie individual
      Cookies.set("access_token", tokenData.access, {
        expires: 1,/*Expira en un día*/ 
        secure: true, 
        sameSite: "Strict",
        path: "/", /*las cookies se puedan usar en todas las páginas*/ 
      });
      Cookies.set("refresh_token", tokenData.refresh, {
        expires: 7, // Por lo general el refresh token dura más
        secure: true,
        sameSite: "Strict",
        path: "/",
      }); 
      
            navigate("/boleteria");
        } else {
          Swal.fire({
            icon: "error",
            title: "datos incorrectos",
            text: "llene los datos de nuevo",
              });
        }
        } catch (error) {
        }
            }

  return (

    <div>

        <div className='contenedorPrincipalDos'>
          <div className='contenedorDosT'>
            <img className='pfc' src={pfc} width={600} alt="..." /> 
            <h1 className='tituloLogin'>USUARIO REGISTRADO</h1>
            <p className='parraa'>INICIA SESIÓN CON UNA CUENTA EXISTENTE</p>
            <h3>Iniciar sesión</h3>
            <label htmlFor="">Username</label><br />
            <input className='inpuestii' value={correoPersona} onChange={correo} placeholder='Nombre Usuario'  type="text" /><br /><br />
            <label htmlFor="">Contraseña</label><br />
            <input className='inpuestii' value={passwordPersona} onChange={password} placeholder='Contraseña' type="password" /><br /><br />
            <button className='btnLogin' onClick={btnIniciar}>INGRESAR</button>
          </div>

          
        </div>

    </div>
  )
}

export default Test