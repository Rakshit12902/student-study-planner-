// src/components/Dashboard/DashboardHeader.jsx
import React from 'react';

const DashboardHeader = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <i className="fas fa-bell text-gray-500 text-xl"></i>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
        </div>
        <div className="flex items-center space-x-2">
          <img 
            src="https://via.placeholder.com/40" 
            alt="User" 
            className="rounded-full"
          />
          <span className="font-medium">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
