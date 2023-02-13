import React from 'react';
import styles from './avatar.module.css';
import { avatarDefault } from '../../assets';

export const Avatar = ({ size, imgUrl }) => (
  <div className={`${styles.img} ${styles[size]}`}>
    {imgUrl ? (
      <img src={`https://strapi.cleverland.by${imgUrl}`} alt='avatar' />
    ) : (
      <img src={avatarDefault} alt='avatar' />
    )}
  </div>
);
