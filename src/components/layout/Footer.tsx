import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import instagramIcon from '../../../.figma/image/mje8ir02-k02ewke.png';
import whatsappIcon from '../../../.figma/image/mje8ir02-wrgzyap.png';
import facebookIcon from '../../../.figma/image/mje8iqzx-1n4d3p5.png';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center bg-[#222222] w-full h-auto min-h-[272px] overflow-hidden pb-0">
      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row items-start justify-between w-full max-w-[1467px] mt-[-23px] px-4 sm:px-6 md:px-[26px] lg:px-[26px] xl:pr-[48px]">
        {/* Brand + text */}
        <div className="relative w-full lg:w-[281px] h-[182px] mb-8 lg:mb-0">
          <img 
            src={logo} 
            alt="Night Crawlers" 
            className="absolute top-[-15px] left-[1px] w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] h-[180px] sm:h-[200px] md:h-[220px] lg:h-[240px] object-contain" 
          />
          <p className="absolute top-[120px] sm:top-[130px] md:top-[135px] lg:top-[139px] left-[16px] w-[calc(100%-32px)] sm:w-[240px] md:w-[254px] lg:w-[268px] h-[40px] text-[12px] sm:text-[13px] md:text-[14px] leading-[18px] sm:leading-[20px] tracking-normal text-white font-poppins m-0">
            Get your favorite meals delivered fast, fresh, and right to your door.
          </p>
        </div>

        {/* Links columns */}
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-start gap-8 sm:gap-12 md:gap-16 lg:gap-[32px] mt-0 lg:mt-[56px] w-full lg:w-[681px]">
          <div className="flex flex-col flex-grow items-start gap-[10px]">
            <p className="text-[#98A2B3] text-[14px] leading-[20px] font-semibold tracking-normal font-inter m-0 w-full">Product</p>
            <div className="flex flex-col items-start gap-[6px] w-full">
              <Link to="/overview" className="text-[#E4E7EC] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] font-medium tracking-normal font-inter hover:underline">Overview</Link>
              <Link to="/features" className="text-[#E4E7EC] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] font-medium tracking-normal font-inter hover:underline">Features</Link>
            </div>
          </div>
          <div className="flex flex-col flex-grow items-start gap-[10px]">
            <p className="text-[#98A2B3] text-[14px] leading-[20px] font-semibold tracking-normal font-inter m-0 w-full">Company</p>
            <div className="flex flex-col items-start gap-[6px] w-full">
              <Link to="/about" className="text-[#E4E7EC] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] font-medium tracking-normal font-inter hover:underline">About us</Link>
              <Link to="/contact" className="text-[#E4E7EC] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] font-medium tracking-normal font-inter hover:underline">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col flex-grow items-start gap-[10px]">
            <p className="text-[#98A2B3] text-[14px] leading-[20px] font-semibold tracking-normal font-inter m-0 w-full">Legal</p>
            <div className="flex flex-col items-start gap-[6px] w-full">
              <Link to="/terms" className="text-[#E4E7EC] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] font-medium tracking-normal font-inter hover:underline">Terms</Link>
              <Link to="/privacy" className="text-[#E4E7EC] text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] font-medium tracking-normal font-inter hover:underline">Privacy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Red bar */}
      <div className="w-full bg-[#C62222] mt-[61px] rounded-b-[4px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full max-w-[1467px] mx-auto px-4 sm:px-[41px] pt-[12px] pb-[8px] overflow-hidden">
          <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[30px] tracking-normal font-poppins m-[3px_0_0] w-full sm:w-[200px] md:w-[296px] h-auto sm:h-[27px] mb-4 sm:mb-0">
            © 2026 Night Crawlers.inc
          </p>
          <div className="flex items-center justify-between w-[120px] sm:w-[150px] md:w-[186px] h-[30px] sm:h-[31px]">
            <img src={instagramIcon} alt="Instagram" className="w-[25px] h-[25px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]" />
            <img src={whatsappIcon} alt="WhatsApp" className="w-[25px] h-[25px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]" />
            <img src={facebookIcon} alt="Facebook" className="w-[25px] h-[25px] sm:w-[28px] sm:h-[28px] md:w-[30px] md:h-[30px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
