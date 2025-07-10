'use client';

import React from 'react';
import DriverCard from './DriverCard';

interface Driver {
  rank: number;
  driver: string;
  probability: number;
  wins: number;
  avgFinish: number;
  points: number;
  projected: number;
}

interface ChampionshipLeadersProps {
  drivers: Driver[];
}

const ChampionshipLeaders = ({ drivers }: ChampionshipLeadersProps) => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 border-l-4 border-orange-500">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        🏆 Championship Leaders & Predictions
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {drivers.map((driver) => (
          <DriverCard key={driver.rank} driver={driver} />
        ))}
      </div>
    </section>
  );
};

export default ChampionshipLeaders;