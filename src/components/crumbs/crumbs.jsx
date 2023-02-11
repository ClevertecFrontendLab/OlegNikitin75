import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './crumbs.module.css';
import { slash } from '../../assets';

export const Crumbs = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.crumbs}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <span
            className={styles.crumbs_link}
            onClick={() => navigate(-2)}
            onKeyDown={() => navigate(-2)}
            role='presentation'
          >
            Бизнес книги
          </span>
          <span>
            <img className={styles.crumbs_img} src={slash} alt='icon' />
          </span>
          <span
            className={`${styles.crumbs_link} ${styles.crumbs_link__title}`}
            onClick={() => navigate(-1)}
            onKeyDown={() => navigate(-2)}
            role='presentation'
          >
            Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
          </span>
        </div>
      </div>
    </div>
  );
};
