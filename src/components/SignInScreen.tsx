// SignInScreen.tsx
import React, { useState } from 'react';
import { Mail, Eye, EyeOff } from 'lucide-react';

interface SignInScreenProps {
  onSignIn: () => void;
}

const SignInScreen: React.FC<SignInScreenProps> = ({ onSignIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [phoneEmail, setPhoneEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSignIn();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center justify-center px-6">
      <div className="text-6xl font-light text-blue-500 mb-6">α</div>

      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Welcome</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Phone or Email"
            value={phoneEmail}
            onChange={(e) => setPhoneEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password or OTP"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Sign In
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

        <div className="space-y-3">
          <button className="w-full flex items-center justify-center space-x-2 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Mail size={20} />
            <span>Continue with Email</span>
          </button>
        </div>

        <div className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <button className="text-blue-500 font-semibold hover:underline">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInScreen;
