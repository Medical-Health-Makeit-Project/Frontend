import { useState, useEffect } from 'react';

export const useQuantity = (resetQuantity) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(0);
  }, [resetQuantity]);

  const handlerMinus = () => {
    if (!quantity) return;
    setQuantity((prev) => prev - 1);
  };
  const handlerPlus = (isOutOfStock) => {
    if (isOutOfStock) return;
    setQuantity((prev) => prev + 1);
  };

  return [quantity, handlerMinus, handlerPlus];
};
