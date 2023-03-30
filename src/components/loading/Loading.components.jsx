import { Spinner } from '@chakra-ui/react';
import './loading.components.scss';

export const Loading = () => {
  return (
    <div className="loading">
      <Spinner />
    </div>
  );
};
