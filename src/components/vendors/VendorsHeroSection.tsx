import React from 'react';
import { useNavigate } from 'react-router-dom';

const VendorsHeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/vendor-signup');
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <section className="relative w-full bg-white pt-[40px] pb-[40px]">
      {/* Breadcrumb/Tag */}
      <div className="flex justify-center mb-[48px]">
        <div className="flex items-center justify-center px-[10px] py-[8px] gap-[10px] bg-[rgba(46,61,134,0.05)] border border-[#EAECF0] rounded-full w-fit">
          <span className="text-[#363838] font-poppins font-normal text-[18px] leading-[27px]">
            Become a Partner
          </span>
        </div>
      </div>

      {/* Main Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-[171px] max-w-[1440px] mx-auto px-[37px] mb-[100px]">
        
        {/* Left Content */}
        <div className="flex flex-col items-start gap-[48px] flex-1 max-w-[570px]">
          
          {/* Heading */}
          <h1 className="font-poppins font-semibold text-[48px] leading-[120%] tracking-[-0.02em] text-[#222222]">
            Partner with us and Become a Vendor
          </h1>

          {/* Description */}
          <p className="font-poppins font-normal text-[20px] leading-[120%] tracking-[-0.02em] text-[#222222] max-w-[570px]">
            Join thousands of restaurants, supermarkets, beauty stores and pharmacies reaching millions of customers daily on Night Crawlers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-[40px] w-full">
            
            {/* Primary CTA */}
            <button
              onClick={handleSignUp}
              className="flex items-center justify-center px-[10px] py-[10px] gap-[10px] w-[191px] h-[41px] bg-[#C62222] rounded-[4px] hover:bg-red-700 transition-all duration-200"
            >
              <span className="font-poppins font-medium text-[14px] leading-[21px] text-[#FCFCFC]">
                Sign up as a Vendor
              </span>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={handleContinueShopping}
              className="flex items-center justify-center px-[10px] py-[10px] gap-[10px] w-[138px] h-[41px] border-[1px] border-[#C62222] rounded-[4px] hover:bg-[#C62222] hover:text-white transition-all duration-200"
            >
              <span className="font-poppins font-medium text-[14px] leading-[21px] text-[#C62222] hover:text-white">
                Log In
              </span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 max-w-[590px] w-full">
          <div
            className="w-full h-[515px] bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 590 515"><rect fill="%23f0f0f0" width="590" height="515"/><text x="50%" y="50%" font-family="Arial" font-size="24" fill="%23999" text-anchor="middle" dy=".3em">Indian Butter Chicken</text></svg>')`,
            }}
          />
        </div>
      </div>

      {/* Underline Accent */}
      <div className="flex justify-center mb-[100px]">
        <div className="w-[89px] h-[12px] border-b-[2px] border-[#C62222]"></div>
      </div>
    </section>
  );
};

export default VendorsHeroSection;
