import React from 'react'
import '../../Components/Vi/Video.css'
import Vid from '../../Components/Vi/Vid.mp4'

function Video() {
  return (
    <div className="video-container">
      <div className="video-overlay">
        <h1>TIERRA DE TIBURONES</h1>
          <button>Explorar</button>
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