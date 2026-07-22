import React from 'react';

/**
 * StatCard - A generic stat item used inside the stats-grid.
 *
 * Props:
 *   icon  - imported SVG/image src
 *   value - number or string to display
 *   label - text label shown below the value
 */
export default function StatCard({ icon, value, label }) {
  return (
    <div className="stat-item">
      <img src={icon} alt={label} className="stat-icon" />
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
