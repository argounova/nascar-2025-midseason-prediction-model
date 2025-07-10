'use client';

import React from 'react';

const CompetitiveAnalysis = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-blue-500">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📈 What the Data Tells Us</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-blue-600 mb-3">🎯 Competitive Parity</h3>
          <p className="text-gray-700">
            36 legitimate championship contenders means probability is distributed across many drivers. 
            If evenly distributed, each would have ~2.8% chance. Leaders are barely ahead.
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-blue-600 mb-3">⏱️ Mid-Season Dynamics</h3>
          <p className="text-gray-700">
            17 races remaining (47% of season) provides ample opportunity for dramatic shifts. 
            Historical data shows championships can change drastically in the second half.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAnalysis;