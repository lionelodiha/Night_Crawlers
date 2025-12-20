import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import instagramIcon from '../../../.figma/image/mje8ir02-k02ewke.png';
import whatsappIcon from '../../../.figma/image/mje8ir02-wrgzyap.png';
import facebookIcon from '../../../.figma/image/mje8iqzx-1n4d3p5.png';

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center bg-[#222222] w-full h-auto min-h-[272px] overflow-hidden pb-0">
      <div className="flex items-start justify-between w-full max-w-[1467px] mt-[-23px] pr-[48px] pl-[26px]">
        {/* Brand + text */}
        <div className="relative w-[281px] h-[182px]">
          <img src={logo} alt="Night Crawlers" className="absolute top-[-15px] left-[1px] w-[240px] h-[240px] object-contain" />
          <p className="absolute top-[139px] left-[16px] w-[268px] h-[40px] text-[14px] leading-[20px] tracking-normal text-white font-poppins m-0">
            Get your favorite meals delivered fast, fresh, and right to your door.
          </p>
        </div>

        {/* Links columns */}
        <div className="flex items-start gap-[32px] mt-[56px] w-[681px]">
          <div className="flex flex-col flex-grow items-start gap-[10px]">
            <p className="text-[#98A2B3] text-[14px] leading-[20px] font-semibold tracking-normal font-inter m-0 w-full">Product</p>
            <div className="flex flex-col items-start gap-[6px] w-full">
              <Link to="/overview" className="text-[#E4E7EC] text-[16px] leading-[24px] font-medium tracking-normal font-inter hover:underline">Overview</Link>
              <Link to="/features" className="text-[#E4E7EC] text-[16px] leading-[24px] font-medium tracking-normal font-inter hover:underline">Features</Link>
            </div>
          </div>
          <div className="flex flex-col flex-grow items-start gap-[10px]">
            <p className="text-[#98A2B3] text-[14px] leading-[20px] font-semibold tracking-normal font-inter m-0 w-full">Company</p>
            <div className="flex flex-col items-start gap-[6px] w-full">
              <Link to="/about" className="text-[#E4E7EC] text-[16px] leading-[24px] font-medium tracking-normal font-inter hover:underline">About us</Link>
              <Link to="/contact" className="text-[#E4E7EC] text-[16px] leading-[24px] font-medium tracking-normal font-inter hover:underline">Contact</Link>
            </div>
          </div>
          <div className="flex flex-col flex-grow items-start gap-[10px]">
            <p className="text-[#98A2B3] text-[14px] leading-[20px] font-semibold tracking-normal font-inter m-0 w-full">Legal</p>
            <div className="flex flex-col items-start gap-[6px] w-full">
              <Link to="/terms" className="text-[#E4E7EC] text-[16px] leading-[24px] font-medium tracking-normal font-inter hover:underline">Terms</Link>
              <Link to="/privacy" className="text-[#E4E7EC] text-[16px] leading-[24px] font-medium tracking-normal font-inter hover:underline">Privacy</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Red bar */}
      <div className="w-full bg-[#C62222] mt-[61px] rounded-b-[4px]">
        <div className="flex items-start justify-between w-full max-w-[1467px] mx-auto px-[41px] pt-[12px] pb-[8px] overflow-hidden">
          <p className="text-white text-[18px] leading-[30px] tracking-normal font-poppins m-[3px_0_0] w-[296px] h-[27px]">© 2026 Night Crawlers.inc</p>
          <div className="flex items-center justify-between w-[186px] h-[31px]">
            <img src={instagramIcon} alt="Instagram" className="w-[30px] h-[30px]" />
            <img src={whatsappIcon} alt="WhatsApp" className="w-[30px] h-[30px]" />
            <img src={facebookIcon} alt="Facebook" className="w-[30px] h-[30px]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
