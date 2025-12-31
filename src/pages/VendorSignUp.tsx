import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

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
  const navigate = useNavigate();
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
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-poppins overflow-x-hidden">
      <Header />

      <main className="relative w-full bg-white" style={{ position: 'relative', width: '1440px', height: '1024px' }}>
        {/* Logo */}
        <div
          style={{
            position: 'absolute',
            width: '284px',
            height: '284px',
            left: '25px',
            top: '-65px',
            backgroundImage: 'url(Night-Crawlers-logo-2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Sign up/Log in prompt (tailwind, no-wrap) */}
        <div
          className="absolute right-[40px] top-[50px] flex items-center whitespace-nowrap"
          style={{
            gap: '6px'
          }}
        >
          <span className="text-[#222222] font-poppins text-[18px] font-normal leading-5">Already a partner?</span>
          <button onClick={() => navigate('/signin')} className="text-[#C62222] text-[18px] font-normal leading-5 hover:underline ml-2">Log in</button>
        </div>

        {/* Main content container */}
        <div
          className="flex flex-row gap-[32px]"
          style={{
            position: 'absolute',
            width: '1358px',
            height: '645px',
            left: '41px',
            top: '187px',
            alignItems: 'flex-start',
            padding: '0px',
          }}
        >
          {/* Left side - Form */}
          <div
            className="flex flex-col items-center rounded-[10px] bg-[#F9FAFB] border border-[#EAECF0]"
            style={{
              width: '587px',
              height: '645px',
              padding: '40px 32px',
              gap: '40px',
              boxSizing: 'border-box',
            }}
          >
            {/* Heading */}
            <h1
              className="text-[#C62222] font-semibold"
              style={{
                width: '480px',
                height: '24px',
                fontSize: '32px',
                fontWeight: '600',
                lineHeight: '24px',
              }}
            >
              Become a Partner
            </h1>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[32px]"
              style={{ width: '480px', height: '496px' }}
            >
              {/* Form fields container */}
              <div className="flex flex-col gap-[24px]" style={{ width: '480px', height: '416px' }}>
                {/* Row 1: First Name and Last Name */}
                <div className="flex flex-row gap-[32px]" style={{ width: '480px', height: '74px' }}>
                  <div className="flex flex-col gap-[6px]" style={{ width: '224px', height: '74px' }}>
                    <label className="text-[#344054] text-[14px] font-medium leading-[20px]" style={{ width: '76px', height: '20px' }}>
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className="w-full h-[48px] px-[16px] py-[12px] bg-white border border-[#D0D5DD] rounded-[4px] text-[#667085] text-[16px] font-normal leading-[24px] focus:outline-none focus:ring-2 focus:ring-[#C62222]"
                      style={{
                        boxSizing: 'border-box',
                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]" style={{ width: '224px', height: '74px' }}>
                    <label className="text-[#344054] text-[14px] font-medium leading-[20px]" style={{ width: '75px', height: '20px' }}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Last name"
                      className="w-full h-[48px] px-[16px] py-[12px] bg-white border border-[#D0D5DD] rounded-[4px] text-[#667085] text-[16px] font-normal leading-[24px] focus:outline-none focus:ring-2 focus:ring-[#C62222]"
                      style={{
                        boxSizing: 'border-box',
                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                      }}
                    />
                  </div>
                </div>

                {/* Business Type */}
                <div className="flex flex-col gap-[6px]" style={{ width: '480px', height: '74px' }}>
                  <label className="text-[#344054] text-[14px] font-medium leading-[20px]" style={{ width: '100px', height: '20px' }}>
                    Business Type
                  </label>
                  <input
                    type="text"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    placeholder="Enter your business type"
                    className="w-full h-[48px] px-[16px] py-[12px] bg-white border border-[#D0D5DD] rounded-[4px] text-[#667085] text-[16px] font-normal leading-[24px] focus:outline-none focus:ring-2 focus:ring-[#C62222]"
                    style={{
                      boxSizing: 'border-box',
                      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                    }}
                  />
                </div>

                {/* Row 2: Phone Number and Email */}
                <div className="flex flex-row gap-[32px]" style={{ width: '480px', height: '74px' }}>
                  <div className="flex flex-col gap-[6px]" style={{ width: '224px', height: '74px' }}>
                    <label className="text-[#344054] text-[14px] font-medium leading-[20px]" style={{ width: '105px', height: '20px' }}>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="First name"
                      className="w-full h-[48px] px-[16px] py-[12px] bg-white border border-[#D0D5DD] rounded-[4px] text-[#667085] text-[16px] font-normal leading-[24px] focus:outline-none focus:ring-2 focus:ring-[#C62222]"
                      style={{
                        boxSizing: 'border-box',
                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]" style={{ width: '224px', height: '74px' }}>
                    <label className="text-[#344054] text-[14px] font-medium leading-[20px]" style={{ width: '39px', height: '20px' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@gmail.com"
                      className="w-full h-[48px] px-[16px] py-[12px] bg-white border border-[#D0D5DD] rounded-[4px] text-[#667085] text-[16px] font-normal leading-[24px] focus:outline-none focus:ring-2 focus:ring-[#C62222]"
                      style={{
                        boxSizing: 'border-box',
                        boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                      }}
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="flex flex-col gap-[6px]" style={{ width: '480px', height: '74px' }}>
                  <label className="text-[#344054] text-[14px] font-medium leading-[20px]" style={{ width: '60px', height: '20px' }}>
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter your location"
                    className="w-full h-[48px] px-[16px] py-[12px] bg-white border border-[#D0D5DD] rounded-[4px] text-[#667085] text-[16px] font-normal leading-[24px] focus:outline-none focus:ring-2 focus:ring-[#C62222]"
                    style={{
                      boxSizing: 'border-box',
                      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                    }}
                  />
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex flex-row items-center gap-[12px]" style={{ width: '480px', height: '24px' }}>
                <input
                  type="checkbox"
                  name="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={handleInputChange}
                  className="cursor-pointer accent-[#C62222]"
                  style={{
                    width: '20px',
                    height: '20px',
                    border: '1px solid #D0D5DD',
                    borderRadius: '6px',
                    background: '#FFFFFF',
                    boxSizing: 'border-box',
                  }}
                />
                <label className="text-[#667085] text-[16px] font-normal leading-[24px]" style={{ width: '448px', height: '24px' }}>
                  You agree to our friendly{' '}
                  <a href="/privacy-policy" className="text-[#C62222] underline hover:no-underline">
                    privacy policy
                  </a>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col gap-[16px]" style={{ width: '480px', height: '48px' }}>
                <button
                  type="submit"
                  className="w-full h-[48px] bg-[#C62222] border border-[#C62222] rounded-[4px] text-white font-medium leading-[24px] hover:bg-[#a01a1a] transition-all duration-200 flex items-center justify-center"
                  style={{
                    padding: '12px 20px',
                    gap: '8px',
                    boxSizing: 'border-box',
                    boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',
                    fontSize: '20px',
                    fontWeight: '500',
                    color: '#FFFFFF',
                  }}
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>

          {/* Right side - Image */}
          <div
            className="rounded-[10px] bg-cover bg-center"
            style={{
              width: '738px',
              height: '645px',
              backgroundImage: `url('/src/assets/contact/logo-white-bg.png')`,
            }}
          />
        </div>

        {/* Terms of Service Link */}
        <a
          href="/terms-of-service"
          className="absolute text-[#C62222] font-normal leading-[24px] underline hover:no-underline transition-all"
          style={{
            position: 'absolute',
            width: '135px',
            height: '24px',
            left: '1267px',
            top: '876px',
            fontSize: '16px',
            fontWeight: '400',
            textDecorationLine: 'underline',
          }}
        >
          Terms of Service
        </a>
      </main>

      <Footer />
    </div>
  );
};

export default VendorSignUp;
