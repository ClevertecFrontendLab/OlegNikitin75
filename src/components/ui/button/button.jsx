import React, { useState } from 'react';
import styles from './button.module.css';

export function Button({ booking, delivery, size }) {
  const [active, setActive] = useState(false);
  if (delivery) {
    return (
      <button
        className={`${styles.btn} ${styles.btn_hidden} ${styles[size]}`}
        type='button'
        onClick={() => setActive(!active)}
      >
        Занята до
        <span className={styles.btn_span}>{delivery?.dateHandedTo}</span>
      </button>
    );
  }
  if (booking) {
    return (
      <button
        className={`${styles.btn} ${styles.btn_outline} ${styles[size]}`}
        type='button'
        onClick={() => setActive(!active)}
      >
        {!booking ? 'забронировать' : 'забронирована'}
      </button>
    );
  }
  if (!booking) {
    return (
      <button
        className={`${styles.btn} ${styles.btn_card} ${styles[size]}`}
        type='button'
        onClick={() => setActive(!active)}
      >
        {!booking ? 'забронировать' : 'забронирована'}
      </button>
    );
  }
}
