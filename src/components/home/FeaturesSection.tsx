import React from 'react';
import { FEATURES } from '../../utils/constants';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 border border-gray-200 text-night-gray-600 rounded-full text-sm font-medium">
            Our Best Features
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-night-red-50 flex items-center justify-center mb-6 text-night-red-500">
                {/* Clone the icon element to add specific classes if needed, or rely on the prop */}
                <div className="scale-75 transform">
                   {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-night-dark-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-night-gray-500 leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;