import React from 'react';
import styles from './output.module.css';
import { getId } from '../../utils/helpers';

export const Output = ({ publish, year, pages, cover, categories, weight, format, ISBN, producer }) => (
  <div className={styles.output_list}>
    <div className={`${styles.output_list__column} ${styles.output_list__column__left}`}>
      <p className={styles.output__item}>
        <span>Издательство</span>
        <span>{publish}</span>
      </p>
      <p className={styles.output__item}>
        <span>Год издания</span>
        <span>{year}</span>
      </p>
      <p className={styles.output__item}>
        <span>Страниц</span>
        <span>{pages}</span>
      </p>
      <p className={styles.output__item}>
        <span>Переплёт</span>
        <span>{cover}</span>
      </p>
      <p className={styles.output__item}>
        <span>Формат</span>
        <span>{format}</span>
      </p>
    </div>
    <div className={styles.output_list__column}>
      <div className={styles.output__item}>
        <span>Жанр</span>
        <ul>
          {categories?.map((cat) => (
            <li key={getId()}>
              <span>{cat}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.output__item}>
        <span>Вес</span>
        <span>{weight}</span>
      </p>
      <p className={styles.output__item}>
        <span>ISBN</span>
        <span>{ISBN}</span>
      </p>
      <p className={styles.output__item}>
        <span>Изготовитель</span>
        <span>{producer}</span>
      </p>
    </div>
  </div>
);
