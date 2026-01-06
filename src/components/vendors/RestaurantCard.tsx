import React from 'react';
import { Restaurant } from '../../types';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onManage?: (id: string) => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ 
  restaurant, 
  onManage 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200">
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-200">
        <img
          src={restaurant.coverImage}
          alt={restaurant.altText}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {restaurant.name}
          </h3>
          <span className="inline-block px-2 py-1 text-[11px] font-medium text-[#E76B6B] bg-[#FFF0F0] rounded-md">
            {restaurant.categories && restaurant.categories.length > 0 ? restaurant.categories[0] : 'Amala'}
          </span>
        </div>

        {/* Address */}
        <div className="flex items-start gap-2 mb-3 text-sm text-gray-600">
          <svg
            className="w-4 h-4 mt-0.5 text-gray-500 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p>
            {restaurant.address}
          </p>
        </div>

        {/* Description */}
        {restaurant.description && (
          <p className="text-sm text-gray-600 line-clamp-2">
            {restaurant.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
