// src/components/Dashboard/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-indigo-700 text-white p-4">
      <div className="flex items-center space-x-2 mb-8">
        <i className="fas fa-book-open text-2xl"></i>
        <h1 className="text-xl font-bold">Study Planner</h1>
      </div>
      
      <nav>
        <ul className="space-y-2">
          <li>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                `flex items-center space-x-2 p-2 rounded ${isActive ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`
              }
            >
              <i className="fas fa-home"></i>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/timetable"
              className={({ isActive }) => 
                `flex items-center space-x-2 p-2 rounded ${isActive ? 'bg-indigo-800' : 'hover:bg-indigo-600'}`
              }
            >
              <i className="fas fa-calendar-alt"></i>
              <span>Timetable</span>
            </NavLink>
          </li>
          {/* Add other navigation links similarly */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
