import React from 'react';

/**
 * BillingStatCard - A generic billing summary card used inside .billing-stats.
 *
 * Props:
 *   icon           - imported SVG/image src
 *   amount         - numeric amount to display
 *   label          - text label shown below the value
 *   formatCurrency - function to format the amount (e.g. ₱1,000.00)
 */
export default function BillingStatCard({ icon, amount, label, formatCurrency }) {
  return (
    <div className="billing-stat-card">
      <img src={icon} alt={label} className="billing-stat-icon" style={{ width: '30px', height: '30px' }} />
      <div className="billing-stat-info">
        <span className="billing-stat-value">{formatCurrency(amount)}</span>
        <span className="billing-stat-label">{label}</span>
      </div>
    </div>
  );
}
