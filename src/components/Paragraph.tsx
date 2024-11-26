
// components/Paragraph.tsx
import React, { ReactNode } from 'react';

interface ParagraphProps {
  children: ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className = '' }) => {
  return (
    <p className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-justify ${className}`}>
      {children}
    </p>
  );
};

export default Paragraph;
