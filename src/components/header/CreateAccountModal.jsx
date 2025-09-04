"use client";
import { useEffect, useState } from 'react';

const CreateAccountModal = ({ onClose, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    areaCode: '',
    mobileNumber: '',
    phoneNumber: '',
    address: '',
    password: '',
    confirmPassword: '',
    image: '',
    agreeToTerms: false
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-black bg-opacity-50">
      {/* Full Page Modal Content */}
      <div className="min-h-screen bg-white flex flex-col">
        {/* Header */}
        <div className="bg-red-600 text-white p-3 sm:p-2 lg:p-4 text-center flex-shrink-0">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Create CompTIA Account</h3>
          <p className="text-red-100 mt-1 text-xs sm:text-sm lg:text-base">Join the world's leading IT certification community</p>
        </div>
        
        {/* Form Content */}
        <div className="flex-1 p-2 sm:p-3 lg:p-4 xl:p-6 max-w-7xl mx-auto w-full overflow-y-auto">
        
        <form className="space-y-3 sm:space-y-3 lg:space-y-4" onSubmit={handleSubmit}>
          {/* Top Row: Personal Information + Profile Picture */}
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 items-start">
            {/* Personal Information Section */}
            <div className="bg-gray-50 p-2 sm:p-3 lg:p-4 rounded-lg flex-1 w-full">
              <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 mb-2">Personal Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm text-black"
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm text-black"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
            </div>

            {/* Profile Image Section */}
            <div className="flex flex-col items-center w-full lg:w-auto">
              <label className="block text-xs sm:text-sm font-semibold text-gray-800 mb-1">
                Profile Picture
              </label>
              
              <div className="relative">
                {/* Circular Image Container */}
                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-red-500 bg-red-50 flex items-center justify-center cursor-pointer hover:bg-red-100 transition-colors duration-200 shadow-sm">
                  {formData.image ? (
                    <img
                      src={formData.image}
                      alt="Profile preview"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-red-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                
                {/* Hidden File Input */}
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      // Create preview URL
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        setFormData(prev => ({ ...prev, image: e.target.result }));
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                
                {/* Upload Icon Overlay */}
                <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-red-600 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  <svg
                    className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mt-0.5 text-center">
                Click to upload (optional)
              </p>
            </div>
          </div>

          {/* Second Row: Account Information + Contact Information */}
          <div className="flex flex-col xl:flex-row gap-3 lg:gap-4">
            {/* Account Information Section */}
            <div className="bg-gray-50 p-2 sm:p-3 lg:p-4 rounded-lg flex-1">
              <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 mb-2">Account Information</h4>
              <div className="space-y-2 sm:space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Username <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm text-black"
                    placeholder="Choose a unique username"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm text-black"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="bg-gray-50 p-2 sm:p-3 lg:p-4 rounded-lg flex-1">
              <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 mb-2">Contact Information</h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Area Code
                    </label>
                    <input
                      type="text"
                      name="areaCode"
                      value={formData.areaCode}
                      onChange={handleInputChange}
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm text-black"
                      placeholder="Area code"
                      maxLength="10"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleInputChange}
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm text-black"
                      placeholder="Mobile"
                      maxLength="50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm text-black"
                      placeholder="Phone"
                      maxLength="50"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows="2"
                    className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm text-black"
                    placeholder="Enter your address"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Third Row: Security Section */}
          <div className="bg-gray-50 p-2 sm:p-3 lg:p-4 rounded-lg">
            <h4 className="text-xs sm:text-sm lg:text-base font-semibold text-gray-800 mb-2">Security</h4>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm text-black"
                  placeholder="Create a password"
                />
                <p className="text-xs text-gray-500 mt-0.5">
                  Password must be at least 8 characters long
                </p>
              </div>
              
              <div className="flex-1">
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  className="w-full px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm text-black"
                  placeholder="Confirm your password"
                />
              </div>
            </div>
            
            {/* Terms Agreement */}
            <div className="mt-3 flex items-start">
              <input
                id="agree-to-terms"
                name="agreeToTerms"
                type="checkbox"
                checked={formData.agreeToTerms}
                onChange={handleInputChange}
                required
                className="h-3 w-3 sm:h-4 sm:w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded mt-1"
              />
              <label htmlFor="agree-to-terms" className="ml-2 block text-xs text-gray-700">
                I agree to the <a href="#" className="text-red-600 hover:text-red-500 font-medium">Terms of Service</a> and <a href="#" className="text-red-600 hover:text-red-500 font-medium">Privacy Policy</a> <span className="text-red-500">*</span>
              </label>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-2 sm:pt-3">
            <button
              type="submit"
              className="flex-1 bg-red-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 font-semibold text-sm sm:text-base transition-colors duration-200"
            >
              Create Account
            </button>
            
            <button
              type="button"
              onClick={() => {
                // Clear form fields
                setFormData({
                  firstName: '',
                  lastName: '',
                  username: '',
                  email: '',
                  areaCode: '',
                  mobileNumber: '',
                  phoneNumber: '',
                  address: '',
                  password: '',
                  confirmPassword: '',
                  image: '',
                  agreeToTerms: false
                });
              }}
              className="flex-1 bg-white border border-gray-300 text-gray-700 py-2 sm:py-3 px-3 sm:px-4 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-semibold text-sm sm:text-base transition-colors duration-200"
            >
              Clear Form
            </button>
            
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-500 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 font-semibold text-sm sm:text-base transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </form>
        
        <div className="mt-2 sm:mt-3 text-center pb-6">
          <p className="text-gray-600 text-xs sm:text-sm">
            Already have an account? 
            <button onClick={onSwitchToLogin} className="text-red-600 hover:text-red-500 font-semibold ml-1">
              Sign in here
            </button>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountModal;
