
import React from 'react';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={'/family.jpeg'} className={styles.logo} alt="Logo" />
      <h1 className={styles.title}>Rodrigo Rodrigues dos Santos Guilherme</h1>
    </header>
  );
};

export default Header;