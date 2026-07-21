import React from 'react';
import ClinicRecord from './ClinicRecord';
import MonthlyRevenue from './MonthlyRevenue';
import DashboardAppointment from './DashboardAppointment';

function AdminDashboard() {
  return (
    <div className="page">
      <h1>Admin Dashboard</h1>
      <p className="page-subtitle">Overview of clinic activity and records.</p>

      <ClinicRecord />

      <div style={{ marginTop: '1.5rem' }}>
        <MonthlyRevenue />
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <DashboardAppointment />
      </div>
    </div>
  );
}

export default AdminDashboard;
