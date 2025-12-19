import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignInForm } from '../types';
import Input from '../components/ui/Input';
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
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Left Side - Image */}
      <div className="hidden md:block w-[852px] h-full flex-shrink-0">
        <img src={signinImage} alt="Sign In" className="w-full h-full object-cover" />
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col h-full overflow-y-auto custom-scrollbar">
        {/* Main Content Centered */}
        <div className="flex-1 flex flex-col justify-center px-10 pt-6 pb-12">
          <div className="w-full max-w-[400px] mx-auto">
            
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-4">
              <Link to="/" className="block">
                <img src={signupLogo} alt="Night Crawlers" className="w-[270px] h-auto object-contain -mb-20" />
              </Link>
              <h1 className="text-xl md:text-2xl font-bold text-[#222222] mb-1">
                Welcome Back!
              </h1>
              <p className="text-[#667085] text-xs leading-relaxed max-w-sm">
                Welcome back! Please log in with your correct details.
              </p>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#344054]">Email*</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3.5 py-2 border border-[#D0D5DD] rounded-md shadow-sm text-sm focus:ring-1 focus:ring-[#C62222] focus:border-[#C62222]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#344054]">Password*</label>
                <div className="relative">
                  <Input
                    type="password"
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 border border-[#D0D5DD] rounded-md shadow-sm text-sm focus:ring-1 focus:ring-[#C62222] focus:border-[#C62222] pr-9"
                    required
                  />
                  <img src={helpCircle} alt="help" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-60" />
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
                  <span className="text-[#344054] text-xs font-medium">Remember for 30 days</span>
                </label>
                <Link to="/forgot-password" className="text-[#C62222] text-xs font-medium hover:underline">
                  Forgot password
                </Link>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full h-10 bg-[#C62222] hover:bg-[#a51d1d] text-white text-base font-medium rounded-md shadow-md transition-colors mt-12"
              >
                Sign In
              </button>

              <div className="text-center mt-4">
                <span className="text-[#222222] text-xs">Don't have an account? </span>
                <Link to="/signup" className="text-[#C62222] font-medium text-xs hover:underline ml-1">
                  Sign Up
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-2 flex justify-between items-center bg-white mt-auto">
          <p className="text-xs text-[#667085]">© Night Crawlers 2026.inc</p>
          <div className="flex items-center gap-2">
            <img src={mailIcon} alt="mail" className="w-4 h-4 opacity-60" />
            <a href="mailto:help@nightcrawlers.com" className="text-xs text-[#667085] hover:text-[#344054]">
              help@nightcrawlers.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
