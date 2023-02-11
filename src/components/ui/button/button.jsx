import React, { useState } from 'react';
import styles from './button.module.css';

export const Button = ({ title, status, size, date, icon }) => {
  const [active, setActive] = useState(false);
  return (
    <button
      className={
        !status
          ? `${styles.btn} ${styles.btn_card} ${styles[size]}`
          : status === 'забронирована'
          ? `${styles.btn} ${styles.btn_outline} ${styles[size]}`
          : `${styles.btn} ${styles.btn_hidden} ${styles[size]}`
      }
      type='button'
      onClick={() => setActive(!active)}
    >
      {icon && <img src={icon} alt='icon' />}
      {title}
      <span className={styles.btn_span}>{date}</span>
    </button>
  );
};
