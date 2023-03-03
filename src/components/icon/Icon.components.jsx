import { forwardRef } from 'react';
import './icon.components.scss';

const colorVariant = {
  regular: 'regular',
  info: 'info',
  danger: 'danger',
  warning: 'warning',
  success: 'success',
};

export const Icon = forwardRef(function Icon(
  { color = colorVariant.regular, size = 'md', children, className, ...props },
  ref
) {
  return (
    <div
      {...props}
      ref={ref}
      className={`${className} ${
        color === 'regular'
          ? colorVariant.regular
          : color === 'info'
          ? colorVariant.info
          : color === 'danger'
          ? colorVariant.danger
          : color === 'warning'
          ? colorVariant.danger
          : color === 'success'
          ? colorVariant.success
          : ''
      }
        ${size === 'sm' ? 'sm' : size === 'md' ? 'md' : size === 'lg' ? 'lg' : ''}
      } icon`}
    >
      {children}
    </div>
  );
});
