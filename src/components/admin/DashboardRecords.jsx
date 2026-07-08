import React from 'react';

function DashboardRecords() {
  const stats = [
    { label: 'Total Patients',     value: 142, icon: '🐾' },
    { label: 'Active Pet Owners',  value: 89,  icon: '👥' },
    { label: 'Records This Month', value: 36,  icon: '📋' },
  ];

  return (
    <div className="card dashboard-records">
      <h2 className="card-title">📊 Clinic Records</h2>
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <span className="stat-icon">{s.icon}</span>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DashboardRecords;
