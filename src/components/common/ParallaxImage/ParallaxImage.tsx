import React from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  variant?: 'large' | 'xlarge' | 'small';
  className?: string;
}

const variantClassMap = {
  large: '',
  xlarge: 'w-variant-86209fa6-e87a-c7b3-8e83-301d6b75a16f',
  small: 'w-variant-3a91f82f-8d8f-1293-0ee4-e68a3d579240',
};

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  variant = 'large',
  className = '',
}) => {
  const imgClass = `full-parallax-image${variantClassMap[variant] ? ` ${variantClassMap[variant]}` : ''} ${className}`.trim();

  return (
    <div className="full-parallax-wrap">
      <img alt={alt} src={src} loading="lazy" className={imgClass} />
    </div>
  );
};

export default ParallaxImage;
