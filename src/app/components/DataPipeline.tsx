'use client';

import React from 'react';

interface PipelineStep {
  number: number;
  title: string;
  description: string;
}

const DataPipeline = () => {
  const steps: PipelineStep[] = [
    {
      number: 1,
      title: "Data Cleaning & Transformation",
      description: "Converted \"NA\" strings to proper null values, standardized numeric formats, filtered 2015-2025 data for modern era relevance."
    },
    {
      number: 2,
      title: "Feature Engineering",
      description: "Aggregated race-level data to season-level metrics, calculated derived features (win rates, consistency measures, DNF rates)."
    },
    {
      number: 3,
      title: "Temporal Features",
      description: "Added career progression metrics, previous season performance, and experience variables to capture driver development."
    },
    {
      number: 4,
      title: "Target Variable Creation",
      description: "Binary championship outcome (winner vs. non-winner) and ordinal ranking (top-3, top-5 finishers) for comprehensive modeling."
    }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <h3 className="text-xl font-bold text-green-600 mb-4">🔧 Data Preprocessing Pipeline</h3>
      <div className="space-y-4">
        {steps.map((step) => (
          <div key={step.number} className="flex items-start gap-4">
            <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              {step.number}
            </div>
            <div>
              <h4 className="font-semibold">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataPipeline;