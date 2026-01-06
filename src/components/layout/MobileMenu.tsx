import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ShoppingCart, User } from 'lucide-react';
import { NAVIGATION_LINKS } from '../../utils/constants';
import logo from '../../assets/logo.png';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed right-0 top-0 h-full w-80 max-w-[80vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <Link to="/" onClick={onClose} className="relative w-24 h-10 overflow-visible z-10">
              <img
                src={logo}
                alt="Night Crawlers"
                className="absolute left-0 top-[52%] -translate-y-1/2 h-[80px] w-auto object-contain select-none drop-shadow-sm pointer-events-none"
              />
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors z-10"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-4">
            <div className="space-y-1">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={onClose}
                  className={`block px-4 py-3 text-base font-medium transition-colors ${
                    location.pathname === link.href
                      ? 'text-night-red-600 bg-red-50 border-r-4 border-night-red-600'
                      : 'text-gray-700 hover:text-night-red-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
          
          {/* Action Buttons */}
          <div className="p-4 border-t border-gray-100">
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-night-red-600 text-white rounded-lg hover:bg-night-red-700 transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span>Cart</span>
              </button>
              <Link
                to="/signin"
                onClick={onClose}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <User className="w-5 h-5" />
                <span>Sign In</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
