import { useState } from 'react';

export const useQuantity = () => {
  const [quantity, setQuantity] = useState(0);

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
