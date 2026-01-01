import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignInForm } from '../types';
import Input from '../components/ui/Input';
import Header from '../components/layout/Header';
import signinImage from '../assets/signin-image.png';
import signupLogo from '../assets/signup-logo.png';
import helpCircle from '../assets/help-circle.svg';
import mailIcon from '../assets/mail.svg';

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<SignInForm>({
    email: '',
    password: ''
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Logged in successfully!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Side - Image (Hidden on mobile) */}
        <div className="hidden lg:block lg:w-1/2 xl:w-[60%] h-screen lg:h-auto">
          <img src={signinImage} alt="Sign In" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 flex flex-col min-h-screen lg:h-screen overflow-y-auto">
        {/* Main Content Centered */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8">
          <div className="w-full max-w-[340px] sm:max-w-[380px] mx-auto">
            
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
              <Link to="/" className="block mb-4 sm:mb-6">
                <img src={signupLogo} alt="Night Crawlers" className="w-[180px] sm:w-[220px] md:w-[270px] h-auto object-contain" />
              </Link>
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#222222] mb-2 sm:mb-3">
                Welcome Back!
              </h1>
              <p className="text-[#667085] text-xs sm:text-sm leading-relaxed max-w-sm">
                Welcome back! Please log in with your correct details.
              </p>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-[#344054]">Email*</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#D0D5DD] rounded-md shadow-sm text-sm focus:ring-2 focus:ring-[#C62222] focus:border-[#C62222]"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-[#344054]">Password*</label>
                <div className="relative">
                  <Input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#D0D5DD] rounded-md shadow-sm text-sm focus:ring-2 focus:ring-[#C62222] focus:border-[#C62222] pr-10 sm:pr-12"
                    required
                  />
                  <img src={helpCircle} alt="help" className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 opacity-60" />
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 border-gray-300 rounded text-[#C62222] focus:ring-[#C62222]"
                  />
                  <span className="text-[#344054] text-xs sm:text-sm font-medium">Remember for 30 days</span>
                </label>
                <Link to="/forgot-password" className="text-[#C62222] text-xs sm:text-sm font-medium hover:underline">
                  Forgot password
                </Link>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full h-10 sm:h-12 bg-[#C62222] hover:bg-[#a51d1d] text-white text-sm sm:text-base font-medium rounded-md shadow-md transition-colors mt-6 sm:mt-8"
              >
                Sign In
              </button>

              <div className="text-center mt-4 sm:mt-6">
                <span className="text-[#222222] text-xs sm:text-sm">Don't have an account? </span>
                <Link to="/signup" className="text-[#C62222] font-medium text-xs sm:text-sm hover:underline ml-1">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 bg-white border-t border-gray-100 mt-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
            <p className="text-xs sm:text-sm text-[#667085] font-poppins">© Night Crawlers 2026.inc</p>
            <div className="flex items-center gap-2">
              <img src={mailIcon} alt="mail" className="w-3 h-3 sm:w-4 sm:h-4" />
              <a href="mailto:help@nightcrawlers.com" className="text-xs sm:text-sm text-[#667085] font-poppins hover:text-[#344054]">
                help@nightcrawlers.com
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SignIn;
