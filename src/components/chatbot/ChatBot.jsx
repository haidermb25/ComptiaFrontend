"use client";

import { useState } from "react";
import Image from "next/image";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  return (
    <>
      {/* ✅ Image Button Always at Bottom Right */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 z-50">
          <button onClick={toggleChat}>
            <Image
              src="/boat.png"
              alt="Chat Icon"
              width={50}
              height={50}
              className="rounded-full shadow-md hover:scale-110 transition-transform duration-300"
            />
          </button>
        </div>
      )}

      {/* ✅ Chat Panel Appears at Same Position */}
      <div
        className={`fixed bottom-4 right-4 z-50 w-[90vw] sm:w-80 h-[70vh] sm:h-[500px] bg-white rounded-xl shadow-xl border border-gray-300 flex flex-col overflow-hidden transition-all duration-500 ease-in-out origin-bottom-right ${
          isOpen
            ? "scale-100 opacity-100 visible"
            : "scale-0 opacity-0 invisible"
        }`}
      >
        {/* Top Bar with Close Button */}
        <div className="p-3 border-b flex justify-between items-center bg-gray-100 rounded-t-xl">
          <h2 className="text-gray-800 font-semibold text-base">Chatbot</h2>
          <button
            onClick={toggleChat}
            className="text-gray-500 hover:text-red-500 text-2xl font-bold"
          >
            ×
          </button>
        </div>

        {/* Message Section */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm text-gray-700">
          <div className="bg-gray-100 p-2 rounded-lg w-fit max-w-[80%]">
            👋 Hello! How can I help you?
          </div>
          <div className="bg-blue-100 p-2 rounded-lg w-fit ml-auto max-w-[80%]">
            I need assistance.
          </div>
        </div>

        {/* Input Section */}
        <div className="p-3 border-t bg-white">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </div>
    </>
  );
};

export default ChatbotWidget;
