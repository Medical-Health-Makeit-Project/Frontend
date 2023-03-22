export const PublicRoutes = {
  HOME: '/home',
  LOGIN: '/home/login',
  REGISTER: '/home/register',
  DOCTORS: '/home/our-doctors/*',
  DOCTOR_DETAIL: '/:id',
  SHOP: '/home/shop',
  CATEGORY: '/home/shop/:category',
  UNAUTHORIZED: '/home/unauthorized',
};

export const PrivateRoutes = {
  APPOINTMENTS: '/home/appointments',
  CHECKOUT: '/home/checkout',
  PAYMENT: '/home/payment',
};
