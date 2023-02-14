import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './book-page.module.css';
import { Button } from '../../components/ui/button/button';
import { Rating } from '../../components/rating/rating';
import { Review } from '../../components/review/review';
import { Output } from '../../components/output/output';
import { Crumbs } from '../../components/crumbs/crumbs';
import { getId, ucFirst, useWidthScreen } from '../../utils/helpers';
import { Navbar } from '../../components/navbar/navbar';
import { Slider } from '../../components/slider/slider';
import { arrow, arrowUpBlack, iconNoImageBook } from '../../assets';
import { useGetBookQuery } from '../../redux';
import { LoaderPopup } from '../../components/loader-popup/loader-popup';
import { ErrorMessage } from '../../components/error-message';

export const BookPage = () => {
  const { bookId } = useParams();
  const { data: book = {}, isLoading, isError } = useGetBookQuery(bookId);
  const { width } = useWidthScreen();
  const lengthSlider = book?.images?.length;
  const [showReview, setShowReview] = useState(false);
  const handleClick = () => {
    setShowReview(!showReview);
  };
  if (isLoading) {
    return <LoaderPopup isLoading={isLoading} />;
  }
  return (
    <div className={styles.book}>
      {width <= 960 && <Navbar />}
      {isError && (
        <div className={styles.container}>
          <ErrorMessage />
        </div>
      )}
      <Crumbs title={book.title} categories={book.categories} />
      {!isError && (
        <div className={styles.container}>
          <div className={styles.inner}>
            <div className={styles.detail}>
              <div className={styles.detail_img}>
                {lengthSlider > 1 && (
                  <div>
                    <Slider imagesUrlSlider={book.images} />
                  </div>
                )}
                {book.images === null && (
                  <div data-test-id='slide-big' className={styles.img_box}>
                    <img src={iconNoImageBook} alt='Not pic' />
                  </div>
                )}
                {lengthSlider === 1 && (
                  <div data-test-id='slide-big'>
                    <img src={`https://strapi.cleverland.by${book.images[0].url}`} alt={book.title} />
                  </div>
                )}
              </div>
              <div>
                <p className={styles.title}>{book.title}</p>
                <div className={styles.info}>
                  <ul className={styles.authors}>
                    {book?.authors?.map((author) => (
                      <li key={getId()}>
                        <p className={styles.author}>{author},</p>
                      </li>
                    ))}
                  </ul>
                  <span className={styles.year}>{book.issueYear}</span>
                </div>
                <Button booking={book.booking} delivery={book.delivery} size='large_high' onClick={() => {}} />
                {width > 768 && (
                  <div className={styles.desc}>
                    <p className={styles.desc_title}>О книге</p>
                    <p className={styles.desc_text}>{book.description}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {width <= 768 && (
            <div className={styles.desc}>
              <p className={styles.desc_title}>О книге</p>
              <p className={styles.desc_text}>{book.description}</p>
            </div>
          )}
          <div className={styles.wrap}>
            <div className={styles.box}>
              <p className={styles.desc_title}>Рейтинг</p>
              <Rating rating={book.rating} />
            </div>
            <div className={styles.box}>
              <p className={styles.desc_title}>Подробная информация</p>
              <Output
                publish={book.publish}
                year={book.issueYear}
                pages={book.pages}
                cover={book.cover}
                categories={book.categories}
                weight={book.weight}
                format={book.format}
                ISBN={book.ISBN}
                producer={book.producer}
              />
            </div>
            <p className={styles.desc_title}>
              Отзывы <span>{book?.comments?.length}</span>
              {book?.comments?.length && (
                <button
                  data-test-id='button-hide-reviews'
                  className={styles.review_btn}
                  type='button'
                  onClick={handleClick}
                >
                  <img src={showReview ? arrowUpBlack : arrow} alt='icon' />
                </button>
              )}
            </p>
            <ul className={!showReview ? styles.hide : ''}>
              {book?.comments?.map((comment) => (
                <Review
                  key={comment.id}
                  name={ucFirst(comment.user.firstName, comment.user.lastName)}
                  date={comment.createdAt}
                  rating={comment.rating}
                  text={comment.text}
                  avatar={comment.user.avatarUrl}
                />
              ))}
            </ul>
            {width <= 768 && <Button data-test-id='button-rating' title='Оценить книгу' size='full' />}
            {width > 768 && <Button data-test-id='button-rating' title='Оценить книгу' size='large_high' />}
          </div>
        </div>
      )}
    </div>
  );
};
