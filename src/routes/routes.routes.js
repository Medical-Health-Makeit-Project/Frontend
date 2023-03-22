export const PublicRoutes = {
  HOME: '/home',
  LOGIN: '/home/login',
  REGISTER: '/home/register',
  DOCTORS: '/home/our-doctors/*',
  DOCTOR_DETAIL: '/:id',
  UNAUTHORIZED: '/home/unauthorized',
  USER_PROFILE: '/home/profile',
};

export const PrivateRoutes = {
  SHOP: '/home/shop',
  CATEGORY: '/home/shop/:category',
  CHECKOUT: '/home/checkout',
  PAYMENT: '/home/payment',
};
