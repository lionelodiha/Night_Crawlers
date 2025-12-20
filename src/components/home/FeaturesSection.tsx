import React from 'react';
import phoneIcon from '../../../.figma/image/mje8rtgf-vds6a68.png';
import deliveryIcon from '../../../.figma/image/mje8rtgg-bjjwlgu.png';
import qualityIcon from '../../../.figma/image/mje8rtgg-m4cr5j7.png';

const FeaturesSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center w-full max-w-[1388px] mx-auto h-auto min-h-[393px] gap-[90px] py-16">
      <div className="flex items-center justify-center w-full">
        <div className="flex items-center justify-center gap-[10px] px-[9px] py-[7px] border border-[#eaecf0] rounded-[50px] bg-[#2e3d860d] h-[36px]">
          <p className="text-[#363838] text-[18px] leading-[27px] tracking-normal font-poppins m-0">
            Our Best Features
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full gap-[60px] md:gap-[203px]">
        {/* Feature 1: Easy to Order */}
        <div className="flex flex-col items-center p-[0px_25px_13px_26px]">
          <div className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-[#e7575742] p-[18px_17px_17px_18px] mb-[20px]">
            <img src={phoneIcon} alt="Easy to Order" className="w-[65px] h-[65px] object-contain" />
          </div>
          <h3 className="text-[#222222] text-[28px] font-semibold leading-[34px] tracking-[-0.56px] font-poppins m-0 text-center">
            Easy to Order
          </h3>
          <p className="text-[#222222] text-[16px] leading-[19px] tracking-[-0.32px] font-poppins text-center w-[275px] mt-[24px]">
            From late-night bites to everyday meals, we deliver fast, fresh, and
            reliably right to your doorstep, no matter the hour.”
          </p>
        </div>

        {/* Feature 2: Fast Delivery */}
        <div className="flex flex-col items-center p-[0px_25px_13px_26px]">
          <div className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-[#e7575742] p-[18px_17px_17px_18px] mb-[20px]">
            <img src={deliveryIcon} alt="Fast Delivery" className="w-[65px] h-[65px] object-contain" />
          </div>
          <h3 className="text-[#222222] text-[28px] font-semibold leading-[34px] tracking-[-0.56px] font-poppins m-0 text-center">
            Fast Delivery
          </h3>
          <p className="text-[#222222] text-[16px] leading-[19px] tracking-[-0.32px] font-poppins text-center w-[275px] mt-[24px]">
            From late-night bites to everyday meals, we deliver fast, fresh, and
            reliably right to your doorstep, no matter the hour.”
          </p>
        </div>

        {/* Feature 3: Best Quality */}
        <div className="flex flex-col items-center p-[0px_25px_13px_26px]">
          <div className="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-[#e7575742] p-[18px_17px_17px_18px] mb-[20px]">
            <img src={qualityIcon} alt="Best Quality" className="w-[65px] h-[65px] object-contain" />
          </div>
          <h3 className="text-[#222222] text-[28px] font-semibold leading-[34px] tracking-[-0.56px] font-poppins m-0 text-center">
            Best Quality
          </h3>
          <p className="text-[#222222] text-[16px] leading-[19px] tracking-[-0.32px] font-poppins text-center w-[275px] mt-[24px]">
            From late-night bites to everyday meals, we deliver fast, fresh, and
            reliably right to your doorstep, no matter the hour.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;