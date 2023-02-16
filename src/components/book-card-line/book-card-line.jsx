import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './book-card-line.module.css';
import { Button } from '../ui/button/button';
import { iconNoImageBook } from '../../assets';
import { Rating } from '../rating/rating';
import { getId } from '../../utils/helpers';

export const BookCardLine = ({ imgUrl, title, rating, authors, year, booking, delivery, id }) => {
  const { category } = useParams();
  return (
    <Link data-test-id='card' className={styles.card} to={`/books/${category}/${id}`}>
      <div className={styles.box}>
        <div className={styles.img}>
          {imgUrl ? (
            <img className={styles.picture} src={`https://strapi.cleverland.by${imgUrl}`} alt={title} loading='lazy' />
          ) : (
            <img src={iconNoImageBook} alt={title} />
          )}
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
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
          <div className={styles.box_bottom}>
            <Rating rating={rating} />
            <Button booking={booking} delivery={delivery} size='medium' />
          </div>
        </div>
      </div>
    </Link>
  );
};
