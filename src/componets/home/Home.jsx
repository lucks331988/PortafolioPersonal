import styles from './Home.module.css';

function Home() {
    return (
        <div className={styles.container}>
          <header className={styles.cuerpo}>
            <h1>Bienvenido a mi Portafolio</h1>
            <p>Lucas Antonio Villalba</p>
          </header>
          <section className={styles.bienvenido}>
            <h2>Bienvenido</h2>
            <p>¡Hola! Soy Lucas Antonio Villalba, y este es mi portafolio personal. Aquí puedes conocer un poco más sobre mí y explorar mis proyectos.</p>
          </section>
        </div>
      );
  }

export default Home;