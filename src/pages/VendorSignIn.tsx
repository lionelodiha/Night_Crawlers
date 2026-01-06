import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { SignInForm } from '../types';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const VendorSignIn: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignInForm>({ email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace with real vendor auth when available
    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/vendor-dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white relative flex items-center justify-center">
      <div className="w-full max-w-[520px] mx-auto px-8 py-16">
        <div className="bg-gray-50 border border-gray-100 rounded-lg shadow-sm p-10">
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-night-red-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-[#C62222]">Our Partners</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-gray-600 mb-1 block">Email</label>
              <Input
                name="email"
                type="email"
                placeholder=""
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <label className="text-xs text-gray-600 mb-1 block">Password</label>
              <Input
                name="password"
                type="password"
                placeholder=""
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span>Remember for 30 days</span>
              </label>
              <Link to="/forgot-password" className="text-[#C62222] hover:underline">Forgot password</Link>
            </div>

            <Button type="submit" variant="primary" className="w-full py-3" disabled={isSubmitting}>
              Log In
            </Button>
          </form>

          <div className="text-center mt-6 text-sm text-gray-700">
            Not a partner?{' '}
            <Link to="/vendor-signup" className="text-[#C62222] hover:underline">Sign up</Link>
          </div>
        </div>
      </div>

      <a href="/terms-of-service" className="absolute right-6 bottom-6 text-xs text-[#C62222] hover:underline">Terms of Service</a>
    </div>
  );
};

export default VendorSignIn;
