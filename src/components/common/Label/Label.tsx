import React from 'react';

interface LabelProps {
  parts: string[];
  variant?: 'dark' | 'light';
}

const Label: React.FC<LabelProps> = ({ parts, variant = 'light' }) => {
  const labelWrapClass =
    variant === 'dark'
      ? 'label-wrap w-variant-51d51728-fe69-730d-e99c-5fd5218dc070'
      : 'label-wrap';

  const labelTextClass =
    variant === 'dark'
      ? 'label-text w-variant-51d51728-fe69-730d-e99c-5fd5218dc070'
      : 'label-text';

  return (
    <div className="label">
      {parts.map((text, i) => (
        <div key={i} className={`${labelWrapClass}${i > 0 ? ' is-2nd' : ''}`}>
          <div className={labelTextClass}>{text}</div>
        </div>
      ))}
    </div>
  );
};

export default Label;
