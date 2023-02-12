import React from 'react';
import { createPortal } from 'react-dom';
import { loader } from '../../assets';
import styles from './loader-popup.module.css';
import { useGetBooksQuery } from '../../redux';

const modal = document.getElementById('modal');

export const LoaderPopup = () => {
  const { isLoading } = useGetBooksQuery();
  if (isLoading) {
    return createPortal(
      <div className={styles.loader_popup}>
        <img src={loader} alt='loader' />
      </div>,
      modal
    );
  }
  return null;
};
