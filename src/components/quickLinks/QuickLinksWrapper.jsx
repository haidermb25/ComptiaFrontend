"use client";

import dynamic from 'next/dynamic';

const QuickLink = dynamic(
  () => import('./QuickLink'),
  { 
    ssr: false,
    loading: () => <div className="fixed left-4 top-4 w-24 h-10 bg-red-600 rounded-md"></div>
  }
);

export default function QuickLinksWrapper() {
  return <QuickLink />;
}