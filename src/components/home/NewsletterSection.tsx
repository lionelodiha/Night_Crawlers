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
    <section className="flex justify-center w-full py-12 lg:py-16 px-4">
      <div className="flex flex-col lg:flex-row items-center w-full max-w-6xl h-auto lg:h-[442px] px-6 py-10 lg:py-0 lg:px-7 bg-[#f9fafb0d] border border-[#eaecf0] rounded-xl lg:rounded-[10px] shadow-[4px_4px_15px_2px_rgba(168,166,166,0.32)] overflow-hidden gap-8 lg:gap-[392px]">
        {/* Left Column: Text & Input */}
        <div className="flex flex-col items-start gap-6 w-full lg:w-[448px] text-center lg:text-left">
          <h2 className="text-[#222222] text-2xl sm:text-3xl lg:text-[48px] font-semibold leading-tight lg:leading-[58px] tracking-[-0.96px] font-poppins m-0">
            Exclusive Menus & Promotions
          </h2>
          <p className="text-[#222222] text-sm lg:text-[16px] leading-relaxed lg:leading-[19px] tracking-[-0.32px] font-poppins m-0">
            Join the Night Crawlers tribe! Be the first to know about fresh deals, new
            food spots, and exclusive night-time treats.
          </p>
          
          <form onSubmit={handleSubmit} className="w-full max-w-md lg:max-w-none">
            <div className="flex items-center justify-between w-full h-12 lg:h-[50px] bg-white border border-[#d0d5dd] rounded-lg lg:rounded-[4px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] pl-3 lg:pl-[13px] pr-0 overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="flex-1 bg-transparent border-none outline-none text-[#667085] text-sm lg:text-[16px] leading-[24px] font-poppins placeholder:text-[#667085] h-full"
              />
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="flex items-center justify-center w-24 lg:w-[103px] h-full bg-[#c62222] text-[#fcfcfc] text-sm lg:text-[16px] font-medium leading-[24px] font-poppins cursor-pointer hover:bg-[#a51d1d] transition-colors disabled:opacity-70"
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
           className="w-full max-w-xs sm:max-w-sm lg:w-[442px] h-auto lg:h-[442px] flex-shrink-0 object-contain mt-6 lg:mt-0"
        />
      </div>
    </section>
  );
};

export default NewsletterSection;