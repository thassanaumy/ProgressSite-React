
import React, { useRef, useEffect, useState } from 'react';

interface ResizableBoxProps {
  children: React.ReactNode;
  width: number;
  minWidth?: number;
  maxWidth?: number;
  className?: string;
  onResize: (width: number) => void;
}

export const ResizableBox: React.FC<ResizableBoxProps> = ({
  children,
  width,
  minWidth = 100,
  maxWidth = 500,
  className = '',
  onResize
}) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const startWidthRef = useRef<number>(width);
  const [isResizing, setIsResizing] = useState(false);

  // Initialize resize handlers
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return;
      
      const deltaX = e.clientX - startXRef.current;
      let newWidth = startWidthRef.current + deltaX;
      
      // Enforce min/max constraints
      newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
      
      onResize(newWidth);
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, minWidth, maxWidth, onResize]);

  // Handle resize start
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only trigger resize when clicking near the right edge
    const box = boxRef.current;
    if (!box) return;
    
    const boxRect = box.getBoundingClientRect();
    const rightEdgeZone = 10; // 10px from the right edge
    
    if (boxRect.right - e.clientX <= rightEdgeZone) {
      setIsResizing(true);
      startXRef.current = e.clientX;
      startWidthRef.current = width;
      document.body.style.cursor = 'ew-resize';
      document.body.style.userSelect = 'none';
    }
  };

  return (
    <div
      ref={boxRef}
      className={`${className} ${isResizing ? 'select-none' : ''}`}
      style={{ width: `${width}px`, cursor: 'auto' }}
      onMouseDown={handleMouseDown}
    >
      {children}
      <div 
        className="absolute top-0 right-0 w-1 h-full cursor-ew-resize bg-transparent hover:bg-gray-200"
        onMouseDown={(e) => {
          e.stopPropagation();
          setIsResizing(true);
          startXRef.current = e.clientX;
          startWidthRef.current = width;
          document.body.style.cursor = 'ew-resize';
        }}
      />
    </div>
  );
};