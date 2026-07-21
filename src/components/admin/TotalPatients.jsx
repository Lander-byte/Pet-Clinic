import React from 'react';
import pawIcon from "./images/paw.svg";

export default function TotalPatients({ value }) {
  return (
    <div className="stat-item">
      <img src={pawIcon} alt="Total Patients" className="stat-icon" />
      <span className="stat-value">{value}</span>
      <span className="stat-label">Total Patients</span>
    </div>
  );
}
