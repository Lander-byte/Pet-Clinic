import React from 'react';

export default function RevenueBar({ month, amount, heightPercent, formatCurrency }) {
  return (
    <div className="revenue-bar-group">
      <span className="revenue-bar-amount">{formatCurrency(amount)}</span>
      <div className="revenue-bar-track">
        <div
          className="revenue-bar-fill"
          style={{ height: `${heightPercent}%` }}
        />
      </div>
      <span className="revenue-bar-label">{month}</span>
    </div>
  );
}
