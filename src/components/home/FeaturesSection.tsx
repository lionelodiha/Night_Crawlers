import React from 'react';
import phoneIcon from '../../../.figma/image/mje8rtgf-vds6a68.png';
import deliveryIcon from '../../../.figma/image/mje8rtgg-bjjwlgu.png';
import qualityIcon from '../../../.figma/image/mje8rtgg-m4cr5j7.png';

const FeaturesSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full max-w-[1388px] mx-auto h-auto min-h-[300px] lg:min-h-[393px] gap-12 lg:gap-[90px] py-12 lg:py-16 px-4">
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-center gap-2 lg:gap-[10px] px-4 lg:px-[9px] py-2 lg:py-[7px] border border-[#EAECF0] rounded-full lg:rounded-[50px] bg-[#2e3d860d] h-auto lg:h-[36px]">
          <p className="text-[#363838] text-sm lg:text-[18px] leading-[22px] lg:leading-[27px] tracking-normal font-poppins m-0">
            Our features
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center w-full gap-8 md:gap-[60px] lg:gap-[203px]">
        {/* Feature 1: Easy to Order */}
        <div className="flex flex-col items-center p-4 lg:p-[0px_25px_13px_26px]">
          <div className="flex items-center justify-center w-20 h-20 lg:w-[100px] lg:h-[100px] rounded-full bg-[#e7575742] p-4 lg:p-[18px_17px_17px_18px] mb-5 lg:mb-[20px]">
            <img src={phoneIcon} alt="Easy to Order" className="w-12 h-12 lg:w-[65px] lg:h-[65px] object-contain" />
          </div>
          <h3 className="text-[#222222] text-xl lg:text-[28px] font-semibold leading-[28px] lg:leading-[34px] tracking-[-0.02em] font-poppins m-0 text-center">
            Easy to Order
          </h3>
          <p className="text-[#222222] text-sm lg:text-[16px] leading-[18px] lg:leading-[19px] tracking-[-0.02em] font-poppins text-center w-full lg:w-[275px] mt-4 lg:mt-[24px] px-4 lg:px-0">
            From late-night bites to everyday meals, we deliver fast, fresh, and reliably right to your doorstep, no matter the hour.
          </p>
        </div>

        {/* Feature 2: Fast Delivery */}
        <div className="flex flex-col items-center p-4 lg:p-[0px_25px_13px_26px]">
          <div className="flex items-center justify-center w-20 h-20 lg:w-[100px] lg:h-[100px] rounded-full bg-[#e7575742] p-4 lg:p-[18px_17px_17px_18px] mb-5 lg:mb-[20px]">
            <img src={deliveryIcon} alt="Fast Delivery" className="w-12 h-12 lg:w-[65px] lg:h-[65px] object-contain" />
          </div>
          <h3 className="text-[#222222] text-xl lg:text-[28px] font-semibold leading-[28px] lg:leading-[34px] tracking-[-0.02em] font-poppins m-0 text-center">
            Fast Delivery
          </h3>
          <p className="text-[#222222] text-sm lg:text-[16px] leading-[18px] lg:leading-[19px] tracking-[-0.02em] font-poppins text-center w-full lg:w-[275px] mt-4 lg:mt-[24px] px-4 lg:px-0">
            From late-night bites to everyday meals, we deliver fast, fresh, and reliably right to your doorstep, no matter the hour.
          </p>
        </div>

        {/* Feature 3: Best Quality */}
        <div className="flex flex-col items-center p-4 lg:p-[0px_25px_13px_26px]">
          <div className="flex items-center justify-center w-20 h-20 lg:w-[100px] lg:h-[100px] rounded-full bg-[#e7575742] p-4 lg:p-[18px_17px_17px_18px] mb-5 lg:mb-[20px]">
            <img src={qualityIcon} alt="Best Quality" className="w-12 h-12 lg:w-[65px] lg:h-[65px] object-contain" />
          </div>
          <h3 className="text-[#222222] text-xl lg:text-[28px] font-semibold leading-[28px] lg:leading-[34px] tracking-[-0.02em] font-poppins m-0 text-center">
            Best Quality
          </h3>
          <p className="text-[#222222] text-sm lg:text-[16px] leading-[18px] lg:leading-[19px] tracking-[-0.02em] font-poppins text-center w-full lg:w-[275px] mt-4 lg:mt-[24px] px-4 lg:px-0">
            From late-night bites to everyday meals, we deliver fast, fresh, and reliably right to your doorstep, no matter the hour.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
