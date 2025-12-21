import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

import minusIcon from '../assets/faq/minus.png';
import plusIcon from '../assets/faq/plus.png';
import aboutIcon from '../assets/faq/about2.png';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="min-h-screen bg-white flex flex-col font-poppins overflow-x-hidden">
      <Header />

      {/* Top spacing per Figma */}
      <main className="flex-1 w-full max-w-[1440px] mx-auto pt-[59px] pb-0">
        {/* Hero (without extra logo/underline) */}
        <div className="relative mt-[54px] ml-[289px] w-[863px] h-[191px]">
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-[20px]">
            <div className="inline-flex items-center justify-center gap-[10px] mx-[399px] border border-[#EAECF0] rounded-[50px] bg-[#2E3D860D] px-[9px] py-[7px]">
              <p className="leading-[27px] text-[#363838] text-[18px]">FAQs</p>
            </div>
            <p className="text-center leading-[58px] tracking-[-0.96px] text-[#222222] text-[48px] font-semibold">Questions we Frequently get</p>
            <p className="w-[768px] h-[30px] text-center leading-[30px] text-[#667085] text-[20px]">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
          </div>
        </div>

        {/* Content */}
        <div className="flex justify-between mt-[72px] mx-[41px] min-w-[1358px]">
          {/* Left categories */}
          <div className="flex flex-col items-start mt-[1px] gap-[40px]">
            <p className="text-[#C62222] text-[24px] font-semibold leading-[24px]">Categories</p>
            <div className="flex flex-col items-center gap-[24px] w-[307px]">
              <p className="w-[307px] h-[41px] px-[17px] pt-[9px] pb-[8px] leading-[24px] text-[#222222] text-[16px] font-medium border-l-2 border-[#C62222]">General Information</p>
              <p className="w-[307px] h-[41px] px-[17px] pt-[6px] pb-[5px] leading-[30px] text-[#667085] text-[16px]">Purchasing & Payment</p>
              <p className="w-[307px] h-[41px] px-[17px] pt-[6px] pb-[5px] leading-[30px] text-[#667085] text-[16px]">Customer Support&nbsp;</p>
              <p className="w-[307px] h-[41px] px-[17px] pt-[6px] pb-[5px] leading-[30px] text-[#667085] text-[16px]">Resources</p>
            </div>

            {/* Support prompt - Qst title container */}
            <div className="w-[309px] flex flex-col items-start gap-[12px] mt-[32px] mb-[24px]">
              <div className="inline-flex items-center gap-[16px]">
                <img src={aboutIcon} alt="icon" className="w-[24px] h-[24px]" />
                <p className="text-[#222222] text-[20px] font-medium leading-[30px]">Still have a question?</p>
              </div>
              <p className="w-[309px] h-[18px] leading-[18px] text-[#667085] text-[12px]">If you didn’t find your answer, feel free to reach out.</p>
              <p className="w-[309px] h-[24px] leading-[24px] text-[#C62222] text-[16px] underline">Contact us</p>
            </div>
          </div>

          {/* Right FAQ list */}
          <div className="flex flex-col items-center w-[768px]">
            {/* Item 0 - expanded */}
            <div className="relative flex flex-col items-start border border-[#C62222] rounded-[4px] px-[12px] py-[14px] w-[769px] h-[111px]">
              <div className="inline-flex items-center justify-between w-full pr-[2px]">
                <p className="w-[195px] leading-[30px] text-[#101828] text-[14px] font-medium">What is Night Crawlers</p>
                <div className="flex items-center justify-center rounded-full bg-[#EAECF0] w-[20px] h-[20px]">
                  <img src={minusIcon} alt="minus" className="w-[12px] h-[12px]" />
                </div>
              </div>
              <p className="absolute top-[46px] left-[12px] w-[434px] h-[36px] leading-[18px] text-[#667085] text-[12px]">Purchasing & Payment We’d love to hear from you. Please fill out this form or shoot us an email.</p>
            </div>

            {/* Items 1-3 collapsed */}
            {[1,2,3].map((idx) => (
              <div key={idx} className="flex items-center justify-end gap-[530px] mt-[30px] mb-[20px] mr-[-1px] rounded-[4px] bg-[#EAECF06B] px-[13px] py-[20px] w-[769px]">
                <p className="w-[195px] leading-[30px] text-[#101828] text-[14px]">What is Night Crawlers</p>
                <div className="flex items-center justify-center rounded-full bg-[#EAECF0] w-[20px] h-[20px]">
                  <img src={plusIcon} alt="plus" className="w-[12px] h-[12px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
