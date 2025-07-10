'use client';

import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 text-center py-16 px-8">
        <div className="bg-white text-orange-500 font-bold text-3xl px-6 py-3 rounded-xl inline-block mb-6 shadow-lg">
          NASCAR
        </div>
        <h1 className="text-5xl font-bold mb-4">
          2025 Cup Series Championship Analysis
        </h1>
        <p className="text-xl opacity-90 mb-6">
          Machine Learning Predictions & Data Science Insights
        </p>
        <div className="bg-white bg-opacity-20 backdrop-blur-sm px-6 py-3 rounded-full inline-block">
          📅 Analysis Date: July 10, 2025 • Mid-Season Report
        </div>
      </div>
    </header>
  );
};

export default Header;