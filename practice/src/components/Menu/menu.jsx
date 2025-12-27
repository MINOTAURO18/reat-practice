
import styles from './menu.module.css'
const Menu = () => {
  return (
    <>
      <header className={styles.header}>
        <span className={styles.logo}>LOGO</span>
        <nav className={styles.nav}>
          <a href="">
            <span>I</span>nicio
          </a>
          <a href="">
            <span>S</span>obreMi
          </a>
          <a href="">
            <span>P</span>royecto
          </a>
          <a href="">
            <span>C</span>ontacto
          </a>
        </nav>
      </header>
    </>
  );
};

export default Menu;
