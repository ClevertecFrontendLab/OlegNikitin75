import React from 'react';
import { createPortal } from 'react-dom';
import { loader } from '../../assets';
import styles from './loader-popup.module.css';

const modal = document.getElementById('modal');

export const LoaderPopup = ({ isLoading }) => {
  if (isLoading) {
    return createPortal(
      <div className={styles.loader_popup} data-test-id='loader'>
        <img src={loader} alt='loader' />
      </div>,
      modal
    );
  }
  return null;
};
