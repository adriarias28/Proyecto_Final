import FooderCom from '../Components/Fooder/FooderCom'
import RegistroCom from '../Components/Registro/RegistroCom'
import NavbarCom from '../Components/Navbar/NavbarCom'

function Register() {
  return (

    <div>
      <NavbarCom/>
      <RegistroCom esAdmin={false}/>
      <FooderCom/>

    </div>
  )
}

export default Register
