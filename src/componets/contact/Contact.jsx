import styles from './Contact.module.css';
function Contact() {
    return (
      <div className={styles.container}>
        <header>
          <h1 className={styles.title}>Contacto</h1>
        </header>
        <section className={styles.section}>
          <h2>Información de Contacto</h2>
          <p className={styles.paragraph}>Si deseas ponerse en contacto conmigo o tienes alguna pregunta, no dudes en hacerlo a través de los siguientes medios:</p>
          <ul className={styles.contactList}>
            <li>
              <strong>Correo Electrónico:</strong> <a href="mailto:lucas.villalba@email.com">lucas.villalba@email.com</a>
            </li>
            <li>
              <strong>Teléfono:</strong> (123) 456-7890
            </li>
            <li>
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/lucas-villalba" target="_blank" rel="noopener noreferrer">Mi Perfil de LinkedIn</a>
            </li>
          </ul>
        </section>
        <section  className={styles.section}>
          <h2>Formulario de Contacto</h2>
          <p className={styles.paragraph}>También puedes enviarme un mensaje directamente a través de este formulario:</p>
          <form className={styles.form}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="correo">Correo Electrónico:</label>
              <input type="email" id="correo" name="correo" required />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
            </div>
            <button type="submit">Enviar Mensaje</button>
          </form>
        </section>
      </div>
    );
  }

export default Contact;