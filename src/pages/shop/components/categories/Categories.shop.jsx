import { BiErrorCircle } from 'react-icons/bi';
import { Spinner } from '@chakra-ui/react';
import { useShopContext } from '../../context';
import { Error } from '@components/error';
import './categories.shop.scss';

export const SelectCategories = () => {
  const { categories, categoriesError, categoriesIsLoading, handleSelectCategories } =
    useShopContext();
  const location = window.location.pathname;

  if (categoriesError) {
    const { status } = categoriesError.response;
    if (status === 404) {
      return <Error error="There isn't categories to show" status={status} />;
    }
    if (status === 500) {
      return;
    }
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
