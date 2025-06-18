import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import  '../../Components/Contactos/Contactos.css'
import MapaCom from '../Mapa/MapaCom'
import Swal from 'sweetalert2'

export const ContactosCom = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim(); //trim elimina espacios vacios 
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();
      

    if (!name || !email || !message) { //name, email, message seran verdaderos si es un campo vacio
        Swal.fire({
          title: 'Campos incompletos',
          text: 'Por favor, completa todos los campos antes de enviar.',
          icon: 'warning',
          confirmButtonColor: '#f76c1b',
        });
      return;
    }

    emailjs 
        .sendForm('service_ndh9kvp', 'template_gv1nhpg', form.current, {
            publicKey: 'C0LlEclXrsQLCKm2r',
        })
     .then(
        () => {
          Swal.fire({ //sweet alert para mensaje enviado
            title: '¡Mensaje enviado!',
            text: 'Tu consulta ha sido enviada correctamente.',
            icon: 'success',
            confirmButtonColor: '#f76c1b',
          });
          form.current.reset(); // Limpia el formulario 
        }
      );
  };


    return (
    <div>
      <div className="divConsulta">            
          <form id='formContact' ref={form} onSubmit={sendEmail}>
            <h2 className='consultaTitulo'>¿Tienes alguna consulta?</h2>  
            <p className='consultaParrafo'>¡Estamos listos para atenderte!</p>

              <div className='consultaInputs'><br /><br />
                  <label id='labelContact'>Nombre y Apellido</label>
                  <input className='inputCon' type="text" name="user_name" placeholder='Ingrese su nombre completo'/><br />
                  <label id='labelContact'>Correo Electronico</label>
                  <input className='inputCon' type="email" name="user_email" placeholder='Ingrese su correo electrónico'/><br />
                  <label id='labelContact'>Mensaje</label>
                  <textarea className='inputmensaje' name="message"  placeholder='Escribe tu mensaje aquí...'/><br /><br />
                    <button className='btnConsul' type="submit">
                      <span>Enviar</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="15" height="10" style={{ marginLeft: '10px' }}>
                        <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
                      </svg>
                    </button>
              </div>
          </form>
      </div>
          <MapaCom/>
    </div>
  )
}
export default ContactosCom

