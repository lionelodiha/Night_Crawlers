import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full max-w-[1032px] mx-auto gap-8 sm:gap-[50px] mt-10 sm:mt-14 lg:mt-[60px] px-4">
      <h1 className="text-[#222222] text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[40px] sm:leading-[52px] lg:leading-[58px] tracking-[-0.02em] text-center font-poppins m-0 max-w-[729px]">
        Every Delivery to your Doorstep
      </h1>
      <p className="text-[#222222] text-[14px] sm:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[24px] tracking-[-0.02em] text-center font-poppins w-full max-w-[1032px] m-0 px-4 sm:px-0">
        Night Crawlers is more than a delivery app - we're a platform built to elevate how people discover, enjoy, and experience food. We combine seamless technology with trusted restaurant partners to bring quality meals closer to you, no matter the hour.
      </p>
      <div className="flex items-center justify-center">
        <Link to="/explore" className="flex items-center gap-2 text-[#c62222] text-[16px] sm:text-[18px] lg:text-[20px] font-semibold tracking-normal font-poppins hover:underline whitespace-nowrap">
          Explore Categories here
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
