import React from 'react';

const InteractiveMasterplanMap: React.FC = () => {
  return (
    <div className="masterplan-interactive_container">
      <div className="masterplan-image-wrapper">
        <img
          src="/images/masterplan-location-map-black.jpg"
          alt="Future City Masterplan Location Map"
          className="masterplan-image-display"
        />
      </div>
    </div>
  );
};

export default InteractiveMasterplanMap;
