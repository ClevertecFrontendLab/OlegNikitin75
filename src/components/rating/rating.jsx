import React from 'react';
import { star, starFill } from '../../assets';
import styles from './rating.module.css';

export const Rating = ({ rating }) => (
  <div className={styles.rating_box}>
    {!rating ? (
      <p>ещё нет оценок</p>
    ) : (
      <ul className={styles.rating_list}>
        {[...Array(5)].map((item, index) => {
          if (index + 1 <= rating) {
            return <img key={Math.random().toString(32).substring(2, 12)} src={starFill} alt='icon' />;
          }
          return <img key={Math.random().toString(32).substring(2, 12)} src={star} alt='icon' />;
        })}
      </ul>
    )}
    {rating ? <span className={styles.rating_all}>{rating}</span> : null}
  </div>
);
