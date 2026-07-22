import React from 'react';
import StatCard from './StatCard';
import clinicIcon from "./images/clinic.svg";
import pawIcon from "./images/paw.svg";
import ownerIcon from "./images/owner.svg";
import recordIcon from "./images/record.svg";

export default function ClinicRecord() {
  return (
    <div className="card clinic-record-card">
      <h2 className="card-title">
        <img src={clinicIcon} alt="Clinic Records" className="card-title-icon" style={{ width: '30px', height: '30px' }} />
        Clinic Record
      </h2>

      {/* ── Quick Stats ── */}
      <div className="stats-grid">
        <StatCard icon={pawIcon} value={142} label="Total Patients" />
        <StatCard icon={ownerIcon} value={89} label="Active Pet Owners" />
        <StatCard icon={recordIcon} value={36} label="Records This Month" />
      </div>
    </div>
  );
}
