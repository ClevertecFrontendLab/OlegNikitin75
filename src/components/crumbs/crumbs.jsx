import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './crumbs.module.css';
import { slash } from '../../assets';
import { getId } from '../../utils/helpers';

export const Crumbs = ({ title, categories }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.crumbs}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <ul className={styles.crumbs_category}>
            {categories?.map((cat) => (
              <li key={getId()} onClick={() => navigate(-1)} onKeyDown={() => navigate(-1)} role='presentation'>
                <span className={styles.crumbs_link}>{cat}</span>
              </li>
            ))}
          </ul>

          <span>
            <img className={styles.crumbs_img} src={slash} alt='icon' />
          </span>
          <span className={`${styles.crumbs_link} ${styles.crumbs_link__title}`}>{title}</span>
        </div>
      </div>
    </div>
  );
};
