"use client";

import { useState } from 'react';
import QuickLinksButton from './QuickLinksButton';
import QuickLinksPopup from './QuickLinksPopup';

const QuickLink = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <QuickLinksButton onClick={togglePopup} isOpen={isOpen} />
      {isOpen && <QuickLinksPopup onClose={togglePopup} />}
    </>
  );
};

export default QuickLink;