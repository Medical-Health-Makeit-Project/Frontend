import { BiErrorCircle } from 'react-icons/bi';
import { Spinner } from '@chakra-ui/react';
import './categories.shop.scss';

export const SelectCategories = ({
  categories,
  error,
  handleSelectCategories,
  isLoading,
}) => {
  const location = window.location.pathname;
  if (error) {
    return (
      <div className="error-message">
        <BiErrorCircle size={30} color="red" />
        <p>Something went wrong with categories</p>
      </div>
    );
  }
  if (isLoading)
    return (
      <div className="error-message">
        <Spinner />
      </div>
    );

  return (
    <div className="categories-container">
      <select
        className="categories"
        onChange={(e) => handleSelectCategories(e.target.value)}
      >
        <option value="/home/shop">All</option>
        {categories.map((e) => {
          const selected = location.endsWith(e.category.toLowerCase());
          console.log(selected);
          return (
            <option
              key={e.id}
              value={`/home/shop/${e.category.toLowerCase()}`}
              selected={selected}
            >
              {e.category}
            </option>
          );
        })}
      </select>
    </div>
  );
};
