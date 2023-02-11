import React from 'react';
import styles from './output.module.css';

export const Output = ({ output }) => (
  <div className={styles.output_list}>
    <div className={`${styles.output_list__column} ${styles.output_list__column__left}`}>
      <p className={styles.output__item}>
        <span>Издательство</span>
        <span>{output.publishing}</span>
      </p>
      <p className={styles.output__item}>
        <span>Год издания</span>
        <span>{output.year}</span>
      </p>
      <p className={styles.output__item}>
        <span>Страниц</span>
        <span>{output.pages}</span>
      </p>
      <p className={styles.output__item}>
        <span>Переплёт</span>
        <span>{output.binding}</span>
      </p>
      <p className={styles.output__item}>
        <span>Формат</span>
        <span>{output.format}</span>
      </p>
    </div>
    <div className={styles.output_list__column}>
      <p className={styles.output__item}>
        <span>Жанр</span>
        <span>{output.genre}</span>
      </p>
      <p className={styles.output__item}>
        <span>Вес</span>
        <span>{output.weight}</span>
      </p>
      <p className={styles.output__item}>
        <span>ISBN</span>
        <span>{output.ISBN}</span>
      </p>
      <p className={styles.output__item}>
        <span>Изготовитель</span>
        <span>{output.manufacturer}</span>
      </p>
    </div>
  </div>
);
