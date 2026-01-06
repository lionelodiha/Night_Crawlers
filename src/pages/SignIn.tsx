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
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Logged in successfully!');
    }, 2000);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-white">
      <div className="flex h-full">
        {/* Left Side - Image (Hidden on mobile) */}
        <div className="hidden lg:block lg:w-1/2 xl:w-[60%] min-h-screen">
          <img src={signinImage} alt="Sign In" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 flex flex-col justify-between p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="flex-1 flex items-start justify-center pt-6 sm:pt-8 md:pt-10">
            <div className="w-full max-w-[320px] sm:max-w-[340px]">
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-3 sm:mb-4">
              <Link to="/" className="block mb-2 sm:mb-3">
                <img src={signupLogo} alt="Night Crawlers" className="w-[120px] sm:w-[140px] md:w-[160px] h-auto object-contain" />
              </Link>
              <h1 className="text-sm sm:text-base font-bold text-[#222222] mb-1">
                Welcome Back!
              </h1>
              <p className="text-[#667085] text-xs leading-tight max-w-sm">
                Welcome back! Please log in with your correct details.
              </p>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#344054]">Email*</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[#D0D5DD] rounded-md shadow-sm text-xs focus:ring-2 focus:ring-[#C62222] focus:border-[#C62222]"
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
                      className="w-full px-3 py-2 border border-[#D0D5DD] rounded-md shadow-sm text-xs focus:ring-2 focus:ring-[#C62222] focus:border-[#C62222] pr-8"
                      required
                    />
                    <img src={helpCircle} alt="help" className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 opacity-60" />
                  </div>
                </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-3.5 h-3.5 border-gray-300 rounded text-[#C62222] focus:ring-[#C62222]"
                  />
                  <span className="text-xs text-[#667085]">Remember for 30 days</span>
                  </label>
                <Link to="/forgot-password" className="text-xs text-[#C62222] hover:underline">
                  Forgot password
                </Link>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C62222] text-white py-2 px-4 rounded-md hover:bg-[#A01B1B] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-xs font-medium"
                >
                  {isSubmitting ? 'Logging in...' : 'Sign In'}
                </button>
              </form>

            {/* Sign Up Link */}
            <div className="mt-3 text-center">
              <p className="text-xs text-[#667085]">
                Don't have an account?{' '}
                <Link to="/signup" className="text-[#C62222] hover:underline font-medium">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
          </div>
          <div className="w-full flex items-center justify-between text-xs text-[#667085] px-1">
            <span>© Night Crawlers 2026, inc</span>
            <a href="mailto:help@nightcrawlers.com" className="flex items-center gap-2 hover:text-[#C62222]">
              <img src={mailIcon} alt="" className="w-3.5 h-3.5" />
              help@nightcrawlers.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
