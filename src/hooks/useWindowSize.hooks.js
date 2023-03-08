import { useState, useEffect } from 'react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const changeWindowSize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', changeWindowSize);

    return () => window.removeEventListener('resize', changeWindowSize);
  }, []);

  return windowSize;
};
