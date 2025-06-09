import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import '../../Components/Vi/Video.css'
import Vid from '../../Components/Vi/Vid.mp4'

function Video() {


    const navigate = useNavigate()
      function btnBoleteria() {
      
      navigate('/boleteria')

    }
  return (
    <div className="video-container">
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