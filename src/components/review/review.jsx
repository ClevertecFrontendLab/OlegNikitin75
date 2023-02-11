import React from 'react';
import { avatar } from '../../assets';
import { Rating } from '../rating/rating';
import styles from './review.module.css';
import { Avatar } from '../avatar/avatar';

export const Review = ({ name, date, rating, text }) => (
  <li className={styles.review}>
    <div className={styles.review_head}>
      <Avatar imgUrl={avatar} size='small' />
      <div className={styles.review_head__box}>
        <span>{name}</span>
        <span>{date}</span>
      </div>
    </div>
    <Rating rating={rating} />
    {text && <p className={styles.review_text}>{text}</p>}
  </li>
);
