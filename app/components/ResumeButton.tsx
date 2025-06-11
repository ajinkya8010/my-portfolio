"use client";
import { useState } from 'react';
import Image from "next/image";

const ResumeButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  
  const resumeTypes = [
    { 
      id: 'ai-ml', 
      label: 'AI/ML Engineer', 
      path: '/resume/Resume-AI-ML.pdf',
      icon: '🤖',
      color: 'hover:bg-blue-50 hover:text-blue-700'
    },
    { 
      id: 'software', 
      label: 'Software Engineer', 
      path: '/resume/Resume-Software.pdf',
      icon: '💻',
      color: 'hover:bg-green-50 hover:text-green-700'
    },
  ];

  const handleResumeDownload = (resumePath: string, resumeLabel: string) => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = `${resumeLabel.replace(/[^a-zA-Z0-9]/g, '-')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowDropdown(false);
  };

  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before hiding to prevent flickering
    const timeout = setTimeout(() => {
      setShowDropdown(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    // Clear timeout when mouse enters dropdown
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
  };

  const handleDropdownMouseLeave = () => {
    // Hide dropdown when mouse leaves dropdown area
    const timeout = setTimeout(() => {
      setShowDropdown(false);
    }, 150);
    setHoverTimeout(timeout);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className="font-medium text-center px-3 py-3 flex gap-1 justify-center rounded-md transition-all ease-in-out delay-150 bg-[#915EFF] hover:bg-purple-600 duration-300 group"
      >
        <Image
          src="/resume.svg"
          width={24}
          height={24}
          alt="resume"
          className="object-contain animate-pulse"
        />
        <span className="lg:block hidden text-white">Download Resume</span>
        <svg 
          className={`w-4 h-4 ml-1 text-white transition-all duration-300 ${
            showDropdown ? 'rotate-180 scale-110' : 'group-hover:scale-110'
          }`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div 
        className={`absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-300 ease-out transform ${
          showDropdown 
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
            : 'opacity-0 translate-y-2 scale-95 pointer-events-none'
        } z-50`}
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
      >
        {/* Arrow pointing up */}
        <div className="absolute -top-2 right-6 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>
        
        <div className="py-2">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Choose Resume Type
            </p>
          </div>
          
          {resumeTypes.map((resume, index) => (
            <button
              key={resume.id}
              onClick={() => handleResumeDownload(resume.path, resume.label)}
              className={`w-full text-left px-4 py-3 text-sm text-gray-700 transition-all duration-200 flex items-center gap-3 ${resume.color} group/item relative overflow-hidden`}
            >
              {/* Background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-50 transform translate-x-full group-hover/item:translate-x-0 transition-transform duration-300"></div>
              
              <span className="text-lg relative z-10">{resume.icon}</span>
              <div className="relative z-10">
                <div className="font-medium">{resume.label}</div>
                <div className="text-xs text-gray-500 group-hover/item:text-current">
                  Click to download
                </div>
              </div>
              
              {/* Download icon */}
              <svg 
                className="w-4 h-4 ml-auto text-gray-400 group-hover/item:text-current transition-colors duration-200 relative z-10" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
          ))}
          
          {/* Footer */}
          <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
            <p className="text-xs text-gray-500 text-center">
              {resumeTypes.length} resume versions available
            </p>
          </div>
        </div>
      </div>

      {/* Invisible bridge to prevent dropdown from closing when moving mouse */}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 h-2 z-40"></div>
      )}
    </div>
  );
};

export default ResumeButton;