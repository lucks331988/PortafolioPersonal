import styles from './About.module.css';

function About() {
    return (
      <div className={styles.container}>
        <header>
          <h1 className={styles.title}>Acerca de Mí</h1>
        </header>
        <section className={styles.section}>
          <h2>Información Personal</h2>
          <p className={styles.paragraph}>¡Hola! Mi nombre es Lucas Antonio Villalba. Tengo 35 años y soy un apasionado de la agricultura y el cuidado de los animales de campo.</p>
        </section>
        <section className={styles.educacion}>
          <h2>Educación</h2>
          <p>Completé mis estudios terciarios en [Nombre de la Carrera o Especialización] en [Nombre de la Institución]. Durante mi educación, adquirí un profundo conocimiento de [Mencionar áreas relevantes de estudio].</p>
        </section>
        <section className={styles.experience}>
          <h2>Experiencia Profesional</h2>
          <p>He trabajado en [Nombre de la Empresa o Granja] durante [Número de Años] años, donde me desempeñé como [Tu posición o rol]. Durante mi tiempo allí, adquirí experiencia en [Mencionar tus responsabilidades y logros relevantes].</p>
        </section>
        <section className={styles.interests}>
          <h2>Intereses</h2>
          <p>Además de mi trabajo en el campo, también tengo un profundo interés en [Mencionar tus intereses relacionados]. En mi tiempo libre, disfruto [Describir tus actividades o pasatiempos relacionados con la agricultura o el bienestar animal].</p>
        </section>
      </div>
    );
  }

export default About;