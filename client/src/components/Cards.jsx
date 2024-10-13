import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="w-1/2 mb-8 p-4 mx-4 flex flex-col shadow-custom">
      {children}
    </div>
  );
};

export default Card;