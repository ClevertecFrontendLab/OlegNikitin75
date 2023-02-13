import { Link } from 'react-router-dom';
import styles from './header.module.css';
import { logo } from '../../assets';
import { Avatar } from '../avatar';
import { useMobileMenuStore } from '../../data/stores/use-mobile-menu-store';

export const Header = () => {
  const [mobileMenu, toggleMobileMenu] = useMobileMenuStore((state) => [state.mobileMenu, state.toggleMobileMenu]);
  const handleClick = () => {
    toggleMobileMenu();
  };

  return (
    <header>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.inner_left}>
            <Link className={styles.logo} to='/'>
              <img src={logo} alt='logo' />
            </Link>
            <button
              data-test-id='button-burger'
              id='burger-btn'
              className={styles.btn_burger}
              type='button'
              onClick={handleClick}
            >
              <span className={mobileMenu ? `${styles.btn_burger__span}` : `${''}`} />
              <span className={mobileMenu ? `${styles.btn_burger__span}` : `${''}`} />
              <span className={mobileMenu ? `${styles.btn_burger__span}` : `${''}`} />
            </button>
            <h1 className={styles.title}>Библиотека</h1>
          </div>
          <div className={styles.inner_right}>
            <span className={styles.message}>Привет, Иван!</span>
            <Avatar size='large' imgUrl={null} />
          </div>
        </div>
      </div>
    </header>
  );
};
