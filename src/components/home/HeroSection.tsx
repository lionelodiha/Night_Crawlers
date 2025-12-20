import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full max-w-[1032px] mx-auto gap-[50px] mt-[50px]">
      <h1 className="text-[#222222] text-[48px] font-semibold leading-[58px] tracking-[-0.96px] text-center font-poppins m-0">
        Every Delivery to your Doorstep
      </h1>
      
      <p className="text-[#222222] text-[20px] leading-[24px] tracking-[-0.4px] text-center font-poppins w-full max-w-[1032px] m-0">
        Night Crawlers is more than a delivery app—we’re a platform built to elevate
        how people discover, enjoy, and experience food. We combine seamless
        technology with trusted restaurant partners to bring quality meals closer to
        you, no matter the hour.
      </p>

      <div className="flex items-center justify-center">
        <Link to="/categories" className="flex items-center gap-2 text-[#c62222] text-[18px] font-semibold tracking-normal font-poppins hover:underline whitespace-nowrap">
          Explore Categories here
          <ChevronRight className="w-4 h-4" strokeWidth={3} />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
