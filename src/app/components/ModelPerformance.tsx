'use client';

import React from 'react';

const ModelPerformance = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-purple-600 mb-4">🎯 Model Performance Metrics</h3>
      <div className="grid md:grid-cols-4 gap-4 mb-6">
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="text-3xl font-bold text-purple-600">99.2%</div>
          <div className="text-sm text-gray-600">Logistic Regression Accuracy</div>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="text-3xl font-bold text-purple-600">98.1%</div>
          <div className="text-sm text-gray-600">Random Forest Accuracy</div>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="text-3xl font-bold text-purple-600">9</div>
          <div className="text-sm text-gray-600">Training Seasons</div>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-lg">
          <div className="text-3xl font-bold text-purple-600">500</div>
          <div className="text-sm text-gray-600">RF Trees</div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold mb-2">Model Validation Strategy</h4>
        <p className="text-sm text-gray-600">
          <strong>Training Period:</strong> 2016-2024 (9 seasons) • 
          <strong>Validation:</strong> Out-of-sample testing on historical championships • 
          <strong>Cross-validation:</strong> Time-series split to prevent data leakage • 
          <strong>Ensemble:</strong> Average of both model probabilities for final predictions
        </p>
      </div>
    </div>
  );
};

export default ModelPerformance;