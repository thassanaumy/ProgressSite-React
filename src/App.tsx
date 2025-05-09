
import React, { useState, useEffect, useRef } from 'react';
import { SideProgress } from './components/SideProgress';
import { Section } from './components/Section';

// Data model for our sections
export interface SectionData {
  id: string;
  title: string;
  content: React.ReactNode;
}

// Our section data
const sectionData: SectionData[] = [
  { id: 'introduction', title: 'Introduction', content: <><strong>Step 1:</strong> Introduction</> },
  { id: 'getting-started', title: 'Getting Started', content: <><strong>Step 2:</strong> Getting Started</> },
  { id: 'setup-environment', title: 'Setup Environment', content: <><strong>Step 3:</strong> Setup Environment</> },
  { id: 'project-structure', title: 'Project Structure', content: <><strong>Step 4:</strong> Project Structure</> },
  { id: 'building-components', title: 'Building Components', content: <><strong>Step 5:</strong> Building Components</> },
  { id: 'styling-layout', title: 'Styling & Layout', content: <><strong>Step 6:</strong> Styling & Layout</> },
  { id: 'adding-interactivity', title: 'Adding Interactivity', content: <><strong>Step 7:</strong> Adding Interactivity</> },
  { id: 'testing-debugging', title: 'Testing & Debugging', content: <><strong>Step 8:</strong> Testing & Debugging</> },
  { id: 'deployment', title: 'Deployment', content: <><strong>Step 9:</strong> Deployment</> },
  { id: 'summary-wrapup', title: 'Summary & Wrap-up', content: <><strong>Step 10:</strong> Summary & Wrap-up</> },
];

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [sidebarWidth, setSidebarWidth] = useState(200);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Handle scroll to update current step
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Find current visible section
      const index = sectionsRef.current.findIndex((section, idx) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        // Consider a section "active" when it occupies most of the viewport
        return rect.top <= windowHeight/3 && rect.bottom >= windowHeight/2;
      });
      
      if (index !== -1) {
        setCurrentStep(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle scroll to section when clicking on sidebar item
  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handle sidebar resize
  const handleSidebarResize = (width: number) => {
    setSidebarWidth(width);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideProgress 
        sections={sectionData}
        currentStep={currentStep}
        onStepClick={scrollToSection}
        onResize={handleSidebarResize}
        width={sidebarWidth}
      />
      
      <main 
        className="transition-all duration-300 ease-in-out"
        style={{ 
          marginLeft: `${sidebarWidth}px`,
          width: `calc(100% - ${sidebarWidth}px)`
        }}
      >
        {sectionData.map((section, index) => (
          <Section 
            key={section.id}
            ref={el => sectionsRef.current[index] = el}
            title={section.title}
            content={section.content}
          />
        ))}
      </main>
    </div>
  );
};

export default App;