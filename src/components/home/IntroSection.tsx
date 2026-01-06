import React from 'react';
import hero2Image from '../../../.figma/image/mje7na9d-ei1m5xv.png';

const IntroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full max-w-[1386px] mx-auto h-auto min-h-[400px] lg:min-h-[676px] gap-12 lg:gap-[90px] py-12 lg:py-16 px-4">
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-center gap-2 sm:gap-[10px] px-3 sm:px-[9px] py-2 sm:py-[7px] border border-[#eaecf0] rounded-full sm:rounded-[50px] bg-[#2e3d860d]">
          <p className="text-[#363838] text-sm sm:text-[18px] leading-relaxed sm:leading-[27px] tracking-normal font-poppins m-0">
            About Night Crawlers
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-4 lg:px-8 gap-8 lg:gap-0">
        <div className="flex flex-col items-start gap-8 lg:gap-[48px] w-full lg:w-auto">
          <h2 className="text-[#222222] text-2xl sm:text-3xl lg:text-[48px] font-semibold leading-tight sm:leading-[40px] lg:leading-[58px] tracking-[-0.96px] font-poppins w-full lg:w-[590px] m-0">
            Redefining Convenience, One Delivery at a Time.
          </h2>
          <div className="flex flex-col gap-4 lg:gap-6 w-full lg:w-[674px]">
            <p className="text-[#222222] text-base sm:text-lg lg:text-[20px] leading-relaxed sm:leading-[22px] lg:leading-[24px] tracking-[-0.4px] font-poppins m-0">
              Night Crawlers is more than a delivery app—we're a platform built to
              elevate how people discover, enjoy, and experience food. We combine
              seamless technology with trusted restaurant partners to bring quality
              meals closer to you, no matter the hour.
            </p>
            <p className="text-[#222222] text-base sm:text-lg lg:text-[20px] leading-relaxed sm:leading-[22px] lg:leading-[24px] tracking-[-0.4px] font-poppins m-0">
              From everyday favorites to late-night cravings, we make ordering
              effortless and satisfying, with fast delivery and a user experience
              designed around your comfort. Our mission is to set a new standard for
              speed, reliability, and taste—helping you enjoy the meals you love with
              zero stress and total convenience.
            </p>
            <p className="text-[#222222] text-base sm:text-lg lg:text-[20px] leading-relaxed sm:leading-[22px] lg:leading-[24px] tracking-[-0.4px] font-poppins m-0">
              At Night Crawlers, we're committed to empowering local food businesses,
              supporting innovation, and delivering joy with every order. Your hunger
              inspires us; your satisfaction drives us.
            </p>
          </div>
        </div>
        <img src={hero2Image} alt="Delicious meal plate" className="w-full max-w-[400px] lg:w-[543px] h-auto lg:h-[543px] object-contain flex-shrink-0 mt-8 lg:mt-0" />
      </div>
    </section>
  );
};

export default IntroSection;
