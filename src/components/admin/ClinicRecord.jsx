import React from 'react';
import TotalPatients from './TotalPatients';
import ActivePetOwners from './ActivePetOwners';
import RecordsThisMonth from './RecordsThisMonth';
import clinicIcon from "./images/clinic.svg";

export default function ClinicRecord() {
  return (
    <div className="card clinic-record-card">
      <h2 className="card-title">
        <img src={clinicIcon} alt="Clinic Records" className="card-title-icon" style={{ width: '30px', height: '30px' }} />
        Clinic Record
      </h2>

      {/* ── Quick Stats ── */}
      <div className="stats-grid">
        <TotalPatients value={142} />
        <ActivePetOwners value={89} />
        <RecordsThisMonth value={36} />
      </div>
    </div>
  );
}
