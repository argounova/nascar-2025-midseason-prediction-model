'use client';

import React from 'react';

interface Driver {
  rank: number;
  driver: string;
  probability: number;
  wins: number;
  avgFinish: number;
  points: number;
  projected: number;
}

interface DriverCardProps {
  driver: Driver;
}

const DriverCard = ({ driver }: DriverCardProps) => {
  return (
    <div
      className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-transform hover:scale-105 ${
        driver.rank === 1 ? 'border-yellow-400 bg-gradient-to-br from-yellow-50 to-white' : 'border-gray-200'
      }`}
    >
      <div className="text-center mb-4">
        <div className="text-2xl font-bold text-gray-800 mb-2">
          {driver.rank}. {driver.driver}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
          <div
            className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${Math.max(driver.probability * 10, 5)}%` }}
          ></div>
        </div>
        <div className="text-lg font-bold text-orange-500">
          Championship Probability: {driver.probability}%
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-orange-500">{driver.wins}</div>
          <div className="text-sm text-gray-600">Wins</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-orange-500">{driver.avgFinish}</div>
          <div className="text-sm text-gray-600">Avg Finish</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-orange-500">{driver.points}</div>
          <div className="text-sm text-gray-600">Current Points</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <div className="text-2xl font-bold text-orange-500">{driver.projected.toLocaleString()}</div>
          <div className="text-sm text-gray-600">Projected</div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;