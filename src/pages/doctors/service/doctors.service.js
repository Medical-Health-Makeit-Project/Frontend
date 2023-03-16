import axios from 'axios';

export const doctorsService = async () => {
  const response = await axios.get('/src/pages/doctors/doctors.json');
  return response;
};
