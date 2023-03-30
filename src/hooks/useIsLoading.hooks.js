import { useState, useEffect } from 'react ';

export const useIsLoading = () => {
  const [isLoading, setIslLoading] = useState(true);
  const handleIsLoading = () => {
    setIslLoading(false);
  };
  useEffect(() => {
    window.addEventListener('load', handleIsLoading);
    return () => window.removeEventListener('load', handleIsLoading);
  }, []);

  return [isLoading];
};
