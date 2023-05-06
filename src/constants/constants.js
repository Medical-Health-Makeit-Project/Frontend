export const colorIcons = 'rgba(63, 182, 214)';
export const TOKEN = 'ACCESS_TOKEN';
export const IMAGE_MAX_SIZE = 5242880;
export const DOCTOR_EMAIL_DOMAIN = '@drmebid.com';
export const DOCTOR_PREFIX = 'Dr';
export const DATE_FORMAT = 'DD/MM/YYYY';
export const STRIPE_PUBLIC_KEY =
  'pk_test_51Mz5GfGuKX0jSjOwt0aR0OYVxnjYpKnCPWm4LeMrNgJQz3pDNVnnX3C2faSkG1uhwtsoYKfb7B3aPtkMASQqEMiR00s5c12Uux';

// PRODUCTS

//CHECK
export const ALL_PRODUCTS = !import.meta.env.PROD ? 'http://localhost:5150/api/v1/products' : null;

// CHECK
export const PRODUCTS_BY_CATEGORY = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/products/'
  : null;

// CHECK
export const CATEGORIES = !import.meta.env.PROD ? 'http://localhost:5150/api/v1/categories' : null;

// CHECK
export const POST_PRODUCTS = !import.meta.env.PROD ? 'http://localhost:5150/api/v1/products' : null;

// CHECK
export const DELETE_PRODUCT = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/products'
  : null;

//CHECK
export const UPDATE_PRODUCTS = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/products'
  : null;

//-----------------------------------------------------------

// AUTHENTICATION

//check
export const AUTHENTICATION = !import.meta.env.PROD ? 'http://localhost:5150/api/v1/auth/' : null;

//check
export const AUTHORIZATION = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/auth/authorization'
  : null;

//-----------------------------------------------------------

// DOCTORS

//check
export const POST_DOCTOR = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/auth/register/doctor'
  : null;

//check
export const UPDATE_DOCTOR = !import.meta.env.PROD ? 'http://localhost:5150/api/v1/doctors' : null;

export const DELETE_DOCTOR = !import.meta.env.PROD ? 'http://localhost:5150/api/v1/doctors' : null;

//check
export const ALL_DOCTORS = !import.meta.env.PROD ? 'http://localhost:5150/api/v1/doctors' : null;

export const DOCTORS_BY_AREA = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/doctors/areas'
  : null;

//check
export const LOCATIONS = !import.meta.env.PROD ? 'http://localhost:5150/api/v1/locations' : null;

//-----------------------------------------------------------

// USERS

//check
export const REGISTER_USER = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/auth/register'
  : null;

// check
export const UPDATE_USER = !import.meta.env.PROD ? 'http://localhost:5150/api/v1/users' : null;

//-----------------------------------------------------------

// PAYMENTS

export const PAYMENTS = !import.meta.env.PROD ? 'http://localhost:5150/api/v1/payments' : null;

//-----------------------------------------------------------

// APPOINTMENTS

export const APPOINTMENTS = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/appointments'
  : null;
