import { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import '../../Components/Vi/Video.css'
import Vid from '../../Components/Vi/Vid.mp4'
import tiburon from '../../Images/tiburon.png'

function Video() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    // LÓGICA DE NAVEGACIÓN POR CARD

    const btnBoleteria = () => {
        setLoading(true);
        setTimeout(() => navigate('/boleteria'), 3000);
    };	


  return (
    <div className="video-container">

        <div>
          {loading && (
            <div className="LoadingOverlay">
              <div className="LoadingContent">
                  <img src={tiburon} alt="Cargando" className="LoadingLogo" />
                  <div className="Spinner"></div>
              </div>
            </div>
          )}
        </div>

      <div className="video-overlay">
        <h1>BIENVENIDOS A TIERRA DE TIBURONES</h1>
          <button onClick={btnBoleteria}>Boletería</button>
      </div>
        <div>
            <video className="vid" autoPlay loop muted playsInline>

                <source src={Vid} />
            </video>
        </div>
    </div>
  )
}

export default Video