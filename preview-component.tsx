import { useState, useEffect, useRef } from 'react';

// Data for sections
const sectionData = [
  { id: 'introduction', title: 'Introduction', content: <><strong>Step 1:</strong> Introduction</> },
  { id: 'getting-started', title: 'Getting Started', content: <><strong>Step 2:</strong> Getting Started</> },
  { id: 'setup', title: 'Setup Environment', content: <><strong>Step 3:</strong> Setup Environment</> },
  { id: 'structure', title: 'Project Structure', content: <><strong>Step 4:</strong> Project Structure</> },
];

// ResizableBox Component
const ResizableBox = ({
  children,
  width,
  minWidth = 100,
  maxWidth = 300, 
  className = '',
  onResize
}) => {
  const boxRef = useRef(null);
  const startXRef = useRef(0);
  const startWidthRef = useRef(width);
  const [isResizing, setIsResizing] = useState(false);

  // Handle resizing
  useEffect(() => {
    const handleMouseMove = (e) => {
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

  return (
    <div
      ref={boxRef}
      className={`${className} relative ${isResizing ? 'select-none' : ''}`}
      style={{ width: `${width}px` }}
    >
      {children}
      <div 
        className="absolute top-0 right-0 w-1 h-full cursor-ew-resize hover:bg-gray-200"
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

// SideProgress Component
const SideProgress = ({ sections, currentStep, onStepClick, onResize, width }) => {
  const progressPercentage = ((currentStep + 1) / sections.length) * 100;
  
  return (
    <ResizableBox
      width={width}
      onResize={onResize}
      className="bg-white border-r border-gray-200 shadow-sm h-64 py-4 px-3 flex flex-col"
    >
      <div className="text-center text-sm font-medium mb-2 text-gray-600">
        {currentStep + 1} / {sections.length}
      </div>
      
      <div className="h-1 bg-gray-100 rounded overflow-hidden mb-4">
        <div 
          className="h-full bg-green-500 transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      
      <div className="flex flex-col gap-2">
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
              hover:text-gray-800 hover:bg-gray-50
            `}
          >
            {section.title}
          </div>
        ))}
      </div>
    </ResizableBox>
  );
};

// Main component
export default function DemoComponent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [sidebarWidth, setSidebarWidth] = useState(180);

  // Toggle through steps for demo
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % sectionData.length);
    }, 2000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <h2 className="text-xl font-bold mb-6 text-center">ProgressSite Demo</h2>
      
      <div className="flex w-full border rounded-lg overflow-hidden bg-gray-50 shadow-md">
        <SideProgress 
          sections={sectionData}
          currentStep={currentStep}
          onStepClick={setCurrentStep}
          onResize={setSidebarWidth}
          width={sidebarWidth}
        />
        
        <div 
          className="p-8 flex items-center justify-center transition-all"
          style={{ width: `calc(100% - ${sidebarWidth}px)` }}
        >
          <div className="text-xl">{sectionData[currentStep].content}</div>
        </div>
      </div>
      
      <div className="mt-6 text-sm text-gray-500 text-center">
        <p>Interactive demo of the ProgressSite component</p>
        <p className="mt-2">Try dragging the right edge of the sidebar to resize it</p>
      </div>
    </div>
  );
}