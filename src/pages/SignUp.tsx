import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignUpForm } from '../types';
import Input from '../components/ui/Input';
import Header from '../components/layout/Header';
import signupImage from '../assets/signup-image.png';
import signupLogo from '../assets/signup-logo.png';
import helpCircle from '../assets/help-circle.svg';
import mailIcon from '../assets/mail.svg';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignUpForm>({
    username: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Account created successfully!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left Side - Image (Hidden on mobile) */}
        <div className="hidden lg:block lg:w-1/2 xl:w-[60%] h-screen lg:h-auto">
          <img src={signupImage} alt="Sign Up" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 flex flex-col min-h-screen lg:h-screen overflow-y-auto">
        {/* Main Content Centered */}
        <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8">
          <div className="w-full max-w-[340px] sm:max-w-[380px] mx-auto">
            
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
              <Link to="/" className="block mb-2 sm:mb-4">
                <img src={signupLogo} alt="Night Crawlers" className="w-[160px] sm:w-[200px] h-auto object-contain" />
              </Link>
              <h1 className="text-lg sm:text-xl font-bold text-[#222222] mb-2 sm:mb-3 whitespace-nowrap">
                Start Your Night Crawlers Journey
              </h1>
              <p className="text-[#667085] text-xs sm:text-sm leading-relaxed max-w-sm">
                Sign up to enjoy fast delivery, exclusive offers, and a personalized Night Crawlers experience!
              </p>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-[#344054]">Username*</label>
                <Input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#D0D5DD] rounded-md shadow-sm text-sm focus:ring-2 focus:ring-[#C62222] focus:border-[#C62222]"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-[#344054]">Phone Number*</label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
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
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#D0D5DD] rounded-md shadow-sm text-sm focus:ring-2 focus:ring-[#C62222] focus:border-[#C62222] pr-10 sm:pr-12"
                    required
                  />
                  <img src={helpCircle} alt="help" className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 opacity-60" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs sm:text-sm font-semibold text-[#344054]">Confirm Password*</label>
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-[#D0D5DD] rounded-md shadow-sm text-sm focus:ring-2 focus:ring-[#C62222] focus:border-[#C62222]"
                  required
                />
                <p className="text-[11px] sm:text-xs text-[#667085] mt-1.5">Must be at least 8 characters.</p>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full h-10 sm:h-12 bg-[#C62222] hover:bg-[#a51d1d] text-white text-sm sm:text-base font-medium rounded-md shadow-md transition-colors mt-4 sm:mt-6"
              >
                Create Account
              </button>

              <div className="text-center mt-4 sm:mt-6">
                <span className="text-[#222222] text-xs sm:text-sm">Already have an account? </span>
                <Link to="/signin" className="text-[#C62222] font-medium text-xs sm:text-sm hover:underline ml-1">
                  Log In
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

export default SignUp;
