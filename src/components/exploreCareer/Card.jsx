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
      {sideImage ? (
        // Side-by-side layout for Explore Careers+ card
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 xl:mt-2 text-content-secondary text-m-sm-body">{title}</h2>
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {/* Image Side */}
            <div className="flex-shrink-0">
              <div className="w-[300px] h-[200px] bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-500 text-lg xl:mt-2 text-content-secondary text-m-sm-body">Image Placeholder</div>
                )}
              </div>
            </div>
            {/* Content Side */}
            <div className="flex-1">
              <div className="text-gray-600 leading-relaxed mb-4 xl:mt-2 text-content-secondary text-m-sm-body">
                {typeof description === 'string' ? (
                  <p>{description}</p>
                ) : (
                  description
                )}
              </div>
              {!noButton && buttonText && (
                <div>
                  <button className="px-6 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800 xl:mt-2 text-content-secondary text-m-sm-body cursor-pointer">
                    {buttonText}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        // Original layout for other cards
        <>
          {hasImage ? (
            // Stacked layout for cards with images (image on top, content below)
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900 xl:mt-2 text-content-secondary text-m-sm-body">{title}</h2>
              {/* Image */}
              <div className="w-full mb-4">
                <div className="bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={title}
                      loading="lazy"
                      width="523"
                      height="348"
                      decoding="async"
                      className="block w-full h-auto rounded-lg object-cover"
                      style={{color: 'transparent'}}
                    />
                  ) : (
                    <div className="text-gray-500 text-lg xl:mt-2 text-content-secondary text-m-sm-body">Image Placeholder</div>
                  )}
                </div>
              </div>
              {/* Content */}
              <div className="text-gray-600 leading-relaxed mb-4 xl:mt-2 text-content-secondary text-m-sm-body">
                {typeof description === 'string' ? (
                  <p>{description}</p>
                ) : (
                  description
                )}
              </div>
              {!noButton && buttonText && (
                <div>
                  <button className="px-6 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800 xl:mt-2 text-content-secondary text-m-sm-body">
                    {buttonText}
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Layout for cards without images
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-bold mb-3 text-gray-900 xl:mt-2 text-content-secondary text-m-sm-body">{title}</h2>
                <div className="text-gray-600 leading-relaxed text-sm xl:mt-2 text-content-secondary text-m-sm-body">
                  {typeof description === 'string' ? (
                    <p>{description}</p>
                  ) : (
                    description
                  )}
                </div>
              </div>
              {!noButton && buttonText && (
                <div className="mt-4">
                  <button className="px-6 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800 xl:mt-2 text-content-secondary text-m-sm-body">
                    {buttonText}
                  </button>
                </div>
              )}
            </div>
          )}
        </>
      )}
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