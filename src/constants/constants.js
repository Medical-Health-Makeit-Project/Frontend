export const colorIcons = 'rgba(63, 182, 214)';
export const TOKEN = 'ACCESS_TOKEN';
export const IMAGE_MAX_SIZE = 5242880;
export const DOCTOR_EMAIL_DOMAIN = '@drmebid.com';
export const DOCTOR_PREFIX = 'Dr';
export const phoneValidation =
  '/^s*(?:+?(d{1,3}))?[-. (]*(d{3})[-. )]*(d{3})[-. ]*(d{4})(?: *x(d+))?s*$/';
export const emailValidation = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}';
export const STRIPE_PUBLIC_KEY =
  'pk_test_51Mz5GfGuKX0jSjOwt0aR0OYVxnjYpKnCPWm4LeMrNgJQz3pDNVnnX3C2faSkG1uhwtsoYKfb7B3aPtkMASQqEMiR00s5c12Uux';

//unused endpoint
export const PRODUCTS_BY_ID = '/src/pages/shop/db/productsById/products.json';

//-----------------------------------------------------------
// jsons that will be change to endpoints of the backend

// PRODUCTS

//CHECK
export const ALL_PRODUCTS = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/products'
  : '/src/pages/shop/db/allProducts/products.json';

// CHECK
export const PRODUCTS_BY_CATEGORY = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/products/'
  : '/src/pages/shop/db/productsByCategory/products.json';

// CHECK
export const CATEGORIES = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/categories'
  : '/src/pages/shop/db/categories/categories.json';

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

//CHECK
export const AUTHENTICATION = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/auth/'
  : '/src/pages/login/db/users.db.json';

//CHECK
export const AUTHORIZATION = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/auth/authorization'
  : '/src/pages/login/db/users.db.json';

//-----------------------------------------------------------

// DOCTORS

export const POST_DOCTOR = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/auth/register/doctor'
  : null;

export const UPDATE_DOCTOR = !import.meta.env.PROD ? 'http://localhost:5150/api/v1/doctors' : null;

export const DELETE_DOCTOR = !import.meta.env.PROD ? 'http://localhost:5150/api/v1/doctors' : null;

export const ALL_DOCTORS = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/doctors'
  : '/src/pages/doctors/doctors.json';

export const DOCTORS_BY_AREA = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/doctors/areas'
  : '/src/pages/appointments/db/doctorsByArea.json';

export const LOCATIONS = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/locations'
  : '/src/pages/appointments/db/locations.json';

//-----------------------------------------------------------

// USERS

export const REGISTER_USER = !import.meta.env.PROD
  ? 'http://localhost:5150/api/v1/auth/register'
  : null;
//export const GET_USERS = '/src/pages/profiles/user.json';

export const DOCTORS_AREA = '/src/pages/administration/db/doctorsArea.json'; // This endpoint should be replaced bY DOCTORS_BY_AREA

//
export const AUTH = '/src/pages/login/db/users.db.json';
