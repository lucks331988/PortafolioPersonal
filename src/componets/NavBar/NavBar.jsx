import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBriefcase, faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.css';

function NavBar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.nav}>
      <button className={`${styles.navButton} ${styles.hamburgerIcon}`} aria-label="Toggle navigation" onClick={handleMenuToggle}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`${styles.navItems} ${isMenuOpen ? styles.navItemsOpen : ''}`}>
        <Link to="/" className={styles.navLink}>
          <FontAwesomeIcon icon={faHome} /> Inicio
        </Link>
        <Link to="/about" className={styles.navLink}>
          <FontAwesomeIcon icon={faInfoCircle} /> Acerca de
        </Link>
        <Link to="/portafolio" className={styles.navLink}>
          <FontAwesomeIcon icon={faBriefcase} /> Portafolio
        </Link>
        <Link to="/contact" className={styles.navLink}>
          <FontAwesomeIcon icon={faEnvelope} /> Contacto
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
