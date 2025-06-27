
import '../../Components/PaginaPrin/PaginaPrin.css'
import Fondo3 from '../../Images/Fondo3.png'

function PaginaPrin() {


  return (

    <div className="paginaPrin">
      <div className='imagen-container'>
        <img className='fond' src={Fondo3} alt="Fondo" />
        <h1 className='vaqva'>EL BARCO VA QUE VA</h1>
      </div>
    </div>
  )
}

export default PaginaPrin