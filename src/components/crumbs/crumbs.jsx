import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './crumbs.module.css';
import { slash } from '../../assets';

export const Crumbs = ({ title, categories }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.crumbs}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <span
            onClick={() => navigate(-1)}
            onKeyDown={() => navigate(-1)}
            role='presentation'
            className={styles.crumbs_link}
          >
            {categories}
          </span>
          <span>
            <img className={styles.crumbs_img} src={slash} alt='icon' />
          </span>
          <span className={`${styles.crumbs_link} ${styles.crumbs_link__title}`}>{title}</span>
        </div>
      </div>
    </div>
  );
};
