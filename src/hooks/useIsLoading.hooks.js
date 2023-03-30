import { useState, useEffect } from 'react ';
import { useLocation } from 'react-router-dom';

export const useIsLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  let location = useLocation();
  const handleIsLoading = () => {
    setIsLoading(false);
  };
  useEffect(() => {
    window.addEventListener('load', handleIsLoading());
    return () => window.removeEventListener('load', handleIsLoading);
  }, [location.pathname]);

  return [isLoading];
};
