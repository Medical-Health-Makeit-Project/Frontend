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
        ${
          size === 'sm'
            ? 'sm'
            : size === 'md'
            ? 'md'
            : size === 'lg'
            ? 'lg'
            : ''
        }
      } icon`}
    >
      {children}
    </div>
  );
});

Icon.propTypes = {
  color: PropTypes.oneOf([
    'regular',
    'info',
    'danger',
    'warning',
    'success',
    'transpaerent',
  ]),
  size: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Icon.defaultProps = {
  color: 'regular',
  size: 'md',
};
