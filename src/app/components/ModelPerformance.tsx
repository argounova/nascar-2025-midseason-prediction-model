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
      
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h4 className="font-semibold mb-2">Model Validation Strategy</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li><strong>Training Period:</strong> 2016-2024 (9 seasons)</li>
          <li><strong>Validation:</strong> Out-of-sample testing on historical championships</li>
          <li><strong>Cross-validation:</strong> Time-series split to prevent data leakage</li>
          <li><strong>Ensemble:</strong> Average of both model probabilities for final predictions</li>
        </ul>
      </div>

      <div className="bg-white border border-purple-200 rounded-xl p-6">
        <h4 className="text-lg font-bold text-purple-600 mb-4">🤖 Why These Two Models?</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 rounded-lg p-4">
            <h5 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
              📈 Logistic Regression
              <span className="text-sm bg-purple-200 px-2 py-1 rounded text-purple-800">Simple & Clear</span>
            </h5>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>What it does:</strong> Looks at each factor (like wins, average finish) and calculates how much each one increases or decreases championship chances.</p>
              <p><strong>Why I chose it:</strong> It's like a simple math formula that's easy to understand and explain. We can see exactly how much each statistic matters.</p>
              <p><strong>How it helps:</strong> Gives us reliable baseline predictions and shows which stats are most important in a straightforward way.</p>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-4">
            <h5 className="font-bold text-purple-700 mb-3 flex items-center gap-2">
              🌳 Random Forest
              <span className="text-sm bg-purple-200 px-2 py-1 rounded text-purple-800">Smart & Complex</span>
            </h5>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>What it does:</strong> Creates hundreds of "decision trees" that each make predictions, then combines them all for a final answer.</p>
              <p><strong>Why I chose it:</strong> It can find complex patterns that simple math might miss, like "drivers who win early but finish poorly later rarely win championships."</p>
              <p><strong>How it helps:</strong> Catches subtle relationships between different statistics and provides more nuanced predictions.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <strong>🎯 Together they're stronger:</strong> The simple model gives us clear insights, while the complex model catches patterns we might miss. 
            By averaging their predictions, we get the best of both approaches - accuracy with explainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelPerformance;