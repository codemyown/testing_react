// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard">Home</Link>
          </li>
          <li>
            <Link to="/user-list">User List</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Dashboard;
