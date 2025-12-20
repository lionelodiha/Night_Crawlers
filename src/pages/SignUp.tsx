import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignUpForm } from '../types';
import Input from '../components/ui/Input';
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
    <div className="flex h-screen overflow-hidden bg-white">
      {/* Left Side - Image (Fixed width as per design) */}
      <div className="hidden md:block w-[852px] h-full flex-shrink-0">
        <img src={signupImage} alt="Sign Up" className="w-full h-full object-cover" />
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Main Content Centered */}
        <div className="flex-1 flex flex-col justify-center px-10 py-6">
          <div className="w-full max-w-[340px] mx-auto">
            
            {/* Header Section */}
            <div className="flex flex-col items-center text-center mb-3">
              <Link to="/" className="block">
                <img src={signupLogo} alt="Night Crawlers" className="w-[200px] h-auto object-contain -mb-12" />
              </Link>
              <h1 className="text-xl font-bold text-[#222222] mb-1 whitespace-nowrap">
                Start Your Night Crawlers Journey
              </h1>
              <p className="text-[#667085] text-xs leading-relaxed max-w-sm">
                Sign up to enjoy fast delivery, exclusive offers, and a personalized Night Crawlers experience!
              </p>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#344054]">Username*</label>
                <Input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-[#D0D5DD] rounded-md shadow-sm text-sm focus:ring-1 focus:ring-[#C62222] focus:border-[#C62222]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#344054]">Phone Number*</label>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-[#D0D5DD] rounded-md shadow-sm text-sm focus:ring-1 focus:ring-[#C62222] focus:border-[#C62222]"
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
                    className="w-full px-3 py-2 border border-[#D0D5DD] rounded-md shadow-sm text-sm focus:ring-1 focus:ring-[#C62222] focus:border-[#C62222] pr-9"
                    required
                  />
                  <img src={helpCircle} alt="help" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-60" />
                </div>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-semibold text-[#344054]">Confirm Password*</label>
                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-[#D0D5DD] rounded-md shadow-sm text-sm focus:ring-1 focus:ring-[#C62222] focus:border-[#C62222]"
                  required
                />
                <p className="text-[11px] text-[#667085] mt-1">Must be at least 8 characters.</p>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="w-full h-10 bg-[#C62222] hover:bg-[#a51d1d] text-white text-base font-medium rounded-md shadow-md transition-colors mt-3"
              >
                Create Account
              </button>

              <div className="text-center mt-3">
                <span className="text-[#222222] text-xs">Already have an account? </span>
                <Link to="/signin" className="text-[#C62222] font-medium text-xs hover:underline ml-1">
                  Log In
                </Link>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full h-16 px-8 pb-4 flex justify-between items-end bg-white mt-auto flex-shrink-0">
          <p className="text-sm text-[#667085] font-poppins">© Night Crawlers 2026.inc</p>
          <div className="flex items-center gap-2">
            <img src={mailIcon} alt="mail" className="w-4 h-4" />
            <a href="mailto:help@nightcrawlers.com" className="text-sm text-[#667085] font-poppins hover:text-[#344054]">
              help@nightcrawlers.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
