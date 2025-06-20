import { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import UsuariosCrud from '../../Services/UsuariosCrud'
import "../../Components/Registro/Registro.css"
import pfc from '../../Images/pfc.jpg'
import UserGroupCrud from '../../Services/UserGroupCrud'


function RegistroCom() {

    const [nombrePersona,setnombrePersona]=useState("")
    const [apellidoPersona,setapellidoPersona]=useState("")
    const [correoPersona,setcorreoPersona]=useState("")
    const [passwordPersona,setpasswordPersona]=useState("")
    const [telefonoPersona,settelefonoPersona]=useState("")

    

    function nombre(evento) {
    
      setnombrePersona(evento.target.value)

    }

    function apellido(evento) {

      setapellidoPersona(evento.target.value)
      
    }

    function correo(evento) {

      setcorreoPersona(evento.target.value)     
      
    }

    function password(evento) {
      
      setpasswordPersona(evento.target.value)

    }

    function telefono(evento) {
      
      settelefonoPersona(evento.target.value)

    }

    function seteo() {
      
      setnombrePersona('')
      setapellidoPersona('')
      setcorreoPersona('')
      setpasswordPersona('')
      settelefonoPersona('')

    }

    async function btnRegistrar() {



      seteo()

     if (nombrePersona === "" || apellidoPersona === "" || correoPersona === "" || passwordPersona === "" || telefonoPersona === "") {
        Swal.fire({
          icon: "error",
          title: "Llenar campos vacios",
          text: "Por favor llene todos los datos solicitados", 
          customClass: {
            popup: "contenedorAlert",
            title: 'title'  
          }, 
        });
      }else{ 
      
      const respuesta = await UsuariosCrud.postUsuarios(nombrePersona, apellidoPersona, correoPersona, passwordPersona);
      console.log(respuesta);
      const respuestaDos = await UserGroupCrud.postUserGroup(respuesta.id)
      console.log(respuestaDos);
      
      
      Swal.fire({
          title: "Registrado correctamente",
          icon: "success",
          draggable: true,
          customClass: {
          popup: "contenedor",  
          },
        });
      }
      
    }


  return (
    <div>
        <div className='contenedorPrincipal'>
          <div className='contenedorDos'>
            <div className='conteIma'>
              <img className='pfc' src={pfc} width={600} alt="..." /> 
            </div>
              <h3 className='titunueva'>NUEVA CUENTA</h3>
              <p className='parra'>¡GRACIAS POR REGISTRARSE EN PUNTARENAS FÚLTBOL CLUB!</p>
              <label htmlFor="">Username</label><br />
              <input className='inpuesti' value={nombrePersona} onChange={nombre} placeholder='Ingrese un nombre de usuario' type="text" /><br /><br />
              <label htmlFor="">Nombre y Apellido</label><br />
              <input className='inpuesti' value={apellidoPersona} onChange={apellido} placeholder='Ingrese tu nombre' type="text" /><br /><br />
              <label htmlFor="">Correo Electrónico</label><br />
              <input className='inpuesti' value={correoPersona} onChange={correo} placeholder='Ingrese su correo electrónico' type="e-mail" /><br /><br />
              <label htmlFor="">Contraseña</label><br />
              <input className='inpuesti' value={passwordPersona} onChange={password} placeholder='Ingrese una contraseña' type="password" /><br /><br />
              <label htmlFor="">Telefono</label><br />
              <input className='inpuesti' value={telefonoPersona} onChange={telefono} placeholder='Ingrese un numero telefonico' type="number" /><br /><br />
              <button className='btnRegis' onClick={btnRegistrar}>CREAR CUENTA</button>
              <p>¿Ya tienes una cuenta? <Link to= "/login" className='linkclass'>¡Inicia sesión aquí!</Link></p>
          </div>
        </div>
    </div>
  )
}

export default RegistroCom
