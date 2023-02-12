import { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './book-page.module.css';
import { books } from '../../constants';
import { Button } from '../../components/ui/button/button';
import { Rating } from '../../components/rating/rating';
import { Review } from '../../components/review/review';
import { Output } from '../../components/output/output';
import { Crumbs } from '../../components/crumbs/crumbs';
import { useWidthScreen } from '../../utils/helpers';
import { Navbar } from '../../components/navbar/navbar';
import { Slider } from '../../components/slider/slider';
import { arrow, arrowUpBlack, iconNoImageBook, imageBookDesktop } from '../../assets';

export const BookPage = () => {
  const { width } = useWidthScreen();
  const { bookId } = useParams();
  const lengthSlider = books[Number(bookId) - 1].imgUrl.sliderImages.length;
  const [showReview, setShowReview] = useState(false);
  const handleClick = () => {
    setShowReview(!showReview);
  };
  return (
    <div className={styles.book}>
      {width <= 960 && <Navbar />}
      <Crumbs />
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.detail}>
            <div className={styles.detail_img}>
              {lengthSlider > 0 && (
                <div>
                  <Slider
                    imagesUrlSlider={books[Number(bookId) - 1].imgUrl.sliderImages}
                    picUrlSlider={books[Number(bookId) - 1].imgUrl.sliderImages}
                    bookId={bookId}
                  />
                </div>
              )}
              {lengthSlider === 0 && books[Number(bookId) - 1].imgUrl.desktop === null && (
                <div data-test-id='slide-big' className={styles.img_box}>
                  <img src={iconNoImageBook} alt='' />
                </div>
              )}
              {lengthSlider === 0 && books[Number(bookId) - 1].imgUrl.desktop !== null && (
                <div data-test-id='slide-big'>
                  <img src={imageBookDesktop} alt='' />
                </div>
              )}
            </div>
            <div>
              <p className={styles.title}>{books[0].title}</p>
              <div className={styles.info}>
                <span className={styles.author}>{books[0].author}</span>
                <span className={styles.year}>{books[0].year}</span>
              </div>
              <Button
                title={!books[0].status.name ? 'забронировать' : books[0].status.name}
                status={books[0].status.name}
                date={books[0].status.date}
                size='large_high'
                onClick={() => {}}
              />
              {width > 768 && (
                <div className={styles.desc}>
                  <p className={styles.desc_title}>О книге</p>
                  <p className={styles.desc_text}>{books[0].desc}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {width <= 768 && (
          <div className={styles.desc}>
            <p className={styles.desc_title}>О книге</p>
            <p className={styles.desc_text}>{books[0].desc}</p>
          </div>
        )}
        <div className={styles.wrap}>
          <div className={styles.box}>
            <p className={styles.desc_title}>Рейтинг</p>
            <Rating rating={books[0].rating} showRating={true} />
          </div>
          <div className={styles.box}>
            <p className={styles.desc_title}>Подробная информация</p>
            <Output output={books[0].output} />
          </div>
          <p className={styles.desc_title}>
            Отзывы <span>{books[0].reviews.length}</span>
            {books[0].reviews.length && (
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
            {books[0].reviews.map((book) => (
              <Review key={book.id} name={book.name} date={book.date} rating={book.rating} text={book.text} />
            ))}
          </ul>
          {width <= 768 && <Button data-test-id='button-rating' title='Оценить книгу' size='full' />}
          {width > 768 && <Button data-test-id='button-rating' title='Оценить книгу' size='large_high' />}
        </div>
      </div>
    </div>
  );
};
