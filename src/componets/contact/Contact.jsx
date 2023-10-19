import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; // Importa el ícono para el teléfono

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0w4gjkr', 'template_zbyfkhi', form.current, 'sSzK9PWZ4RXVaHypA')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.title}>Contacto</h1>
      </header>
      <section className={styles.section}>
        <h2>Información de Contacto</h2>
        <p className={styles.paragraph}>
          Si deseas ponerte en contacto conmigo o tienes alguna pregunta, no dudes en hacerlo a través de los siguientes medios:
        </p>
        <ul className={styles.contactList}>
          <li>
            <strong>Correo Electrónico:</strong>{' '}
            <a href="mailto:villalbalucas25@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />{' '} villalbalucas25@gmail.com
            </a>
          </li>
          <li>
            <strong>Teléfono:</strong>{' '}
            <a href="tel:(+54) 370-4722496">
              <FontAwesomeIcon icon={faPhone} />{' '} (+54) 370-4722496
            </a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/lucas-antonio-villalba-185a891a4/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />{' '} Mi Perfil de LinkedIn
            </a>
          </li>
        </ul>
      </section>
      <br/>
      <br/>
      <br/>
      <form ref={form} onSubmit={sendEmail} className={styles.frmContact}>
         <h2 className={styles.formTitle}>Escribeme un mensaje y me pondré en contacto contigo:</h2>
        <label className={styles.labels}>Nombre</label>
        <input type="text" name="user_name" className={styles.input} />
        <label className={styles.labels}>Correo Electrónico</label>
        <input type="email" name="user_email" className={styles.input} />
        <label className={styles.labels}>Mensaje</label>
        <textarea name="message" className={styles.textarea} />
        <button type="submit" className={styles.boton}>Enviar Mensaje</button>
      </form>
    </div>
  );
}

export default Contact;
