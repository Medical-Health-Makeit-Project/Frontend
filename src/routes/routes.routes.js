export const PublicRoutes = {
  HOME: '/home',
  LOGIN: '/home/login',
  REGISTER: '/home/register',
  DOCTORS: '/home/our-doctors/*',
  DOCTOR_DETAIL: '/:id',
  SHOP: '/home/shop',
  CATEGORY: '/home/shop/:category',
  UNAUTHORIZED: '/home/unauthorized',
  PAGE404: '/*',
};

export const PrivateRoutes = {
  APPOINTMENTS: '/home/appointments',
  CHECKOUT: '/home/checkout',
  PAYMENT: '/home/payment',
  PROFILES: '/home/profile',
  ADMIN: {
    INDEX: '/home/admin',
    HOME: 'dashboard',
    DOCTORS: 'doctors',
    PRODUCTS: 'products',
  },
};
