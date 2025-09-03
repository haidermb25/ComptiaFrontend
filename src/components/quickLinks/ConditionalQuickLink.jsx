"use client";
import { usePathname } from 'next/navigation';
import QuickLink from './QuickLink';

const ConditionalQuickLink = () => {
  const pathname = usePathname();
  
  // List of authentication routes where QuickLink should be hidden
  const authRoutes = ['/Login', '/signUp'];
  
  // Check if current path is an authentication route
  const isAuthRoute = authRoutes.some(route => pathname.includes(route));
  
  // Don't render QuickLink on authentication pages
  if (isAuthRoute) {
    return null;
  }
  
  // Render QuickLink on all other pages
  return <QuickLink />;
};

export default ConditionalQuickLink;
