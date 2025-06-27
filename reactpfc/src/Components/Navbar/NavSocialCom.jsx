import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../../Components/Navbar/NavSocial.css';

import { FaEnvelope } from 'react-icons/fa';

function NavSocialCom() {
  return (
    
    <div className="social-bar">
      <div>   
      <p className='parrafoSocial'><FaEnvelope className="iconCorreo"/> puntarenasfc@gmail.com</p>
      </div>

      <SocialIcon url="https://www.facebook.com/PuntarenasFCOficial" />
      <SocialIcon url="https://www.instagram.com/puntarenasfcoficial/?hl=es" />
      <SocialIcon url="https://www.tiktok.com/@puntarenas_fc6?_t=ZM-8wnNY2Q4Uxs&_r=1" network="tiktok" />
    </div>
  );
}

export default NavSocialCom;
