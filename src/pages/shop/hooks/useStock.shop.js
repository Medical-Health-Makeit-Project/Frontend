import { useState, useEffect } from 'react';

export const useStock = (stock, currentQuantity) => {
  const [isOutOfStock, setIsOutOfStock] = useState(false);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (currentQuantity >= stock) return setIsOutOfStock(true);
    if (currentQuantity <= stock) return setIsOutOfStock(false);
  }, [currentQuantity, stock]);

  return [isOutOfStock];
};
