import React from 'react';
import '../../Components/Mapa/Mapa.css'
function MapaCom() {
  return (
    <section className="mapa-container">
      <div className="mapa-frame-wrapper">
        <iframe
          title="Ubicación Estadio Lito Pérez"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.4893784568045!2d-84.839951!3d9.973882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fbd6ec8aa2e3%3A0x899ca159991a3f8e!2sEstadio%20Lito%20P%C3%A9rez!5e0!3m2!1ses!2scr!4v1717936916550!5m2!1ses!2scr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default MapaCom;
