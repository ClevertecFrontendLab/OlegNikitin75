import React, { useEffect, useRef, useState } from 'react';
import {
  iconLineBlack,
  iconLineWhite,
  iconSortUp,
  iconSquareWhite,
  iconSquareBlack,
  magnifier,
  magnifierColor,
  iconCloseInput,
} from '../../assets';
import styles from './catalog.module.css';
import { BookCardSquare } from '../book-card-square/book-card-square';
import { BookCardLine } from '../book-card-line/book-card-line';
import { useGetBooksQuery } from '../../redux';

export const Catalog = () => {
  const { data = [] } = useGetBooksQuery();
  console.log(data);
  const [active, setActive] = useState('square');
  const [showInput, setShowInput] = useState(false);
  const [focus, setFocus] = useState(false);
  const handleFocus = (value) => {
    setFocus(value);
  };
  const refInputSmall = useRef(null);
  const handleClickBtnSearch = () => {
    refInputSmall.current?.focus();
    setShowInput(!showInput);
    setFocus(true);
  };
  useEffect(() => {
    if (refInputSmall) {
      refInputSmall.current?.focus();
    }
  }, [focus, showInput]);

  return (
    <div>
      <div className={styles.head}>
        <div className={styles.input_box__small} style={showInput ? { display: 'flex' } : { display: 'none' }}>
          <input
            data-test-id='input-search'
            ref={refInputSmall}
            className={styles.input_search}
            placeholder='Поиск книги или автора…'
          />
          <button data-test-id='button-search-close' type='button' onClick={handleClickBtnSearch}>
            <img src={iconCloseInput} alt='icon' />
          </button>
        </div>

        {!showInput && (
          <div className={styles.head_inner}>
            <div className={styles.head_left}>
              <div className={styles.input_box}>
                <img src={focus ? magnifierColor : magnifier} alt='icon' />

                <input
                  className={styles.input_search}
                  placeholder='Поиск книги или автора…'
                  onFocus={() => handleFocus(true)}
                  onBlur={() => handleFocus(false)}
                />
              </div>
              <button
                data-test-id='button-search-open'
                className={styles.btn_input__small}
                type='button'
                onClick={handleClickBtnSearch}
              >
                <img src={magnifier} alt='icon' />
              </button>
              <button className={styles.btn_sort} type='button' onClick={() => {}}>
                <img src={iconSortUp} alt='icon' />
                по рейтингу
              </button>
              <button className={styles.btn_sort__small} type='button' onClick={() => {}}>
                <img src={iconSortUp} alt='icon' />
              </button>
            </div>
            <div className={styles.buttons}>
              <button
                data-test-id='button-menu-view-window'
                className={
                  active === 'square'
                    ? `${styles.active} ${styles.btn} ${styles.round}`
                    : `${styles.btn} ${styles.round}`
                }
                type='button'
                onClick={() => setActive('square')}
              >
                {active === 'square' ? (
                  <img src={iconSquareWhite} alt='icon' />
                ) : (
                  <img src={iconSquareBlack} alt='icon' />
                )}
              </button>
              <button
                data-test-id='button-menu-view-list'
                className={
                  active === 'line' ? `${styles.active} ${styles.btn} ${styles.round}` : `${styles.btn} ${styles.round}`
                }
                type='button'
                onClick={() => setActive('line')}
              >
                {active === 'line' ? <img src={iconLineWhite} alt='icon' /> : <img src={iconLineBlack} alt='icon' />}
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
        {active === 'square' && (
          <ul className={styles.catalog_books}>
            {data.map((book) => (
              <li key={book.id}>
                <BookCardSquare
                  imgUrl={book.image?.url}
                  title={book.title}
                  rating={book.rating}
                  authors={book.authors}
                  year={book.issueYear}
                  booking={book.booking}
                  delivery={book.delivery}
                  category={book.category}
                  id={book.id}
                />
              </li>
            ))}
          </ul>
        )}
        {active === 'line' && (
          <ul className={styles.catalog_books__line}>
            {data.map((book) => (
              <li key={book.id}>
                <BookCardLine
                  imgUrl={book.image?.url}
                  title={book.title}
                  rating={book.rating}
                  authors={book.authors}
                  year={book.issueYear}
                  booking={book.booking}
                  delivery={book.delivery}
                  category={book.category}
                  id={book.id}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
