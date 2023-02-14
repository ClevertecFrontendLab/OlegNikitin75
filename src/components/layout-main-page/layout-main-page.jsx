import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../navbar/navbar';
import styles from './layout-main.page.module.css';
import { useGetBooksQuery, useGetCategoriesQuery } from '../../redux';
import { LoaderPopup } from '../loader-popup/loader-popup';
import { ErrorMessage } from '../error-message';

export const LayoutMainPage = () => {
  const { isLoading: loadingBooks, isError } = useGetBooksQuery();
  const { isLoading: loadingCategories } = useGetCategoriesQuery();

  if (loadingBooks && loadingCategories) {
    return <LoaderPopup isLoading={loadingBooks} />;
  }

  return (
    <div className={styles.container}>
      {isError && <ErrorMessage />}
      <div className={styles.inner}>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};
