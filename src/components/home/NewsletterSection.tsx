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
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full max-w-[1362px] min-h-[442px] bg-[rgba(249,250,251,0.05)] border border-[#EAECF0] rounded-[10px] shadow-[4px_4px_15px_2px_rgba(168,166,166,0.32)] px-6 md:px-8 lg:px-[29px] py-8 gap-8 lg:gap-[80px]">
        <div className="flex flex-col items-start gap-4 w-full lg:w-[470px] text-left">
          <h2 className="text-[#222222] text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-[36px] sm:leading-[44px] lg:leading-[58px] tracking-[-0.02em] font-poppins m-0">
            Exclusive Menus & Promotions
          </h2>
          <p className="text-[#222222] text-[14px] sm:text-[16px] leading-[18px] sm:leading-[19px] tracking-[-0.02em] font-poppins m-0">
            Join the Night Crawlers tribe! Be the first to know about fresh deals, new food spots, and exclusive night-time treats.
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-[470px]">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center w-full gap-2 sm:gap-0 sm:h-[44px] sm:pl-2 sm:pr-1 sm:bg-white sm:border sm:border-[#D0D5DD] sm:rounded-[4px] sm:shadow-[0px_1px_2px_rgba(16,24,40,0.05)]">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="h-[44px] sm:h-full flex-1 px-4 sm:px-2 bg-white sm:bg-transparent border border-[#D0D5DD] sm:border-0 rounded-[4px] sm:rounded-none outline-none text-[#667085] text-[14px] sm:text-[16px] font-poppins placeholder:text-[#667085]"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="h-[44px] sm:h-[36px] w-full sm:w-auto px-6 sm:px-4 bg-[#C62222] text-white text-[14px] sm:text-[14px] font-medium font-poppins rounded-[4px] hover:bg-[#A01B1B] transition-colors disabled:opacity-70 shrink-0"
              >
                {isSubmitting ? '...' : 'Subscribe'}
              </button>
            </div>
          </form>
        </div>

        <img
          src={subscribeImage}
          alt="Delivery person"
          className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[442px] h-auto lg:h-[442px] object-contain"
        />
      </div>
    </section>
  );
};

export default NewsletterSection;
