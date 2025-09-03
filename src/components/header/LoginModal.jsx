"use client";
import { useEffect, useState } from 'react';
import CreateAccountModal from './CreateAccountModal';
import ForgotPasswordModal from './ForgotPasswordModal';

const LoginModal = ({ onClose }) => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleShowCreateAccount = () => {
    setShowCreateAccount(true);
  };

  const handleShowForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleBackToLogin = () => {
    setShowCreateAccount(false);
    setShowForgotPassword(false);
  };

  if (showCreateAccount) {
    return (
      <CreateAccountModal 
        onClose={onClose} 
        onSwitchToLogin={handleBackToLogin} 
      />
    );
  }

  if (showForgotPassword) {
    return (
      <ForgotPasswordModal 
        onClose={onClose} 
        onSwitchToLogin={handleBackToLogin} 
      />
    );
  }

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 mx-4">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Login to CompTIA</h3>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username or Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your username or email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            
            <button 
              type="button"
              onClick={handleShowForgotPassword}
              className="text-sm text-red-600 hover:text-red-500"
            >
              Forgot password?
            </button>
          </div>
          
          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Sign In
            </button>
            
            <button
              type="button"
              onClick={onClose}
              className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>New to CompTIA? <button onClick={handleShowCreateAccount} className="text-red-600 hover:text-red-500">Create an account</button></p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;