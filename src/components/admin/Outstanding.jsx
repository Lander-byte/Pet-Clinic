import React from 'react';
import outstandingIcon from "./images/outstanding.svg";

export default function Outstanding({ amount, formatCurrency }) {
  return (
    <div className="billing-stat-card">
      <img src={outstandingIcon} alt="Outstanding" className="billing-stat-icon" style={{ width: '30px', height: '30px' }} />
      <div className="billing-stat-info">
        <span className="billing-stat-value">{formatCurrency(amount)}</span>
        <span className="billing-stat-label">Outstanding</span>
      </div>
    </div>
  );
}
