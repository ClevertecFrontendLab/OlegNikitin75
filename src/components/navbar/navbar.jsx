import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { arrow, arrowHover, arrowUp } from '../../assets';
import { TabItem } from '../tabitem/tab-item';
import styles from './navbar.module.css';
import { useMobileMenuStore } from '../../data/stores/use-mobile-menu-store';
import { useWidthScreen } from '../../utils/helpers';
import { useGetBooksQuery, useGetCategoriesQuery } from '../../redux';

export const Navbar = () => {
  const { data: categories = [] } = useGetCategoriesQuery();
  const { data: books = [], isLoading } = useGetBooksQuery();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(1);
  const [activeItem, setActiveItem] = useState(0);
  const [mobileMenu, closeMobileMenu] = useMobileMenuStore((state) => [state.mobileMenu, state.closeMobileMenu]);
  const { width } = useWidthScreen();
  const menuRef = useRef(null);
  const clickOutside = (e) => {
    if (!menuRef.current.contains(e.target) && e.target.id !== 'burger-btn') {
      closeMobileMenu();
    }
  };
  const style = mobileMenu ? (document.body.style.overflowY = 'hidden') : (document.body.style.overflowY = 'auto');

  useEffect(() => {
    document.addEventListener('click', clickOutside, true);
    return () => {
      document.removeEventListener('click', clickOutside, true);
    };
  });

  const handleClick = (id) => {
    if (id === 1) {
      setOpen(!open);
    } else setOpen(false);
    setActive(id);
  };
  const handleClickItem = (id) => {
    setActiveItem(id);
  };
  useEffect(() => {
    if (!isLoading) setOpen(true);
  }, [isLoading]);

  const counterBooks = (categoryName) => {
    let counter = 0;
    books.forEach((book) => {
      if (book.categories.includes(categoryName)) {
        counter += 1;
      }
    });
    return counter;
  };

  return (
    <nav
      data-test-id='burger-navigation'
      ref={menuRef}
      className={mobileMenu ? ` ${styles.nav_open}` : `${styles.nav}`}
      style={
        width <= 425 ? (open ? { height: '80vh' } : { height: '80vh' }) : open ? { height: '75vh' } : { height: '45vh' }
      }
    >
      <ul className={mobileMenu ? ` ${styles.list_desktop}` : `${''}`}>
        <li className={styles.list_item}>
          <NavLink
            data-test-id={width > 960 ? 'navigation-showcase' : 'burger-showcase'}
            className={active === 1 ? ` ${styles.link} ${styles.active}` : `${styles.link}`}
            to='/'
            onClick={() => {
              handleClick(1);
            }}
          >
            Витрина книг
            {open ? (
              <img src={arrowUp} alt='icon' />
            ) : active === 1 ? (
              <img src={arrowHover} alt='icon' />
            ) : (
              <img src={arrow} alt='icon' />
            )}
          </NavLink>

          <ul className={open ? styles.categories : styles.categories_novisible}>
            <TabItem
              dataTestId={width > 960 ? 'navigation-books' : 'burger-books'}
              name='Все книги'
              id={0}
              link='/'
              active={activeItem}
              handleClickItem={handleClickItem}
            />
            {categories.map((cat) => (
              <TabItem
                key={cat.id}
                name={cat.name}
                quantity={counterBooks(cat.name)}
                link={cat.path}
                id={cat.id}
                active={activeItem}
                handleClickItem={handleClickItem}
              />
            ))}
          </ul>
        </li>
        <li className={styles.list_item}>
          <NavLink
            data-test-id={width > 960 ? 'navigation-terms' : 'burger-terms'}
            className={active === 2 ? ` ${styles.link} ${styles.active}` : `${styles.link}`}
            to='/terms'
            onClick={() => {
              handleClick(2);
              closeMobileMenu();
            }}
          >
            Правила пользования
          </NavLink>
        </li>
        <li className={styles.list_item}>
          <NavLink
            data-test-id={width > 960 ? 'navigation-contract' : 'burger-contract'}
            className={active === 3 ? ` ${styles.link} ${styles.active}` : `${styles.link}`}
            to='/contract'
            onClick={() => {
              handleClick(3);
              closeMobileMenu();
            }}
          >
            Договор оферты
          </NavLink>
        </li>
      </ul>
      {mobileMenu && (
        <ul className={styles.list_mobile}>
          <li className={styles.list_item}>
            <NavLink
              className={active === 4 ? ` ${styles.link} ${styles.active}` : `${styles.link}`}
              to='/profile'
              onClick={() => handleClick(4)}
            >
              Профиль
            </NavLink>
          </li>
          <li className={styles.list_item}>
            <NavLink
              className={active === 5 ? ` ${styles.link} ${styles.active}` : `${styles.link}`}
              to='/profile'
              onClick={() => handleClick(5)}
            >
              Выход
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};
