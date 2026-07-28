import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  external?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  href,
  variant = 'primary',
  children,
  external = false,
  ariaLabel,
}) => {
  const variantClass =
    variant === 'secondary'
      ? 'button w-variant-55bff964-60aa-df6f-b862-bd5e5ff176e0 w-inline-block'
      : 'button w-inline-block';

  const iconBgClass =
    variant === 'secondary'
      ? 'button-icon-bg w-variant-55bff964-60aa-df6f-b862-bd5e5ff176e0'
      : 'button-icon-bg';

  const bgAnimClass =
    variant === 'secondary'
      ? 'button-bg-animation w-variant-55bff964-60aa-df6f-b862-bd5e5ff176e0'
      : 'button-bg-animation';

  const arrowSrc =
    variant === 'secondary'
      ? '/images/69e7c7b0c8b5b85fe79564d2_arrow-right.svg'
      : '/images/69e7c7b0c8b5b85fe79564cd_arrow-dark-5.svg';

  const inner = (
    <>
      {children}
      <div className="button-icon-wrap">
        <img src={arrowSrc} loading="lazy" alt="Button icon" className="button-icon" />
        <div className={iconBgClass}></div>
      </div>
      <div className={bgAnimClass}></div>
    </>
  );

  if (external) {
    return (
      <a href={href} className={variantClass} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  return (
    <Link to={href} className={variantClass} aria-label={ariaLabel}>
      {inner}
    </Link>
  );
};

export default Button;
