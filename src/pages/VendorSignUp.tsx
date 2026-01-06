import React, { useState } from 'react';
import Header from '../components/layout/Header';
import vendorSignUpImage from '../assets/signin-image.png';

interface FormData {
  firstName: string;
  lastName: string;
  businessType: string;
  phoneNumber: string;
  email: string;
  location: string;
  agreeToPolicy: boolean;
}

const VendorSignUp: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    businessType: '',
    phoneNumber: '',
    email: '',
    location: '',
    agreeToPolicy: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white font-poppins overflow-x-hidden">
      <Header />
      <main className="relative w-full max-w-[1440px] mx-auto min-h-[600px]">

        <div className="absolute left-[20px] sm:left-[30px] md:left-[66px] right-[20px] sm:right-[30px] md:right-auto top-[80px] sm:top-[100px] md:top-[130px] flex flex-col lg:flex-row items-start gap-[32px] lg:gap-[64px]">
          <div className="w-full lg:w-[520px] bg-[#F7F7F7] border border-[#EAECF0] rounded-[8px] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] px-[20px] sm:px-[24px] md:px-[32px] py-[20px] sm:py-[24px] md:py-[28px]">
            <h1 className="text-[#C62222] font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[22px] sm:leading-[25px] md:leading-[28px]">Become a Partner</h1>

            <form onSubmit={handleSubmit} className="mt-[20px] sm:mt-[22px] md:mt-[24px] flex flex-col gap-[14px] sm:gap-[16px]">
              <div className="flex flex-col sm:flex-row items-start gap-[16px] sm:gap-[20px]">
                <div className="flex flex-col gap-[6px] w-full sm:w-[240px]">
                  <label className="text-[#344054] text-[12px] font-medium leading-[18px]">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                    className="w-full h-[38px] sm:h-[40px] px-[12px] sm:px-[14px] bg-white border border-[#D0D5DD] rounded-[4px] text-[#667085] text-[12px] font-normal leading-[18px] focus:outline-none"
                    style={{ boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)' }}
                  />
                </div>
                <div className="flex flex-col gap-[6px] w-full sm:w-[240px]">
                  <label className="text-[#344054] text-[12px] font-medium leading-[18px]">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                    className="w-full h-[38px] sm:h-[40px] px-[12px] sm:px-[14px] bg-white border border-[#D0D5DD] rounded-[4px] text-[#667085] text-[12px] font-normal leading-[18px] focus:outline-none"
                    style={{ boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)' }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-[#344054] text-[12px] font-medium leading-[18px]">Business Type</label>
                <input
                  type="text"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full h-[38px] sm:h-[40px] px-[12px] sm:px-[14px] bg-white border border-[#D0D5DD] rounded-[4px] text-[#667085] text-[12px] font-normal leading-[18px] focus:outline-none"
                  style={{ boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)' }}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-[16px] sm:gap-[20px]">
                <div className="flex flex-col gap-[6px] w-full sm:w-[240px]">
                  <label className="text-[#344054] text-[12px] font-medium leading-[18px]">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                    className="w-full h-[38px] sm:h-[40px] px-[12px] sm:px-[14px] bg-white border border-[#D0D5DD] rounded-[4px] text-[#667085] text-[12px] font-normal leading-[18px] focus:outline-none"
                    style={{ boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)' }}
                  />
                </div>
                <div className="flex flex-col gap-[6px] w-full sm:w-[240px]">
                  <label className="text-[#344054] text-[12px] font-medium leading-[18px]">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@gmail.com"
                    className="w-full h-[38px] sm:h-[40px] px-[12px] sm:px-[14px] bg-white border border-[#D0D5DD] rounded-[4px] text-[#667085] text-[12px] font-normal leading-[18px] focus:outline-none"
                    style={{ boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)' }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-[#344054] text-[12px] font-medium leading-[18px]">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full h-[38px] sm:h-[40px] px-[12px] sm:px-[14px] bg-white border border-[#D0D5DD] rounded-[4px] text-[#667085] text-[12px] font-normal leading-[18px] focus:outline-none"
                  style={{ boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)' }}
                />
              </div>

              <div className="mt-[4px] flex items-center gap-[8px] sm:gap-[10px]">
                <input
                  type="checkbox"
                  name="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={handleInputChange}
                  className="cursor-pointer accent-[#C62222] w-[12px] h-[12px] sm:w-[14px] sm:h-[14px]"
                />
                <div className="text-[#667085] text-[11px] sm:text-[12px] font-normal leading-[16px] sm:leading-[18px]">
                  You agree to our friendly{' '}
                  <a href="/privacy-policy" className="text-[#C62222] underline">
                    privacy policy
                  </a>
                </div>
              </div>

              <button type="submit" className="mt-[10px] sm:mt-[12px] w-full h-[40px] sm:h-[44px] bg-[#C62222] rounded-[4px] text-white text-[14px] font-medium leading-[21px]">
                Get Started
              </button>
            </form>
          </div>

          <img src={vendorSignUpImage} alt="Vendor Sign Up" className="w-full lg:w-[760px] h-[280px] sm:h-[380px] md:h-[460px] lg:h-[540px] object-cover rounded-[8px]" />
        </div>

        <a href="/terms-of-service" className="absolute right-[20px] sm:right-[30px] md:right-[56px] bottom-[20px] sm:bottom-[28px] md:bottom-[36px] text-[#C62222] text-[10px] font-normal leading-[14px] underline">
          Terms of Service
        </a>
      </main>
    </div>
  );
};

export default VendorSignUp;
