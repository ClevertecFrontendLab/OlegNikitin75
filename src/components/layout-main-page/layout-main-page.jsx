import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../navbar/navbar';
import styles from './layout-main.page.module.css';

export const LayoutMainPage = () => (
  <div className={styles.container}>
    <div className={styles.inner}>
      <Navbar />
      <Outlet />
    </div>
  </div>
);
