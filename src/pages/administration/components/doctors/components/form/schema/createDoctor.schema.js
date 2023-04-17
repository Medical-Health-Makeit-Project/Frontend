import * as yup from 'yup';
import { IMAGE_MAX_SIZE } from '@constants';

export const createDoctorSchema = yup.object().shape({
  firstname: yup.string().required('You must to provide a firstname'),
  lastname: yup.string().required('You must to provide a lastname'),
  email: yup.string().email().required('You must provide an email'),
  birthdate: yup.date(),
  area: yup.string().required('You must to provide an area'),
  avatar: yup
    .mixed()
    .required('An avatar is required')
    .test('isValidSize', 'The file is too large', (value) => {
      if (value.length) {
        return value && value[0].size <= IMAGE_MAX_SIZE;
      }
    })
    .test('fileType', 'only jpeg, png and jpg formats are accepted', (file) => {
      if (file.length) {
        return file && ['image/jpeg', 'image/jpg', 'image/png'].includes(file[0].type);
      }
    }),
  email: yup.string().email('Must be a valid email').required('You need to provide an email'),
  phone: yup
    .string()
    .min(10, 'You must to provide at leaste 10 digits')
    .required('You need to provide a phone number'),
  city: yup.string().required('You need to provide a city'),
  country: yup.string().required('You need to provide a country'),
  gender: yup.string().required('You must to provide a gender'),
  qualifications: yup.string().required('You must to provide at least one qualification'),
  memberships: yup.string(),
  skills: yup.string().required('You must to provide at least one skill'),
  password: yup.string(),
});
