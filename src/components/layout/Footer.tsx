import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MessageCircle, Facebook } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#222222] text-white">
      <div className="w-full px-6 md:px-12 pt-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          {/* Brand + text */}
          <div className="relative w-[281px] h-[182px] mb-8 md:mb-0">
            <img src={logo} alt="Night Crawlers" className="absolute top-[-56px] left-[1px] w-[240px] h-[240px] object-contain" />
            <p className="absolute top-[110px] left-4 w-[268px] text-[14px] leading-5 text-white">
              Get your favorite meals delivered fast,
              <br />
              fresh, and right to your door.
            </p>
          </div>

          {/* Links columns */}
          <div className="flex gap-8 md:gap-8 mt-14 md:mt-0 w-full md:w-[681px]">
            <div className="flex-1 space-y-[10px]">
              <p className="text-[#98A2B3] text-[14px] font-semibold">Product</p>
              <div className="space-y-[6px]">
                <Link to="/overview" className="text-[#E4E7EC] text-base">Overview</Link>
                <br />
                <Link to="/features" className="text-[#E4E7EC] text-base">Features</Link>
              </div>
            </div>
            <div className="flex-1 space-y-[10px]">
              <p className="text-[#98A2B3] text-[14px] font-semibold">Company</p>
              <div className="space-y-[6px]">
                <Link to="/about" className="text-[#E4E7EC] text-base">About us</Link>
                <br />
                <Link to="/contact" className="text-[#E4E7EC] text-base">Contact</Link>
              </div>
            </div>
            <div className="flex-1 space-y-[10px]">
              <p className="text-[#98A2B3] text-[14px] font-semibold">Legal</p>
              <div className="space-y-[6px]">
                <Link to="/terms" className="text-[#E4E7EC] text-base">Terms</Link>
                <br />
                <Link to="/privacy" className="text-[#E4E7EC] text-base">Privacy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Red bar */}
      <div className="bg-[#C62222] mt-10 py-3 px-8 flex items-center justify-between">
        <p className="text-white text-[18px]">© 2026 Night Crawlers.inc</p>
        <div className="flex items-center gap-4">
          <a href="#" className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center">
            <Instagram className="w-4 h-4 text-[#C62222]" />
          </a>
          <a href="#" className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center">
            <MessageCircle className="w-4 h-4 text-[#C62222]" />
          </a>
          <a href="#" className="w-[30px] h-[30px] rounded-full bg-white flex items-center justify-center">
            <Facebook className="w-4 h-4 text-[#C62222]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
