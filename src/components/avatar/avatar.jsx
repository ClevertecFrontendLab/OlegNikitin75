import React from 'react';
import styles from './avatar.module.css';

export const Avatar = ({ size, imgUrl }) => (
  <div className={`${styles.img} ${styles[size]}`}>
    <img src={imgUrl} alt='avatar' />
  </div>
);
