import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';

interface SignInForm {
  email: string;
  password: string;
  remember: boolean;
}

const VendorSignIn: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<SignInForm>({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/vendor-dashboard');
  };

  return (
    <div className="min-h-screen bg-white font-poppins overflow-x-hidden">
      <Header />
      <main className="relative w-full max-w-[1440px] mx-auto min-h-[768px]">

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px]">
          <div className="w-full bg-[#F7F7F7] border border-[#EAECF0] rounded-[8px] shadow-[0px_1px_2px_rgba(16,24,40,0.05)] px-[32px] py-[28px]">
            <div className="flex flex-col items-center gap-[6px]">
              <h1 className="text-[#C62222] font-semibold text-[22px] leading-[28px]">Our Partners</h1>
            </div>

            <form onSubmit={handleSubmit} className="mt-[24px] flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[6px]">
                <label className="text-[#344054] text-[12px] font-medium leading-[18px]">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full h-[40px] px-[14px] bg-white border border-[#D0D5DD] rounded-[4px] text-[#667085] text-[12px] font-normal leading-[18px] focus:outline-none"
                  style={{ boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)' }}
                />
              </div>

              <div className="flex flex-col gap-[6px]">
                <label className="text-[#344054] text-[12px] font-medium leading-[18px]">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full h-[40px] px-[14px] bg-white border border-[#D0D5DD] rounded-[4px] text-[#667085] text-[12px] font-normal leading-[18px] focus:outline-none"
                  style={{ boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)' }}
                />
              </div>

              <div className="flex items-center justify-between mt-[4px]">
                <label className="flex items-center gap-[10px] text-[#667085] text-[12px] font-normal leading-[18px]">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={form.remember}
                    onChange={handleChange}
                    className="cursor-pointer accent-[#C62222] w-[14px] h-[14px]"
                  />
                  <span>Remember for 30 days</span>
                </label>
                <a href="/forgot-password" className="text-[#C62222] text-[12px] font-normal leading-[18px] underline">
                  Forgot password
                </a>
              </div>

              <button
                type="submit"
                className="mt-[12px] w-full h-[44px] bg-[#C62222] rounded-[4px] text-white text-[14px] font-medium leading-[21px]"
              >
                Log In
              </button>
            </form>
          </div>

          <div className="mt-[16px] flex items-center justify-center gap-[6px]">
            <span className="text-[#667085] text-[12px] font-normal leading-[18px]">Not a partner?</span>
            <button
              onClick={() => navigate('/vendor-signup')}
              className="text-[#C62222] text-[12px] font-normal leading-[18px] underline"
            >
              Sign up
            </button>
          </div>
        </div>

        <a href="/terms-of-service" className="absolute right-[56px] bottom-[36px] text-[#C62222] text-[10px] font-normal leading-[14px] underline">
          Terms of Service
        </a>
      </main>
    </div>
  );
};

export default VendorSignIn;
