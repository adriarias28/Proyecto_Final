import FooderCom from '../Components/Fooder/FooderCom'
import AdminCom from '../Components/Administrador/AdminCom'
import RegistroCom from '../Components/Registro/RegistroCom'
import "../styles.css/PartidosPage.css"

function Register() {
  return (

    <div className='bodyPartidos'>
      <AdminCom/>
      <RegistroCom/>
      <FooderCom/>

    </div>
  )
}

export default Register
