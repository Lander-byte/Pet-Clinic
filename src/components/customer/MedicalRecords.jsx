import React, { useState } from 'react';
import VaccineHistory from './VaccineHistory';
import MedRecSidebar from './MedRecSidebar';
import Billing from './Billing';

const sections = ['Vaccine History', 'Billing'];

function MedicalRecords() {
  const [activeSection, setActiveSection] = useState('Vaccine History');

  return (
    <div className="page medical-records-page">
      <h1>Medical Records</h1>

      <div className="med-records-layout">
        {/* In-page sidebar nav — not a Route */}
        <MedRecSidebar
          sections={sections}
          activeSection={activeSection}
          onSelect={setActiveSection}
        />

        {/* Content area changes based on sidebar selection */}
        <div className="med-records-content">
          {activeSection === 'Vaccine History' && <VaccineHistory />}
          {activeSection === 'Billing'         && <Billing />}
        </div>
      </div>
    </div>
  );
}

export default MedicalRecords;
