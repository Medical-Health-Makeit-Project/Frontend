export const colorIcons = 'rgba(63, 182, 214)';
export const TOKEN = 'ACCESS_TOKEN';
export const IMAGE_MAX_SIZE = 5242880;
export const DOCTOR_EMAIL_DOMAIN = '@drmebid.com';
export const DOCTOR_PREFIX = 'Dr';
export const DATE_FORMAT = 'DD/MM/YYYY';
export const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY;

// PRODUCTS

//CHECK
export const ALL_PRODUCTS = !import.meta.env.PROD ? import.meta.env.VITE_ALL_PRODUCTS : null;

// CHECK
export const PRODUCTS_BY_CATEGORY = !import.meta.env.PROD
  ? import.meta.env.VITE_PRODUCTS_BY_CATEGORY
  : null;

// CHECK
export const CATEGORIES = !import.meta.env.PROD ? import.meta.env.VITE_CATEGORIES : null;

// CHECK
export const POST_PRODUCTS = !import.meta.env.PROD ? import.meta.env.VITE_POST_PRODUCTS : null;

// CHECK
export const DELETE_PRODUCT = !import.meta.env.PROD ? import.meta.env.VITE_DELETE_PRODUCT : null;

//CHECK
export const UPDATE_PRODUCTS = !import.meta.env.PROD ? import.meta.env.VITE_UPDATE_PRODUCTS : null;

//-----------------------------------------------------------

// AUTHENTICATION

//check
export const AUTHENTICATION = !import.meta.env.PROD ? import.meta.env.VITE_AUTHENTICATION : null;

//check
export const AUTHORIZATION = !import.meta.env.PROD ? import.meta.env.VITE_AUTHORIZATION : null;

//-----------------------------------------------------------

// DOCTORS

//check
export const POST_DOCTOR = !import.meta.env.PROD ? import.meta.env.VITE_POST_DOCTOR : null;

//check
export const UPDATE_DOCTOR = !import.meta.env.PROD ? import.meta.env.VITE_UPDATE_DOCTOR : null;

export const DELETE_DOCTOR = !import.meta.env.PROD ? import.meta.env.VITE_DELETE_DOCTOR : null;

//check
export const ALL_DOCTORS = !import.meta.env.PROD ? import.meta.env.VITE_ALL_DOCTORS : null;

export const DOCTORS_BY_AREA = !import.meta.env.PROD ? import.meta.env.VITE_DOCTORS_BY_AREA : null;

//check
export const LOCATIONS = !import.meta.env.PROD ? import.meta.env.VITE_LOCATIONS : null;

//-----------------------------------------------------------

// USERS

//check
export const REGISTER_USER = !import.meta.env.PROD ? import.meta.env.VITE_REGISTER_USER : null;

// check
export const UPDATE_USER = !import.meta.env.PROD ? import.meta.env.VITE_UPDATE_USER : null;

//-----------------------------------------------------------

// PAYMENTS

export const PAYMENTS = !import.meta.env.PROD ? import.meta.env.VITE_PAYMENTS : null;

//-----------------------------------------------------------

// APPOINTMENTS

export const APPOINTMENTS = !import.meta.env.PROD ? import.meta.env.VITE_APPOINTMENTS : null;
