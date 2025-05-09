import React, { useState, useRef, useEffect } from 'react';
import { SectionData } from '../App';
import { ResizableBox } from './ResizableBox';

interface SideProgressProps {
  sections: SectionData[];
  currentStep: number;
  onStepClick: (index: number) => void;
  onResize: (width: number) => void;
  width: number;
}

export const SideProgress: React.FC<SideProgressProps> = ({ 
  sections, 
  currentStep, 
  onStepClick,
  onResize,
  width
}) => {
  const progressPercentage = ((currentStep + 1) / sections.length) * 100;
  
  return (
    <ResizableBox
      width={width}
      minWidth={160}
      maxWidth={400}
      onResize={onResize}
      className="fixed top-0 left-0 h-screen bg-white/98 border-r border-gray-100
                shadow-sm py-8 px-3 z-10 flex flex-col overflow-y-auto"
    >
      <div className="text-center text-sm font-medium mb-4 text-gray-600 truncate">
        {currentStep + 1} / {sections.length}
      </div>
      
      <div className="h-0.5 bg-gray-100 rounded overflow-hidden mb-6">
        <div 
          className="h-full bg-green-500 transition-all duration-300 ease-in-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      
      <div className="flex flex-col gap-3 flex-grow">
        {sections.map((section, index) => (
          <div
            key={section.id}
            onClick={() => onStepClick(index)}
            className={`
              text-sm px-3 py-2 rounded cursor-pointer truncate transition-all
              ${index === currentStep 
                ? 'text-green-700 font-medium bg-green-50' 
                : index < currentStep 
                  ? 'text-gray-600' 
                  : 'text-gray-400'
              }
              hover:text-gray-800 hover:bg-gray-50 hover:translate-x-0.5
            `}
          >
            {section.title}
          </div>
        ))}
      </div>
    </ResizableBox>
  );
};