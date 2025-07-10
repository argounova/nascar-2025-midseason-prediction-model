'use client';

import React from 'react';

interface FeatureImportance {
  rank: number;
  feature: string;
  importance: number;
  description: string;
}

interface FeatureImportanceChartProps {
  features: FeatureImportance[];
}

const FeatureImportanceChart = ({ features }: FeatureImportanceChartProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-purple-600 mb-4">🔍 Feature Importance Analysis</h3>
      <div className="space-y-3">
        {features.map((feature) => (
          <div key={feature.rank} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
            <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              {feature.rank}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold">{feature.feature}</span>
                <span className="text-sm text-purple-600 font-mono">{feature.importance}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: `${(feature.importance / 3.43) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureImportanceChart;