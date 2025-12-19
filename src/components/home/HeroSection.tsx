import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white pt-6 pb-8 md:pt-8 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-night-dark-900 mb-6 tracking-tight">
            Every Delivery to your Doorstep
          </h1>
          
          <p className="text-base md:text-lg text-night-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed">
            Night Crawlers is more than a delivery app—we're a platform built to elevate how people 
            discover, enjoy, and experience food. We combine seamless technology with trusted restaurant 
            partners to bring quality meals closer to you, no matter the hour.
          </p>

          <div className="flex flex-col items-center gap-6">
            <Link to="/categories" className="group flex items-center gap-2 text-night-red-600 font-semibold hover:text-night-red-700 transition-colors">
              Explore Categories here
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <div className="inline-block px-6 py-2 bg-gray-100 rounded-full text-night-gray-600 text-sm font-medium">
              About Night Crawlers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
