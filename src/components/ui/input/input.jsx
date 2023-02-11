import { useEffect, useRef } from 'react';
import styles from './input.module.css';
import { useWidthScreen } from '../../../utils/helpers';

export const Input = ({ placeholder, iconBefore, iconAfter, handleFocus, focus, handleClickBtnSearch }) => {
  const { width } = useWidthScreen();
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current && width <= 425) {
      console.log(555);
      inputRef.current.focus();
    }
  });
  return (
    <div className={styles.input_box}>
      {iconBefore && <img className={styles.input_icon} src={iconBefore} alt='icon' />}

      <input
        ref={inputRef}
        onFocus={() => handleFocus(true)}
        onBlur={() => handleFocus(false)}
        className={styles.input}
        placeholder={placeholder}
        style={focus ? { color: '#f84604' } : { color: 'transparent' }}
      />
      {focus && (
        <button type='button' onClick={() => handleClickBtnSearch()}>
          {iconAfter && <img className={styles.input_icon__after} src={iconAfter} alt='icon' />}
        </button>
      )}
    </div>
  );
};
