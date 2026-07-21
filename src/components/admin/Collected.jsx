import React from 'react';
import collectedIcon from "./images/collected.svg";

export default function Collected({ amount, formatCurrency }) {
  return (
    <div className="billing-stat-card">
      <img src={collectedIcon} alt="Collected" className="billing-stat-icon" style={{ width: '30px', height: '30px' }} />
      <div className="billing-stat-info">
        <span className="billing-stat-value">{formatCurrency(amount)}</span>
        <span className="billing-stat-label">Collected</span>
      </div>
    </div>
  );
}
