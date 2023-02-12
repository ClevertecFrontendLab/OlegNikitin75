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
