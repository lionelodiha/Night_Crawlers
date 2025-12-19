import React from 'react';

const IntroSection: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
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
            <p className="text-night-gray-500 text-base md:text-lg leading-relaxed mb-6">
              From everyday favorites to late-night cravings, we make ordering 
              effortless and satisfying, with fast delivery and a user experience 
              designed around your comfort. Our mission is to set a new standard for 
              speed, reliability, and taste—helping you enjoy the meals you love 
              with zero stress and total convenience.
            </p>
            <p className="text-night-gray-500 text-base md:text-lg leading-relaxed">
              At Night Crawlers, we're committed to empowering local food 
              businesses, supporting innovation, and delivering joy with every 
              order. Your hunger inspires us; your satisfaction drives us.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg aspect-square">
              <img
                src="https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=Top%20down%20view%20of%20a%20delicious%20gourmet%20meal%20on%20a%20round%20white%20plate%2C%20healthy%20food%2C%20grilled%20chicken%2C%20vegetables%2C%20professional%20food%20photography%2C%20isolated%20on%20white%20background&image_size=square"
                alt="Delicious meal plate"
                className="w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
