import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { VENDORS } from '../../utils/constants';

const VendorShowcase: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-bold text-night-dark-900 leading-tight">
              Order Tasty Meals<br />
              through us
            </h2>
          </div>
          <Link to="/vendors" className="mt-4 md:mt-0 group flex items-center gap-1 text-night-red-600 font-semibold hover:text-night-red-700 transition-colors">
            Explore all Restaurants
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Vendor Grid - 3 top, 2 bottom centered layout */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 max-w-5xl mx-auto">
          {VENDORS.map((vendor) => (
            <div key={vendor.id} className="flex flex-col items-center group cursor-pointer w-[140px] md:w-[180px]">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 shadow-sm group-hover:scale-105 transition-transform duration-300 border border-gray-100">
                <img
                  src={vendor.logo}
                  alt={vendor.altText}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base md:text-lg font-medium text-night-dark-900 text-center group-hover:text-night-red-600 transition-colors">
                {vendor.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VendorShowcase;