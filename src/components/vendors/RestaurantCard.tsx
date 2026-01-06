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
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
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
          <span className="inline-block px-3 py-1 text-xs font-medium text-night-red-600 bg-red-50 rounded-full">
            Manage
          </span>
        </div>

        {/* Address */}
        <div className="flex items-start gap-2 mb-3">
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
          <p className="text-sm text-gray-600">
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

      {/* Action Button */}
      {onManage && (
        <div className="px-4 pb-4">
          <button
            onClick={() => onManage(restaurant.id)}
            className="w-full py-2 px-4 text-sm font-medium text-night-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
          >
            Manage Restaurant
          </button>
        </div>
      )}
    </div>
  );
};

export default RestaurantCard;
