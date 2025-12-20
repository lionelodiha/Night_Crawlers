import React from 'react';
import blobSvg from '../../../.figma/image/mjcs0hhd-e552yif.svg';
import bowlPng from '../../../.figma/image/mjcs0hhx-rdln25f.png';

const PromotionalBanner: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Red Blob with Image (Figma exact assets) */}
          <div className="relative w-[723px] h-[467px]">
            <div className="relative" style={{ transform: 'scale(0.85)', transformOrigin: 'left center' }}>
              <img src={blobSvg} alt="red vector" className="absolute top-0 left-0 w-[723px] h-[467px] z-0" />
              <img src={bowlPng} alt="bowl" className="absolute" style={{ top: 44, left: 19, width: 368, height: 368 }} />
              <div className="absolute text-white font-medium" style={{ top: 241, left: 387, width: 276 }}>
                We only offer the best service in town!
              </div>
              <div className="relative w-[723px] h-[467px]" />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:pl-10">
            <h2 className="text-3xl md:text-4xl font-bold text-night-dark-900 mb-6 leading-tight">
              Redefining Convenience,<br />
              One Delivery at a Time.
            </h2>
            <p className="text-night-gray-500 text-base md:text-lg leading-relaxed mb-6">
              Night Crawlers is more than a delivery app—we're a platform built to 
              elevate how people discover, enjoy, and experience food. We combine 
              seamless technology with trusted restaurant partners to bring quality 
              meals closer to you, no matter the hour.
            </p>
            <p className="text-night-gray-500 text-base md:text-lg leading-relaxed">
              From everyday favorites to late-night cravings, we make ordering 
              effortless and satisfying, with fast delivery and a user experience 
              designed around your comfort.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PromotionalBanner;
