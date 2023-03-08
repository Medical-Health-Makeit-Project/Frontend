import axios from 'axios';

export const departmentsService = async () => {
  const response = await axios.get(
    '/src/pages/home/components/our-departments/departmnets.json'
  );
  return response;
};
