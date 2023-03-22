import { BiErrorCircle } from 'react-icons/bi';
import { Spinner } from '@chakra-ui/react';
import './categories.shop.scss';
import { useShopContext } from '../../context';

export const SelectCategories = () => {
  const { categories, categoriesError, categoriesIsLoading, handleSelectCategories } =
    useShopContext();

  const location = window.location.pathname;
  if (categoriesError) {
    return (
      <div className="error-message">
        <BiErrorCircle size={30} color="red" />
        <p>Something went wrong with categories</p>
      </div>
    );
  }
  if (categoriesIsLoading)
    return (
      <div className="error-message">
        <Spinner />
      </div>
    );

  return (
    <div className="categories-container">
      <select className="categories" onChange={(e) => handleSelectCategories(e.target.value)}>
        <option value="/home/shop">All</option>
        {categories.map((e) => {
          const selected = location.endsWith(e.category.toLowerCase());
          return (
            <option
              key={e.id}
              value={`/home/shop/${e.category.toLowerCase()}`}
              defaultValue={selected}
            >
              {e.category}
            </option>
          );
        })}
      </select>
    </div>
  );
};
