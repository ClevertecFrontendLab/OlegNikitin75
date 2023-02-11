import React from 'react';

import styles from './footer.module.css'
import {facebook, inst, lin, vk} from '../../assets';

export const Footer = () =>
    (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <p>© 2020-2023 Cleverland. Все права защищены.</p>
                    <ul>
                        <li>
                            <a href="https://ru-ru.facebook.com/" target="_blank" rel="noreferrer">
                                <img src={facebook} alt="icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                <img src={inst} alt="icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://vk.com/" target="_blank" rel="noreferrer">
                                <img src={vk} alt="icon"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://ru.linkedin.com/" target="_blank" rel="noreferrer">
                                <img src={lin} alt="icon"/>
                            </a>
                        </li>
                    </ul>

                </div>

            </div>
        </footer>
    );


