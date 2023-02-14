import { useEffect, useState } from 'react';

export function useWidthScreen() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  window.onresize = () => {
    setWidth(window.innerWidth);
  };

  return { width };
}

export function getId() {
  return Math.random().toString(32).substring(2, 12);
}

export function getDate(stringDate, isYear) {
  const date = new Date(Date.parse(stringDate));
  const receivedDay = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const receivedMonth = date.getMonth() + 1 > 9 ? date.getMonth() + 1 > 9 : `0${date.getMonth() + 1}`;
  const receivedYear = date.getFullYear();
  let month;
  switch (receivedMonth) {
    case '01':
      month = 'января';
      break;
    case '02':
      month = 'февраля';
      break;
    case '03':
      month = 'марта';
      break;
    case '04':
      month = 'апреля';
      break;
    case '05':
      month = 'мая';
      break;
    case '06':
      month = 'июня';
      break;
    case '07':
      month = 'июля';
      break;
    case '08':
      month = 'августа';
      break;
    case '09':
      month = 'сентября';
      break;
    case '10':
      month = 'октября';
      break;
    case '11':
      month = 'ноября';
      break;
    default:
      month = 'декабря';
  }

  return isYear ? `${receivedDay} ${month} ${receivedYear}` : `${receivedDay}. ${receivedMonth}`;
}
export function ucFirst(firstName, lastName) {
  return `${firstName[0].toUpperCase() + firstName.slice(1)} ${lastName[0].toUpperCase() + lastName.slice(1)}`;
}
