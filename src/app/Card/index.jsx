/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Card = ({ title, image }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md relative">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-50 text-white">
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
