import React from 'react';

const PromotionalBanner: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Red Blob with Image */}
          <div className="relative">
             {/* Abstract Red Shape Background */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-night-red-600 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10 transform -rotate-12"></div>
             
             <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 mb-6">
                  <img 
                    src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Top%20view%20of%20jollof%20rice%20with%20chicken%20in%20a%20black%20bowl%2C%20professional%20food%20photography%2C%20isolated%20on%20transparent%20background&image_size=square" 
                    alt="Delicious Jollof Rice" 
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
                <p className="text-white font-medium text-lg md:text-xl max-w-xs leading-snug">
                  We only offer the best service in town!
                </p>
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