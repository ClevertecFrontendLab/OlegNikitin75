import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../navbar/navbar';
import styles from './layout-main.page.module.css';
import { useGetBooksQuery, useGetCategoriesQuery } from '../../redux';
import { LoaderPopup } from '../loader-popup/loader-popup';
import { ErrorMessage } from '../error-message';

export const LayoutMainPage = () => {
  const { isLoading: loadingBooks, isError: errorBooks } = useGetBooksQuery();
  const { isLoading: loadingCategories, isError: errorCategories } = useGetCategoriesQuery();

  return (
    <div>
      {loadingBooks && loadingCategories && <LoaderPopup isLoading={loadingBooks} />}
      <div className={styles.container}>
        <div className={styles.inner}>
          <Navbar />
          {(errorCategories || errorBooks) && <ErrorMessage />}
          {!errorBooks && !errorCategories && <Outlet />}
        </div>
      </div>
    </div>
  );
};
