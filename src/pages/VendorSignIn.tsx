import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const VendorSignIn: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulated sign-in (replace with real auth call)
    // Immediately navigate to dashboard for now
    navigate('/vendor-dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <main className="flex-grow flex items-center justify-center bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-[720px]">
          <div className="bg-[#fbfbfb] border border-gray-100 shadow-md rounded-3xl p-10 sm:p-14">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-md bg-night-red-50 flex items-center justify-center mb-3">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M6 7H18V20H6V7Z" stroke="#C62222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 7V5a3 3 0 0 1 6 0v2" stroke="#C62222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-3xl sm:text-[34px] font-semibold text-night-red-600 mb-1">Our Partners</h2>
              <p className="text-base text-night-gray-500 mb-8">Sign in to manage your restaurants</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <div className="flex items-center justify-between text-sm text-night-gray-600">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Remember for 30 days</span>
                </label>
                <Link to="/forgot-password" className="text-night-red-600 hover:underline">Forgot password?</Link>
              </div>

              <div className="pt-4">
                <Button type="submit" variant="primary" className="w-full py-4 text-base" disabled={loading}>
                  {loading ? 'Signing in...' : 'Log In'}
                </Button>
              </div>
            </form>

            <p className="text-center text-sm text-night-gray-500 mt-8">
              Not a partner?{' '}
              <Link to="/vendor-signup" className="text-night-red-600 font-medium hover:underline">Sign up</Link>
            </p>
          </div>
        </div>
      </main>

      <Link to="/terms" className="text-sm text-night-red-600 absolute right-8 bottom-8">Terms of Service</Link>
    </div>
  );
};

export default VendorSignIn;
