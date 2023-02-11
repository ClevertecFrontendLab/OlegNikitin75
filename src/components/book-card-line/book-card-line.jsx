import React from 'react';
import { Link } from 'react-router-dom';
import styles from './book-card-line.module.css';
import { Button } from '../ui/button/button';
import { iconNoImageBook } from '../../assets';
import { Rating } from '../rating/rating';

export const BookCardLine = ({ imgUrl, title, rating, author, year, status, category, id }) => (
  <Link data-test-id='card' className={styles.card} to={`/books/${category}/${id}`}>
    <div className={styles.box}>
      <div className={styles.img}>
        {imgUrl ? (
          <img className={styles.picture} src={imgUrl} alt={title} />
        ) : (
          <img src={iconNoImageBook} alt={title} />
        )}
      </div>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <div className={styles.info}>
          <p className={styles.author}>{author}</p>
          <p className={styles.year}>{year}</p>
        </div>
        <div className={styles.box_bottom}>
          <Rating rating={rating} />
          <Button
            title={!status.name ? 'забронировать' : status.name}
            status={status.name}
            date={status.date}
            size='medium'
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  </Link>
);
