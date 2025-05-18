// src/components/Dashboard/Dashboard.jsx
import React from 'react';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import StatsCards from './StatsCards';
import TodaysSchedule from './TodaysSchedule';
import WeeklyOverview from './WeeklyOverview';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-8 overflow-auto">
        <DashboardHeader />
        <StatsCards />
        <TodaysSchedule />
        <WeeklyOverview />
      </div>
    </div>
  );
};

export default Dashboard;
