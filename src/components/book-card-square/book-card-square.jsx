import React from 'react';
import { Link } from 'react-router-dom';
import styles from './book-card-square.module.css';
import { Button } from '../ui/button/button';
import { iconNoImageBook } from '../../assets';
import { Rating } from '../rating/rating';

export const BookCardSquare = ({ imgUrl, title, rating, author, year, status, category, id }) => (
  <Link data-test-id='card' className={styles.card} to={`/books/${category}/${id}`}>
    <div>
      <div className={styles.img}>
        {imgUrl ? (
          <img className={styles.picture} src={imgUrl} alt={title} />
        ) : (
          <img src={iconNoImageBook} alt={title} />
        )}
      </div>
      <Rating rating={rating} />
      <div>
        <p className={styles.title} title={title}>
          {title}
        </p>
        <div className={styles.info}>
          <p className={styles.author}>{author}</p>
          <p className={styles.year}>{year}</p>
        </div>
      </div>
    </div>
    <Button title={!status.name ? 'забронировать' : status.name} status={status.name} date={status.date} />
  </Link>
);
