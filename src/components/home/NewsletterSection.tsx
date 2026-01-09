import React, { useState } from 'react';
import { NewsletterForm } from '../../types';
import subscribeImage from '../../../.figma/image/mje7taht-9jmjknp.png';

const NewsletterSection: React.FC = () => {
  const [formData, setFormData] = useState<NewsletterForm>({
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ email: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Thank you for subscribing!');
      setFormData({ email: '' });
    }, 2000);
  };

  return (
    <section className="flex justify-center w-full py-10 px-4">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-[1200px] bg-white border border-[#e5e7eb] rounded-xl shadow-md px-6 md:px-8 py-8 gap-8 md:gap-10">
        {/* Left Column: Text & Input */}
        <div className="flex flex-col items-start gap-4 w-full lg:w-[420px] text-left">
          <h2 className="text-[#222222] text-2xl sm:text-3xl font-semibold leading-tight tracking-[-0.5px] font-poppins m-0">
            Exclusive Menus & Promotions
          </h2>
          <p className="text-[#222222] text-sm sm:text-base leading-relaxed font-poppins m-0">
            Join the Night Crawlers tribe! Be the first to know about fresh deals, new
            food spots, and exclusive night-time treats.
          </p>
          
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <div className="flex items-center w-full h-11 bg-white border border-[#d0d5dd] rounded-md shadow-[0px_1px_2px_rgba(16,24,40,0.05)] overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="flex-1 h-full px-3 bg-transparent border-none outline-none text-[#667085] text-sm sm:text-base font-poppins placeholder:text-[#667085]"
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="h-full px-4 sm:px-5 bg-[#c62222] text-white text-sm sm:text-base font-medium font-poppins hover:bg-[#a51d1d] transition-colors disabled:opacity-70"
              >
                {isSubmitting ? '...' : 'Subscribe'}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Image */}
        <img 
           src={subscribeImage}
           alt="Delivery Person"
           className="w-full max-w-[220px] sm:max-w-[260px] lg:max-w-[320px] h-auto object-contain self-end lg:ml-auto"
        />
      </div>
    </section>
  );
};

export default NewsletterSection;
