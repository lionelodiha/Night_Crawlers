import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../utils/constants';
import logo from '../../assets/logo.png';
import MobileMenu from './MobileMenu';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b border-gray-100 py-2 sticky top-0 z-40">
        <div className="w-full px-4 sm:px-6 md:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="relative flex items-center">
              <Link to="/" className="block relative w-32 sm:w-40 md:w-48 h-12 sm:h-16 overflow-visible">
                <img
                  src={logo}
                  alt="Night Crawlers"
                  className="absolute left-0 top-[52%] -translate-y-1/2 h-[150px] sm:h-[200px] md:h-[244px] w-auto object-contain select-none drop-shadow-sm"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex justify-center items-center space-x-8 xl:space-x-12">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`nav-link-wavy text-base lg:text-lg ${
                    location.pathname === link.href ? 'active' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center justify-end space-x-3 lg:space-x-4">
              <button className="w-10 h-10 rounded-full bg-night-red-600 text-white flex items-center justify-center hover:bg-night-red-700 transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
              <Link 
                to="/signin" 
                className="w-10 h-10 rounded-full bg-night-red-600 text-white flex items-center justify-center hover:bg-night-red-700 transition-colors"
              >
                <User className="w-5 h-5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-2">
              <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-night-red-600 text-white flex items-center justify-center hover:bg-night-red-700 transition-colors">
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Menu className="w-6 h-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Header;
