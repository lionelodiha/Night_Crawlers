import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../utils/constants';
import logo from '../../assets/logo.png';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-white border-b border-gray-100 py-2">
      <div className="w-full px-6 md:px-12">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-20">
          <div className="relative flex items-center">
            <Link to="/" className="block relative w-40 md:w-48 h-16 overflow-visible">
              <img
                src={logo}
                alt="Night Crawlers"
                className="absolute left-0 top-[52%] -translate-y-1/2 h-[200px] md:h-[244px] w-auto object-contain select-none drop-shadow-sm"
              />
            </Link>
          </div>
          <nav className="hidden md:flex justify-center items-center space-x-12">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`nav-link-wavy text-base ${
                  location.pathname === link.href ? 'active' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex items-center justify-end space-x-4">
            <button className="w-10 h-10 rounded-full bg-night-red-600 text-white flex items-center justify-center">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <Link to="/signin" className="w-10 h-10 rounded-full bg-night-red-600 text-white flex items-center justify-center">
              <User className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <nav className="md:hidden pb-3">
          <div className="flex flex-wrap justify-center gap-6">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`nav-link-wavy text-sm ${
                  location.pathname === link.href ? 'active' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
