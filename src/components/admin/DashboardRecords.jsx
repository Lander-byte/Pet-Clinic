import React from 'react';

const monthlyRevenue = [
  { month: 'Jan', amount: 42500 },
  { month: 'Feb', amount: 38200 },
  { month: 'Mar', amount: 51800 },
  { month: 'Apr', amount: 46300 },
  { month: 'May', amount: 55100 },
  { month: 'Jun', amount: 48700 },
  { month: 'Jul', amount: 32400 },
];

function DashboardRecords() {
  const stats = [
    { label: 'Total Patients',     value: 142, icon: '🐾' },
    { label: 'Active Pet Owners',  value: 89,  icon: '👥' },
    { label: 'Records This Month', value: 36,  icon: '📋' },
  ];

  const maxRevenue = Math.max(...monthlyRevenue.map(m => m.amount));

  const formatCurrency = (amount) =>
    `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 2 })}`;

  return (
    <div className="card dashboard-records">
      <h2 className="card-title">📊 Clinic Records</h2>

      {/* ── Quick Stats ── */}
      <div className="stats-grid">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <span className="stat-icon">{s.icon}</span>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Monthly Revenue Chart ── */}
      <h3 className="revenue-section-title">💰 Monthly Revenue</h3>
      <div className="revenue-chart">
        {monthlyRevenue.map((m) => {
          const heightPercent = (m.amount / maxRevenue) * 100;
          return (
            <div key={m.month} className="revenue-bar-group">
              <span className="revenue-bar-amount">{formatCurrency(m.amount)}</span>
              <div className="revenue-bar-track">
                <div
                  className="revenue-bar-fill"
                  style={{ height: `${heightPercent}%` }}
                />
              </div>
              <span className="revenue-bar-label">{m.month}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DashboardRecords;
