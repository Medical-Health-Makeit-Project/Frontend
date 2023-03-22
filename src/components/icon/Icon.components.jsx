import { forwardRef } from 'react';
import './icon.components.scss';
import { PropTypes } from 'prop-types';

const colorVariant = {
  regular: 'regular',
  info: 'info',
  danger: 'danger',
  warning: 'warning',
  success: 'success',
  transparent: 'transparent',
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
          : color === 'transparent'
          ? colorVariant.transparent
          : ''
      }
        ${size === 'sm' ? 'sm' : size === 'md' ? 'md' : size === 'lg' ? 'lg' : ''}
      } icon`}
    >
      {children}
    </div>
  );
});

/*
  The color based on one kind of alert who the dev want to show at user
*/
Icon.propTypes = {
  color: PropTypes.oneOf(['regular', 'info', 'danger', 'warning', 'success', 'transparent']),
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

/**
 *there is 3 props with default this default values
 */
Icon.defaultProps = {
  color: 'regular',
  size: 'md',
  className: '',
  children: '',
};
