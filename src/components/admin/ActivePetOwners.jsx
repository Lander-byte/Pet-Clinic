import React from 'react';
import ownerIcon from "./images/owner.svg";

export default function ActivePetOwners({ value }) {
  return (
    <div className="stat-item">
      <img src={ownerIcon} alt="Active Pet Owners" className="stat-icon" />
      <span className="stat-value">{value}</span>
      <span className="stat-label">Active Pet Owners</span>
    </div>
  );
}
