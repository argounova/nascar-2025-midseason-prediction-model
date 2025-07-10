'use client';

import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import SeasonProgress from './components/SeasonProgress';
import ChampionshipLeaders from './components/ChampionshipLeaders';
import CompetitiveAnalysis from './components/CompetitiveAnalysis';
import DataScienceStats from './components/DataScienceStats';
import DataPipeline from './components/DataPipeline';
import ModelPerformance from './components/ModelPerformance';
import FeatureImportanceChart from './components/FeatureImportanceChart';
import HistoricalChampions from './components/HistoricalChampions';

// Types
interface Driver {
  rank: number;
  driver: string;
  probability: number;
  wins: number;
  avgFinish: number;
  points: number;
  projected: number;
}

interface FeatureImportance {
  rank: number;
  feature: string;
  importance: number;
  description: string;
}

interface Champion {
  year: number;
  driver: string;
  wins: number;
  avgFinish: number;
  points: number;
}

interface NavigationItem {
  id: string;
  title: string;
  icon: string;
}

const NASCARChampionshipApp = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');

  const sections: NavigationItem[] = [
    { id: 'overview', title: 'Championship Predictions', icon: '🏆' },
    { id: 'methodology', title: 'Data Science Methodology', icon: '🔬' },
    { id: 'models', title: 'Model Performance', icon: '📊' },
    { id: 'historical', title: 'Historical Context', icon: '📚' }
  ];

  const championshipData: Driver[] = [
    { 
      rank: 1, 
      driver: 'Kyle Larson', 
      probability: 2.5, 
      wins: 3, 
      avgFinish: 12.7, 
      points: 613, 
      projected: 2199 
    },
    { 
      rank: 2, 
      driver: 'Denny Hamlin', 
      probability: 2.4, 
      wins: 3, 
      avgFinish: 13.3, 
      points: 582, 
      projected: 2091 
    },
    { 
      rank: 3, 
      driver: 'Chase Elliott', 
      probability: 0.8, 
      wins: 1, 
      avgFinish: 10.6, 
      points: 616, 
      projected: 1877 
    }
  ];

  const featureImportance: FeatureImportance[] = [
    { rank: 1, feature: 'Laps Led', importance: 3.43, description: 'Indicates speed, dominance, and ability to control races' },
    { rank: 2, feature: 'Race Wins', importance: 2.84, description: 'Direct correlation with championship success and playoff advancement' },
    { rank: 3, feature: 'Driver Rating', importance: 2.35, description: 'Composite metric of consistent performance across all conditions' },
    { rank: 4, feature: 'Average Finish', importance: 1.75, description: 'Consistency metric - avoiding poor finishes' },
    { rank: 5, feature: 'Top-10 Rate', importance: 1.48, description: 'Reliability and steady point accumulation' }
  ];

  const historicalChampions: Champion[] = [
    { year: 2024, driver: 'Kyle Larson', wins: 6, avgFinish: 12.9, points: 1183 },
    { year: 2023, driver: 'William Byron', wins: 6, avgFinish: 11.0, points: 1255 },
    { year: 2022, driver: 'Chase Elliott', wins: 5, avgFinish: 12.5, points: 1195 },
    { year: 2021, driver: 'Kyle Larson', wins: 10, avgFinish: 9.08, points: 1452 },
    { year: 2020, driver: 'Kevin Harvick', wins: 9, avgFinish: 7.33, points: 1394 }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            <ChampionshipLeaders drivers={championshipData} />
            <CompetitiveAnalysis />
          </div>
        );
      
      case 'methodology':
        return (
          <section className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-500">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              🔬 Data Science Methodology
            </h2>
            <div className="space-y-6">
              <DataScienceStats />
              <DataPipeline />
            </div>
          </section>
        );
      
      case 'models':
        return (
          <section className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 border-l-4 border-purple-500">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              📊 Model Architecture & Performance
            </h2>
            <div className="space-y-6">
              <ModelPerformance />
              <FeatureImportanceChart features={featureImportance} />
            </div>
          </section>
        );
      
      case 'historical':
        return <HistoricalChampions champions={historicalChampions} />;
      
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl min-h-screen">
        <Header />
        <Navigation 
          sections={sections} 
          activeSection={activeSection} 
          onSectionChange={setActiveSection} 
        />
        <SeasonProgress />
        <main className="p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default NASCARChampionshipApp;