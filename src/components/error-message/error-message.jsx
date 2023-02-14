import React, { useState } from 'react';
import styles from './error-message.module.css';
import { error } from '../../assets';

export const ErrorMessage = () => {
  const [activeMessage, setActiveMessage] = useState(true);
  return (
    <div className={activeMessage ? `${styles.message_inner} ${styles.message_active}` : `${styles.message_inner}`}>
      <img src={error} alt='icon' />
      <p className={styles.message_text}>Что-то пошло не так. Обновите страницу через некоторое время.</p>
      <div onClick={() => setActiveMessage(false)} className={styles.message_close__btn} role='presentation' />
    </div>
  );
};
