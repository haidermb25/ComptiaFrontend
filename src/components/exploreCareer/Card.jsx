"use client";
import React from 'react';
import CareerCard from '@/components/shared/eachTypeCards/careerCards';

const Card = ({
  title,
  description,
  buttonText,
  width = 'w-full',
  height = 'h-auto',
  noButton = false,
  fullWidthContent = false,
  hasImage = false,
  imageUrl = '',
  isSpecialCard = false,
  sideImage = false,
}) => {
  return (
    <div className={`${width} ${height} bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200`}>
      <CareerCard
        title={title}
        description={description}
        buttonText={buttonText}
        noButton={noButton}
        hasImage={hasImage}
        imageUrl={imageUrl}
        isSpecialCard={isSpecialCard}
        sideImage={sideImage}
      />
    </div>
  );
};

export default Card;