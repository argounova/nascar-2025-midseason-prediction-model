'use client';

import React from 'react';

interface Champion {
  year: number;
  driver: string;
  wins: number;
  avgFinish: number;
  points: number;
}

interface HistoricalChampionsProps {
  champions: Champion[];
}

const HistoricalChampions = ({ champions }: HistoricalChampionsProps) => {
  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-2xl p-8 border-l-4 border-blue-500">
      <h2 className="text-3xl font-bold mb-6">📚 Historical Context</h2>
      <p className="mb-6">Recent NASCAR Cup Series champions and their championship-winning statistics:</p>
      <div className="space-y-3">
        {champions.map((champion) => (
          <div key={champion.year} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full font-bold">
                {champion.year}
              </span>
              <strong className="text-black" >{champion.driver}</strong>
            </div>
            <div className="text-sm">
              {champion.wins} wins • {champion.avgFinish} avg finish • {champion.points} points
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm opacity-80">
        <strong>Typical Championship Profile:</strong> 5-10 wins, 7-13 average finish, 1,200-1,450 final points
      </p>
    </section>
  );
};

export default HistoricalChampions;