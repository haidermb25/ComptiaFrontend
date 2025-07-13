"use client";
import React from 'react';

const CareerCard = ({
  title,
  description,
  buttonText,
  noButton = false,
  hasImage = false,
  imageUrl = '',
  isSpecialCard = false,
  sideImage = false,
}) => {
  return (
    <div className="h-full flex flex-col">
      {sideImage ? (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>
          <div className="flex flex-col lg:flex-row gap-6 items-start">
            {hasImage && (
              <div className="flex-shrink-0">
                <div className="w-[300px] h-[200px] bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-gray-500 text-lg">Image Placeholder</div>
                  )}
                </div>
              </div>
            )}
            <div className="flex-1">
              <div className="text-gray-600 leading-relaxed mb-4">
                {typeof description === 'string' ? (
                  <p>{description}</p>
                ) : (
                  description
                )}
              </div>
              {!noButton && buttonText && (
                <button className="px-6 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800">
                  {buttonText}
                </button>
              )}
            </div>
          </div>
        </div>
      ) : hasImage ? (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">{title}</h2>
          <div className="w-full mb-4">
            <div className="bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={title}
                  loading="lazy"
                  className="block w-full h-auto rounded-lg object-cover"
                />
              ) : (
                <div className="text-gray-500 text-lg">Image Placeholder</div>
              )}
            </div>
          </div>
          <div className="text-gray-600 leading-relaxed mb-4">
            {typeof description === 'string' ? (
              <p>{description}</p>
            ) : (
              description
            )}
          </div>
          {!noButton && buttonText && (
            <button className="px-6 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800">
              {buttonText}
            </button>
          )}
        </div>
      ) : (
        <div className="p-6 h-full flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-3 text-gray-900">{title}</h2>
            <div className="text-gray-600 leading-relaxed text-sm">
              {typeof description === 'string' ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </div>
          </div>
          {!noButton && buttonText && (
            <div className="mt-4">
              <button className="px-6 py-2 border border-red-700 bg-red-700 text-white rounded-full font-medium transition-colors duration-200 hover:bg-red-800 hover:border-red-800">
                {buttonText}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CareerCard;