import styles from './Portafolio.module.css';

import React from 'react';

function Portfolio() {
  const proyectos = [
    {
      id: 1,
      titulo: 'Proyecto 1',
      descripcion: 'Una descripción breve del proyecto 1.',
      imagen: 'imagen1.jpg',
      enlace: 'https://ejemplo.com/proyecto1',
    },
    {
      id: 2,
      titulo: 'Proyecto 2',
      descripcion: 'Una descripción breve del proyecto 2.',
      imagen: 'imagen2.jpg',
      enlace: 'https://ejemplo.com/proyecto2',
    },
    {
      id: 3,
      titulo: 'Proyecto 3',
      descripcion: 'Una descripción breve del proyecto 3.',
      imagen: 'imagen3.jpg',
      enlace: 'https://ejemplo.com/proyecto3',
    },
  ];

  return (
    <div className={styles.container}>
      <header>
        <h1>Mi Portafolio</h1>
      </header>
      <section className="proyectos">
        <h2>Proyectos Destacados</h2>
        <div className="proyecto-list">
          {proyectos.map((proyecto) => (
            <div className="proyecto" key={proyecto.id}>
              <img src={proyecto.imagen} alt={proyecto.titulo} />
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <a href={proyecto.enlace} target="_blank" rel="noopener noreferrer">
                Ver más
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
