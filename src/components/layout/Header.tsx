import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../utils/constants';
import logo from '../../assets/logo.png';
import MobileMenu from './MobileMenu';
import { useCart } from '../../context/CartContext';

type HeaderProps = {
  onCartClick?: () => void;
};

const Header: React.FC<HeaderProps> = ({ onCartClick }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <>
      <header className="bg-white border-b border-gray-100 py-2 sticky top-0 z-40">
        <div className="w-full px-4 sm:px-6 md:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="relative flex items-center">
              <Link to="/" className="block relative w-40 sm:w-48 md:w-56 h-14 sm:h-16 overflow-visible">
                <img
                  src={logo}
                  alt="Night Crawlers"
                  className="absolute left-0 top-[52%] -translate-y-1/2 h-[180px] sm:h-[200px] md:h-[244px] w-auto object-contain select-none drop-shadow-sm"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex justify-center items-center space-x-8 xl:space-x-12">
              {NAVIGATION_LINKS.map((link) => {
                const getUnderlineClass = (linkName: string) => {
                  switch (linkName) {
                    case 'Home':
                      return 'nav-link-home';
                    case 'Contact Us':
                      return 'nav-link-contact';
                    case 'Vendors':
                      return 'nav-link-vendors';
                    case 'FAQs':
                      return 'nav-link-faq';
                    default:
                      return 'nav-link-home';
                  }
                };

                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`nav-link-wavy text-base lg:text-lg ${getUnderlineClass(link.name)} ${
                      location.pathname === link.href ? 'active' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center justify-end space-x-3 lg:space-x-4">
              <button
                className="relative w-10 h-10 rounded-full bg-night-red-600 text-white flex items-center justify-center hover:bg-night-red-700 transition-colors"
                onClick={onCartClick}
                aria-label="Open cart"
              >
                <ShoppingCart className="w-5 h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-white text-night-red-600 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-night-red-600">
                    {itemCount}
                  </span>
                )}
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
              <button
                className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-night-red-600 text-white flex items-center justify-center hover:bg-night-red-700 transition-colors"
                onClick={onCartClick}
                aria-label="Open cart"
              >
                <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-white text-night-red-600 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-night-red-600">
                    {itemCount}
                  </span>
                )}
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
