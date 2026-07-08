import React from 'react';
import VaccineReminder from './VaccineReminder';
import UpcomingAppointment from './UpcomingAppointment';

function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p className="page-subtitle">Welcome back! Here's what's coming up.</p>

      <div className="dashboard-grid">
        <VaccineReminder />
        <UpcomingAppointment />
      </div>
    </div>
  );
}

export default Dashboard;
