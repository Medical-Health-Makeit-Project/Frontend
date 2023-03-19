export const PublicRoutes = {
  HOME: '/home',
  LOGIN: '/home/login',
  REGISTER: '/home/register',
  UNAUTHORIZED: '/home/unauthorized',
  DOCTORS: '/home/our-doctors/*',
  DOCTOR_DETAIL: '/:id',
};

export const PrivateRoutes = {
  SHOP: '/home/shop',
  CATEGORY: '/home/shop/:category',
  CHECKOUT: '/home/checkout',
  PAYMENT: '/home/payment',
};
