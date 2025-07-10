'use client';

import React from 'react';

interface NavigationItem {
  id: string;
  title: string;
  icon: string;
}

interface NavigationProps {
  sections: NavigationItem[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const Navigation = ({ sections, activeSection, onSectionChange }: NavigationProps) => {
  return (
    <nav className="bg-gray-100 border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                  activeSection === section.id
                    ? 'bg-orange-500 text-white border-2 border-orange-600 shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-300 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600'
                }`}
              >
                <span className="text-lg">{section.icon}</span>
                <span className="whitespace-nowrap">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;