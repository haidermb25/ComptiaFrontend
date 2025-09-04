"use client";
import { usePathname } from 'next/navigation';
import ChatBot from './ChatBot';

const ConditionalChatBot = () => {
  const pathname = usePathname();
  
  // List of authentication routes where ChatBot should be hidden
  const authRoutes = ['/Login', '/signUp'];
  
  // Check if current path is an authentication route
  const isAuthRoute = authRoutes.some(route => pathname.includes(route));
  
  // Don't render ChatBot on authentication pages
  if (isAuthRoute) {
    return null;
  }
  
  // Render ChatBot on all other pages
  return <ChatBot />;
};

export default ConditionalChatBot;
