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
      <div className="flex overflow-x-auto">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap transition-colors font-medium ${
              activeSection === section.id
                ? 'bg-orange-500 text-white border-b-2 border-orange-600'
                : 'text-gray-600 hover:text-orange-500 hover:bg-gray-50'
            }`}
          >
            <span className="text-lg">{section.icon}</span>
            {section.title}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;