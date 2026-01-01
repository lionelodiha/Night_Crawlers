import React from 'react';
import blobSvg from '../../../.figma/image/mjcs0hhd-e552yif.svg';
import bowlPng from '../../../.figma/image/mjcs0hhx-rdln25f.png';

const PromotionalBanner: React.FC = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Red Blob with Image (Figma exact assets) */}
          <div className="relative w-full max-w-[723px] h-auto min-h-[300px] lg:h-[467px] mx-auto lg:mx-0">
            <div className="relative scale-75 lg:scale-85 transform" style={{ transformOrigin: 'center' }}>
              <img src={blobSvg} alt="red vector" className="relative w-full h-auto max-w-[723px] max-h-[467px] z-0" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <img src={bowlPng} alt="bowl" className="w-48 h-48 sm:w-56 sm:h-56 lg:w-[368px] lg:h-[368px] object-contain" />
                  <div className="absolute text-white font-medium text-center px-4" 
                       style={{ 
                         top: '60%', 
                         left: '50%', 
                         transform: 'translate(-50%, -50%)',
                         width: 'auto',
                         maxWidth: '200px',
                         fontSize: 'clamp(14px, 2.5vw, 18px)'
                       }}>
                    We only offer the best service in town!
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="lg:pl-4 lg:pl-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-night-dark-900 mb-4 md:mb-6 leading-tight">
              Redefining Convenience,<br />
              One Delivery at a Time.
            </h2>
            <p className="text-night-gray-500 text-sm md:text-base lg:text-lg leading-relaxed mb-4 md:mb-6">
              Night Crawlers is more than a delivery app—we're a platform built to 
              elevate how people discover, enjoy, and experience food. We combine 
              seamless technology with trusted restaurant partners to bring quality 
              meals closer to you, no matter the hour.
            </p>
            <p className="text-night-gray-500 text-sm md:text-base lg:text-lg leading-relaxed">
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
