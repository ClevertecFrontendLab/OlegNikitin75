import React from 'react';
import { Link } from 'react-router-dom';
import styles from './book-card-square.module.css';
import { Button } from '../ui/button/button';
import { iconNoImageBook } from '../../assets';
import { Rating } from '../rating/rating';
import { getId } from '../../utils/helpers';

export const BookCardSquare = ({ imgUrl, title, rating, authors, year, booking, delivery, category, id }) => (
  <Link data-test-id='card' className={styles.card} to={`/books/all/${id}`}>
    <div className={styles.card_content}>
      <div className={styles.img}>
        {imgUrl ? (
          <img className={styles.picture} src={`https://strapi.cleverland.by${imgUrl}`} alt={title} />
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
          <ul className={styles.authors}>
            {authors.map((author) => (
              <li key={getId()}>
                <p className={styles.author}>{author},</p>
              </li>
            ))}
          </ul>
          <p className={styles.year}>{year}</p>
        </div>
      </div>
    </div>
    <Button booking={booking} delivery={delivery} size='medium_full' />
  </Link>
);
