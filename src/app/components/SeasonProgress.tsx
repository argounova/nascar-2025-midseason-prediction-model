'use client';

import React from 'react';

const SeasonProgress = () => {
  const racesCompleted = 19;
  const totalRaces = 36;
  const progressPercentage = (racesCompleted / totalRaces) * 100;
  const racesRemaining = totalRaces - racesCompleted;

  return (
    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white py-6 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Text */}
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-2">
            🏁 2025 NASCAR Cup Series Season Progress
          </h3>
          <p className="text-lg">
            Race {racesCompleted} of {totalRaces} Complete • {racesRemaining} Races Remaining
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="bg-white bg-opacity-20 rounded-full h-6 mb-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-yellow-400 to-orange-400 h-full rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-3"
            style={{ width: `${progressPercentage}%` }}
          >
            <span className="text-sm font-bold text-red-800">
              {progressPercentage.toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Progress Details */}
        <div className="flex justify-between items-center text-sm">
          <div className="text-left">
            <span className="font-semibold">Season Start</span>
            <br />
            <span className="opacity-80">Daytona 500</span>
          </div>
          
          <div className="text-center">
            <span className="font-semibold">{progressPercentage.toFixed(1)}% Complete</span>
            <br />
            <span className="opacity-80">Mid-Season Analysis</span>
          </div>
          
          <div className="text-right">
            <span className="font-semibold">Championship</span>
            <br />
            <span className="opacity-80">Phoenix Raceway</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonProgress;