

import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import UsuariosCrud from '../../Services/UsuariosCrud'
import "../../Components/Login/Login.css"
import pfc from '../../Images/pfc.jpg'

function LoginCom() {

    const[correoPersona,setcorreoPersona]=useState("")
    const[passwordPersona,setpasswordPersona]=useState("")
    const [usuarios,setUsuarios]=useState()

    const navigate = useNavigate()

      
  useEffect(() => {

      async function fetchDataUsers() {
          
          const datos = await UsuariosCrud.getUsuarios() 

          setUsuarios(datos)

      };	
      fetchDataUsers()
  })

  
    function correo(evento) {

      setcorreoPersona(evento.target.value)

    }

    function password(evento) {
      
      setpasswordPersona(evento.target.value)

    }

    function btnIniciar() {

      seteoLogin()

      const encontrarUsuario = usuarios.filter(usuarios => usuarios.correo === correoPersona && usuarios.password===passwordPersona)
     
      if (encontrarUsuario.length === 0 || correoPersona === "" || passwordPersona === "" ) {
    
          Swal.fire({
            icon: "error",
            title: "Correo o contraseña incorrecta",
            text: "Intenta nuevamente",
            customClass: {
              popup: "contenedor",
              title: 'title'  
            }, 
          });
      }else{ 

          navigate('/acercade')
          Swal.fire("Bienvenido!");
          }

    }

    function btnNuevaCuenta() {
      
      navigate('/register')

    }

    function seteoLogin() {
      
      setcorreoPersona('')
      setpasswordPersona('')

    }

  return (

    <div>

        <div className='contenedorPrincipalDos'>
          <div className='contenedorDosT'>
            <img className='pfc' src={pfc} width={600} alt="..." /> 
            <h1 className='tituloLogin'>USUARIO REGISTRADO</h1>
            <p className='parraa'>INICIA SESIÓN CON UNA CUENTA EXISTENTE.</p>
            <h3>Iniciar sesión</h3>
            <label htmlFor="">Correo Electrónico</label><br />
            <input className='inpuestii' value={correoPersona} onChange={correo} placeholder='Correo electrónico'  type="text" /><br /><br />
            <label htmlFor="">Contraseña</label><br />
            <input className='inpuestii' value={passwordPersona} onChange={password} placeholder='Contraseña' type="password" /><br /><br />
            <button className='btnLogin' onClick={btnIniciar}>INGRESAR</button>
          </div>

          <div className='contenedorTres'>
            <h3 className='tituloLogin'>USUARIO NUEVO</h3>
            <p className='parraa'>Crea una nueva cuenta para acelerar tu próxima compra.</p>
            <button className='btnNuevo' onClick={btnNuevaCuenta}>NUEVA CUENTA</button>
          </div>
        </div>

    </div>
  )
}

export default LoginCom