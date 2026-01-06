import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full max-w-[1032px] mx-auto gap-8 sm:gap-12 mt-8 sm:mt-12 px-4">
      <h1 className="text-[#222222] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-[58px] tracking-[-0.96px] text-center font-poppins m-0">
        Every Delivery to your Doorstep
      </h1>
      <p className="text-[#222222] text-base sm:text-lg lg:text-xl leading-relaxed sm:leading-[24px] tracking-[-0.4px] text-center font-poppins w-full max-w-[1032px] m-0 px-4 sm:px-0">
        Night Crawlers is more than a delivery app—we're a platform built to elevate
        how people discover, enjoy, and experience food.
      </p>
      <div className="flex items-center justify-center">
        <Link to="/explore" className="flex items-center gap-2 text-[#c62222] text-base sm:text-lg font-semibold tracking-normal font-poppins hover:underline whitespace-nowrap">
          Explore Categories here
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
