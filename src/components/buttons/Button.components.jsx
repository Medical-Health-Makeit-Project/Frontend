import { forwardRef } from 'react';
import './button.components.scss';

const buttonVariant = {
  solid: 'solid',
  outline: 'outline',
};
export const Button = forwardRef(function Button(
  { variant = buttonVariant.solid, color, children, className, ...props },
  ref
) {
  return (
    <button
      type="button"
      disabled={props.disabled}
      {...props}
      ref={ref}
      className={`${className} ${
        variant === buttonVariant.solid
          ? color === 'info'
            ? 'solid-info'
            : color === 'danger'
            ? 'solid-danger'
            : color === 'success'
            ? 'solid-success'
            : color === 'warning'
            ? 'solid-warning'
            : color === 'light'
            ? 'solid-light'
            : ''
          : variant === buttonVariant.outline
          ? color === 'info'
            ? 'outline-info'
            : color === 'danger'
            ? 'outline-danger'
            : color === 'success'
            ? 'outline-success'
            : color === 'warning'
            ? 'outline-warning'
            : ''
          : ''
      } button`}
    >
      {children}
    </button>
  );
});
