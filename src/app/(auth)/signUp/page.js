"use client";
import CreateAccountModal from "@/components/header/CreateAccountModal";
import { useState } from "react";

export default function SignUpPage() {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    // You can add navigation logic here to redirect to home or another page
    window.history.back();
  };

  const handleSwitchToLogin = () => {
    // Navigate to login page
    window.location.href = "/Login";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {showModal && (
        <CreateAccountModal 
          onClose={handleClose} 
          onSwitchToLogin={handleSwitchToLogin}
        />
      )}
    </div>
  );
}
