import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.css';

function NavBar() {
    return (
      <div className={styles.container}>
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link to="/" className={styles.navLink}>
                <FontAwesomeIcon icon={faHome} /> Inicio
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/about" className={styles.navLink}>
                <FontAwesomeIcon icon={faInfoCircle} /> Acerca de
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/portafolio" className={styles.navLink}>
                <FontAwesomeIcon icon={faBriefcase} /> Portafolio
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link to="/contact" className={styles.navLink}>
                <FontAwesomeIcon icon={faEnvelope} /> Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  

export default NavBar;
