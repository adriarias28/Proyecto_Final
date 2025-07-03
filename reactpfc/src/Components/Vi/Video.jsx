import { useState } from 'react'
import '../../Components/Vi/Video.css'
import VideoNuevo from '../../Components/Vi/VideoNuevo.mp4'

function Video() {
    
  return (

    <div className="video-container">
      <div className="video-overlay">
        <h1 className="videoTitu">
          <span className="subrayado">BIENVENIDO</span><br />
          <span className="tiburones">TIERRA DE TIBURONES</span>
        </h1>
      </div>
      <div>
        <video className="vid" autoPlay loop muted playsInline>
          <source src={VideoNuevo} />
        </video>
      </div>
    </div>
  )
}
export default Video