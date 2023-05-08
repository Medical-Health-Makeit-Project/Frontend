import { useState, useEffect } from 'react';

export const useStock = (stock, currentQuantity) => {
  const [isOutOfStock, setIsOutOfStock] = useState(false);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (currentQuantity <= stock - 1) return setIsOutOfStock(false);
    if (currentQuantity >= stock) return setIsOutOfStock(true);
  }, [currentQuantity, stock]);

  return [isOutOfStock];
};
