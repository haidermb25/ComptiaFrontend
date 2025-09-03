"use client";
import LoginModal from "@/components/header/LoginModal";
import { useState } from "react";

export default function LoginPage() {
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => {
    setShowModal(false);
    // You can add navigation logic here to redirect to home or another page
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {showModal && <LoginModal onClose={handleClose} />}
    </div>
  );
}
