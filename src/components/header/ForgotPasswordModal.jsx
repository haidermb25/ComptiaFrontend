"use client";
import { useEffect, useState } from 'react';

const ForgotPasswordModal = ({ onClose, onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  const handleBackToLogin = () => {
    setIsSubmitted(false);
    onSwitchToLogin();
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 mx-4">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">Check Your Email</h3>
            
            <p className="text-gray-600 mb-6">
              We've sent a password reset link to <span className="font-medium text-gray-900">{email}</span>. 
              Please check your email and follow the instructions to reset your password.
            </p>
            
            <div className="space-y-3">
              <button
                onClick={handleBackToLogin}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Back to Login
              </button>
              
              <button
                onClick={onClose}
                className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Close
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Didn't receive the email? Check your spam folder or{' '}
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-red-600 hover:text-red-500"
              >
                try again
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 mx-4">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Reset Your Password</h3>
        
        <p className="text-gray-600 mb-6">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email address"
            />
          </div>
          
          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Send Reset Link
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
          <p>Remember your password? <button onClick={onSwitchToLogin} className="text-red-600 hover:text-red-500">Sign in</button></p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
