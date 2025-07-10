'use client';

import React from 'react';

const DataScienceStats = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-green-600 mb-4">📊 Dataset Characteristics</h3>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-3xl font-bold text-green-600">99,495</div>
          <div className="text-sm text-gray-600">Total Records</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-3xl font-bold text-green-600">76</div>
          <div className="text-sm text-gray-600">Years of Data</div>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-3xl font-bold text-green-600">21</div>
          <div className="text-sm text-gray-600">Features</div>
        </div>
      </div>
    </div>
  );
};

export default DataScienceStats;