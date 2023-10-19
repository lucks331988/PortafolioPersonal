import styles from './About.module.css';

function About() {
    return (
      <div className={styles.container}>
        <header>
          <h1 className={styles.title}>Acerca de Mí</h1>
        </header>
        <section className={styles.section}>
          <h2>Información Personal</h2>
          <p className={styles.paragraph}>¡Hola! Mi nombre es Lucas Antonio Villalba. Tengo 35 años y resido en la provincia de Formosa, Argentina.</p>
          <p>Soy un programador con experiencia en diversas tecnologías web, incluyendo HTML, CSS, JavaScript, ReactJS, Redux y Node.js. Siempre estoy dispuesto a aprender y aportar mis conocimientos y buenas prácticas a cualquier empresa con la que colabore.</p>
          <p>Mi objetivo es contribuir al crecimiento y éxito de tu empresa mediante la aplicación de mis habilidades técnicas y mi pasión por la programación. Estoy ansioso por formar parte de un equipo en el que podamos crecer juntos en formación y conocimiento.
          <br/>
          Si necesitas más información o tienes alguna pregunta, no dudes en preguntar. Estoy entusiasmado por la oportunidad de ser parte de tu empresa y contribuir a su éxito.</p>
        </section>
        <section className={styles.educacion}>
          <h2>Educación</h2>
          <p>Completé mis estudios terciarios en Técnico Desarrollador de Software en el Instituto de Formación Docente y Técnica "República Federal de Alemania." Durante mi educación, adquirí un profundo conocimiento de diversos lenguajes de programación, incluyendo JavaScript, Python, React, y otros.
          <br/>
          Además, complementé mi formación mediante la participación en cursos en el Ministerio de Producción, Industria y Empleo de Chaco, conocidos como Informatorio. Durante este programa, realicé varios cursos relacionados con el desarrollo web, ampliando así mis habilidades y conocimientos en este campo.
          <br/>
          También participé en otros programas de formación, como Argentina Programa, llegando a la tercera etapa. Estas experiencias adicionales me permitieron fortalecer mis habilidades y capacidades como programador.
          <br/>
          Además de mi formación en desarrollo de software, también he cursado cursos de reparación de computadoras y administración de redes, lo que me ha proporcionado una comprensión más amplia de las tecnologías de la información.
          <br/>
          Mi educación y formación continua me han preparado para aportar un valioso conjunto de habilidades técnicas y conocimientos a cualquier equipo o proyecto en el que participe. Estoy comprometido con el aprendizaje constante y la mejora continua de mis habilidades..</p>
        </section>
        <section className={styles.experience}>
          <h2>Experiencia Profesional</h2>
          <h3>Interzonawifi SRL (Técnico en Internet)</h3>
          <p>Durante mi tiempo en Interzonawifi SRL, trabajé en la empresa durante 4 años como Técnico en Internet. Durante esta etapa, adquirí una valiosa experiencia en la configuración de conexiones de redes y en la instalación de fibra óptica. También tuve un rol importante en la atención al cliente, lo que me permitió desarrollar fuertes habilidades de comunicación y tratar con clientes de manera efectiva.</p>
          <h3>Call Center Atento Chaco (Soporte Técnico al Cliente)</h3>
          <p>En mi rol en Call Center Atento Chaco, brindé soporte técnico a los clientes de la empresa telefónica durante un período de 3 años. Durante este tiempo, me especialicé en la atención al cliente y en la resolución de problemas relacionados con las conexiones de televisión, internet y telefonía. Mi enfoque estaba en proporcionar atención y contención al cliente, garantizando que sus problemas se resolvieran de manera eficiente.</p>
          <h3>Zuazquita Abogados (Técnico en Reparación de PC y Conexiones de Red)</h3>
          <p>En Zuazquita Abogados, mi función principal fue la de Técnico en Reparación de PC y Conexiones de Red. Durante un período de 4 años y medio, me encargué del mantenimiento y soporte de las computadoras en todo el edificio de la empresa. Estaba disponible para resolver problemas y proporcionar asistencia técnica cuando fuera necesario.</p>
          <p>Mi amplia experiencia laboral en estos roles me ha proporcionado una sólida base en el ámbito de la tecnología y las comunicaciones, así como habilidades valiosas en atención al cliente y resolución de problemas. Estoy comprometido a aplicar esta experiencia en futuras oportunidades laborales para contribuir al éxito de la empresa y continuar mi crecimiento profesional.</p>
        </section>
        <section className={styles.interests}>
          <h2>Intereses</h2>
          <p>Mi enfoque y mis intereses profesionales se centran en el mundo de la tecnología y la informática. Gracias a mi formación académica en Técnico Desarrollador de Software y mi experiencia en diversas empresas, he cultivado una profunda pasión por la programación y el desarrollo de soluciones tecnológicas.
          <br/>
          La programación, en particular, es más que una habilidad laboral; es un apasionante pasatiempo que me permite explorar y crear de manera constante. Disfruto diseñando aplicaciones web, explorando nuevos lenguajes de programación y desafiándome con proyectos innovadores. Mi educación y experiencia me han brindado una base sólida para abordar problemas técnicos y desarrollar soluciones efectivas.
          <br/>
          Mi interés en la atención al cliente y la comunicación efectiva, adquiridos durante mi tiempo en Interzonawifi SRL y Call Center Atento Chaco, sigue siendo relevante en mi vida profesional. Considero que la capacidad de comprender las necesidades de los demás y proporcionar soluciones eficientes es una habilidad valiosa en cualquier contexto.
          <br/>
          Cuando no estoy inmerso en el mundo tecnológico, también disfruto de la reparación de computadoras y la configuración de redes, lo que me brinda la oportunidad de mantenerme actualizado y continuar perfeccionando mis habilidades técnicas.
          <br/>
          En resumen, mis intereses profesionales y pasatiempos se fusionan de manera natural en mi dedicación a la programación y la tecnología. Estoy emocionado por seguir explorando nuevas oportunidades y proyectos que me permitan seguir aprendiendo, creciendo y aplicando mis conocimientos y habilidades de manera efectiva.</p>
        </section>
      </div>
    );
  }

export default About;