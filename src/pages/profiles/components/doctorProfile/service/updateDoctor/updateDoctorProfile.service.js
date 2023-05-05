import axios from 'axios';

export const updateDoctorProfile = async (URL, doctorFields, ACCESS_TOKEN) => {
  try {
    const { data } = await axios.patch(URL, doctorFields, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};
