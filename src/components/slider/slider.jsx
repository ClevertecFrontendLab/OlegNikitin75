import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slider.css';

import { FreeMode, Pagination, Scrollbar, Thumbs } from 'swiper';
import styles from './slider.module.css';

export const Slider = ({ imagesUrlSlider }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState('');
  const pagination = {
    clickable: true,
  };
  return (
    <>
      <Swiper
        data-test-id='slide-big'
        pagination={pagination}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Thumbs, Pagination]}
        className='mySwiper2'
      >
        {imagesUrlSlider.map((image) => (
          <SwiperSlide key={Math.random().toString(32).substring(2, 12)}>
            <div className={styles.box_main}>
              <img src={`https://strapi.cleverland.by${image.url}`} alt='pic' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        scrollbar={true}
        onSwiper={setThumbsSwiper}
        centeredSlides={true}
        loop={true}
        spaceBetween={25}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Scrollbar, Thumbs]}
        className='mySwiper'
      >
        {imagesUrlSlider.map((image) => (
          <SwiperSlide key={Math.random().toString(32).substring(2, 12)}>
            <div data-test-id='slide-mini' className={styles.box_preview}>
              <img src={`https://strapi.cleverland.by${image.url}`} alt='pic' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
