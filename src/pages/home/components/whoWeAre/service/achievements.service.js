import axios from 'axios';

export const achievementsService = async () => {
  const response = await axios.get(
    '/src/pages/home/components/whoWeAre/achievements.json'
  );
  return response;
};
