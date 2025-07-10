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
      
      <div className="bg-purple-50 rounded-lg p-4 mb-4">
        <h4 className="font-semibold text-purple-800 mb-2">📖 What These Numbers Mean</h4>
        <p className="text-sm text-gray-700">
          These scores show how much each factor helps the model make accurate predictions. Higher numbers = more important for predicting championships. 
          The scores come from analyzing how much each statistic improves the model's decision-making process.
        </p>
      </div>

      <div className="space-y-3">
        {features.map((feature) => (
          <div key={feature.rank} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
            <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              {feature.rank}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold">{feature.feature}</span>
                <div className="text-right">
                  <span className="text-sm text-purple-600 font-mono">{feature.importance}</span>
                  <div className="text-xs text-gray-500">importance score</div>
                </div>
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
      
      <div className="mt-4 p-3 bg-gray-100 rounded-lg">
        <p className="text-xs text-gray-600">
          <strong>Technical note:</strong> Scores are "Gini importance" values from the Random Forest model, 
          measuring how much each feature reduces prediction uncertainty.
        </p>
      </div>
    </div>
  );
};

export default FeatureImportanceChart;