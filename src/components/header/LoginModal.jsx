"use client";
import { useEffect } from 'react';

const LoginModal = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 mx-4">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Login to CompTIA</h3>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username or Email
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your username or email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
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
            
            <a href="#" className="text-sm text-red-600 hover:text-red-500">
              Forgot password?
            </a>
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
          <p>New to CompTIA? <a href="#" className="text-red-600 hover:text-red-500">Create an account</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;