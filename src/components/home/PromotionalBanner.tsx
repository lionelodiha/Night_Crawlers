import React from 'react';
import blobSvg from '../../../.figma/image/mjcs0hhd-e552yif.svg';
import bowlPng from '../../../.figma/image/mjcs0hhx-rdln25f.png';

const PromotionalBanner: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white overflow-hidden">
      <div className="mx-auto w-full max-w-[1391px] px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[57px]">
          <div className="relative w-full lg:w-[723px]">
            <img src={blobSvg} alt="red vector" className="w-full h-auto" />

            <div className="absolute inset-0 flex items-center justify-between px-[8%] pb-[5%]">
              <div className="relative w-[55%] h-full flex items-center justify-center">
                <img
                  src={bowlPng}
                  alt="bowl"
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </div>
              <div className="relative w-[40%] flex items-center translate-y-8 sm:translate-y-10 lg:translate-y-20">
                <p className="text-white font-medium leading-[18px] sm:leading-[22px] lg:leading-[26px] text-[12px] sm:text-[16px] lg:text-[20px] tracking-[-0.02em] font-poppins m-0">
                  We only offer the best service in town!
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 lg:gap-[48px] w-full lg:w-[611px]">
            <h2 className="text-[#222222] text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-[36px] sm:leading-[44px] lg:leading-[58px] tracking-[-0.02em] font-poppins m-0">
              Redefining Convenience, One Delivery at a Time.
            </h2>
            <p className="text-[#222222] text-[14px] sm:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[22px] lg:leading-[24px] tracking-[-0.02em] font-poppins m-0">
              Night Crawlers is more than a delivery app - we're a platform built to elevate how people discover, enjoy, and experience food. We combine seamless technology with trusted restaurant partners to bring quality meals closer to you, no matter the hour. From everyday favorites to late-night cravings, we make ordering effortless and satisfying, with fast delivery and a user experience designed around your comfort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
