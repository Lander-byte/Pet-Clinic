import React from 'react';
import DashboardRecords from './DashboardRecords';
import DashboardAppointment from './DashboardAppointment';

function AdminDashboard() {
  return (
    <div className="page">
      <h1>Admin Dashboard</h1>
      <p className="page-subtitle">Overview of clinic activity and records.</p>

      <div className="dashboard-grid">
        <DashboardRecords />
        <DashboardAppointment />
      </div>
    </div>
  );
}

export default AdminDashboard;
