import styles from './Portafolio.module.css';
import React from 'react';

function Portfolio() {
  return (
    <div className={styles.container}>
      <header>
        <h1>Mi Portafolio</h1>
      </header>
        <h2>Proyectos Destacados</h2>
      <section className={styles.proyectoList}>

        <div className={styles.proyecto}>
          <img
            src="https://www.korosenai.es/wp-content/uploads/2017/12/rick-morty-temporada1.jpg.webp"
            alt="Rick and Morty"
            className={styles.imgFluid}
          />
          <h3>Rick and Morty</h3>
          <p>
            Este proyecto es un catálogo interactivo de personajes de la popular
            serie de televisión "Rick and Morty." Está diseñado y desarrollado
            utilizando tecnologías de vanguardia como React, Redux, React Router
            DOM, Node.js y una base de datos PostgreSQL.
          </p>
          <a
            href="https://github.com/lucks331988/RickandMorty.git"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Ver más
          </a>
        </div>

        <div className={styles.proyecto}>
          <img
            src="https://play-lh.googleusercontent.com/VPqK75BwKMtTDFF6UQS6E3GYdYqzvZfddDxoKRH-DSlXIcYLN_EeSy5OXKx0bhBTtLUU=w240-h480-rw"
            alt="Lista Tareas"
            className={styles.imgFluid}
          />
          <h3>Lista Tareas</h3>
          <p>
            Esta aplicación te permite mantener un registro organizado de tus
            tareas diarias. Está construida con tecnologías modernas como React
            y Redux, lo que proporciona una experiencia de usuario fluida y una
            gestión efectiva del estado de la aplicación.
          </p>
          <a
            href="https://github.com/lucks331988/listaTareasReduxReact.git"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Ver más
          </a>
        </div>

        <div className={styles.proyecto}>
          <img
            src="https://cdn.pixabay.com/photo/2022/05/08/03/10/calculator-7181192_1280.png"
            alt="Calculadora con React"
            className={styles.imgFluid}
          />
          <h3>Calculadora con React</h3>
          <p>
            Esta aplicación de calculadora es una herramienta versátil y precisa
            que se ha desarrollado utilizando tecnologías de vanguardia como
            React y Redux. Permite a los usuarios realizar operaciones
            matemáticas con facilidad y precisión.
          </p>
          <a
            href="https://github.com/lucks331988/calculadoraReackRedux.git"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            Ver más
          </a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
