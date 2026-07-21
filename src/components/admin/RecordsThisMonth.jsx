import React from 'react';
import recordIcon from "./images/record.svg";

export default function RecordsThisMonth({ value }) {
  return (
    <div className="stat-item">
      <img src={recordIcon} alt="Records This Month" className="stat-icon" />
      <span className="stat-value">{value}</span>
      <span className="stat-label">Records This Month</span>
    </div>
  );
}
