import * as yup from 'yup';

export const createDoctorSchema = yup.object().shape({
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  area: yup.string().required(),
  avatar: yup.mixed().test('file', 'You need to provide an avatar', (file) => {
    if (file.length) return true;
    return false;
  }),
  // .test('fileSize', 'The file is too large', (file) => {
  //   if (!file.length) return true;
  //   return file && file.size <= 20000;
  // }),
  email: yup.string().email('Must be a valid email').required('You need to provide an email'),
  phone: yup
    .string()
    .min(10, 'You must provide at leaste 10 digits')
    .required('You need to provide a phone number'),
  city: yup.string().required('You need to provide a city'),
  country: yup.string().required('You need to provide a country'),
  gender: yup.string().required('You must to provide a gender'),
  qualifications: yup.string().required('You must provide at least one skill'),
  memberships: yup.string(),
  skills: yup
    .string('You must provide at least one skill')
    .required('You must provide at least one skill'),
  password: yup.date(),
  role: yup.number(),
});
