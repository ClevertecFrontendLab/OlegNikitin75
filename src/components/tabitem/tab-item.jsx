import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './tab-item.module.css';
import { useMobileMenuStore } from '../../data/stores/use-mobile-menu-store';

export const TabItem = ({ name, quantity, link, id, active, handleClickItem, dataTestId }) => {
  const [closeMobileMenu] = useMobileMenuStore((state) => [state.closeMobileMenu]);

  return (
    <li data-test-id={dataTestId}>
      <NavLink
        className={active === id ? ` ${styles.tab_link} ${styles.active}` : `${styles.tab_link}`}
        to={link}
        onClick={() => {
          handleClickItem(id);
          closeMobileMenu();
        }}
      >
        {name}
      </NavLink>
      <span className={styles.tab_span}>{quantity}</span>
    </li>
  );
};
