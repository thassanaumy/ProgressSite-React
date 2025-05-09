
import React, { forwardRef } from 'react';

interface SectionProps {
  title: string;
  content: React.ReactNode;
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ title, content }, ref) => {
    return (
      <div 
        ref={ref}
        className="h-screen flex items-center justify-center flex-col p-10 bg-white border-b border-gray-100"
      >
        <div className="text-2xl text-gray-800">{content}</div>
      </div>
    );
  }
);
