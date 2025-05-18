// src/components/Dashboard/WeeklyOverview.jsx
import React from 'react';
import ProgressChart from './ProgressChart';
import UpcomingExams from './UpcomingExams';

const WeeklyOverview = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="font-bold text-lg mb-4">Weekly Progress</h3>
        <div className="h-64">
          <ProgressChart />
        </div>
      </div>
      <UpcomingExams />
    </div>
  );
};

export default WeeklyOverview;
