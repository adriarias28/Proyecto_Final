import React from 'react'
import '../../Components/Vi/Video.css'
import Vid from '../../Components/Vi/Vid.mp4'

function Video() {
  return (
    <div>
        <div>
            <video className='vid' autoPlay Loop name="media" muted>
                <source src={Vid} />
            </video>
        </div>
    </div>
  )
}

export default Video