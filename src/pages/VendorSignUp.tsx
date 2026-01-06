import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/layout/Footer';
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
    // TODO: submit vendor sign up
    navigate('/vendor-signin');
  };

  return (
    <div className="min-h-screen bg-white font-poppins overflow-x-hidden flex flex-col">
      <main className="w-full max-w-[1200px] mx-auto flex-1 px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-[#F7F7F7] border border-[#EAECF0] rounded-lg p-6 md:p-8">
            <h1 className="text-[#C62222] font-semibold text-2xl mb-4">Become a Partner</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#344054] mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 border border-[#D0D5DD] rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#344054] mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 border border-[#D0D5DD] rounded-md"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#344054] mb-1">Business Type</label>
                <input
                  type="text"
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  className="w-full h-10 px-3 border border-[#D0D5DD] rounded-md"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-[#344054] mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 border border-[#D0D5DD] rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[#344054] mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full h-10 px-3 border border-[#D0D5DD] rounded-md"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#344054] mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full h-10 px-3 border border-[#D0D5DD] rounded-md"
                />
              </div>

              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  name="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={handleInputChange}
                  className="w-4 h-4"
                />
                <span className="text-sm text-[#667085]">You agree to our friendly <a href="/privacy-policy" className="text-[#C62222] underline">privacy policy</a></span>
              </label>

              <button type="submit" className="w-full h-11 bg-[#C62222] text-white rounded-md">Get Started</button>
            </form>
          </div>

          <div className="hidden lg:block">
            <img src={vendorSignUpImage} alt="Vendor sign up" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>

        <div className="mt-6 text-right">
          <a href="/terms-of-service" className="text-[#C62222] text-sm underline">Terms of Service</a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default VendorSignUp;
