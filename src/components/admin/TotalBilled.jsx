import React from 'react';
import billedIcon from "./images/billed.svg";

export default function TotalBilled({ amount, formatCurrency }) {
  return (
    <div className="billing-stat-card">
      <img src={billedIcon} alt="Total Billed" className="billing-stat-icon" style={{ width: '30px', height: '30px' }} />
      <div className="billing-stat-info">
        <span className="billing-stat-value">{formatCurrency(amount)}</span>
        <span className="billing-stat-label">Total Billed</span>
      </div>
    </div>
  );
}
