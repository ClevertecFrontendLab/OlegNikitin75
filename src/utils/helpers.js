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
