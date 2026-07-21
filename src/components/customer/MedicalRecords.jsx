import React, { useState } from 'react';
import MedicalHistory from './MedicalHistory';
import VaccineHistory from './VaccineHistory';
import Prescriptions from './Prescriptions';
import MedRecSidebar from './MedRecSidebar';

const sections = ['Medical History', 'Vaccinations', 'Prescriptions'];

function MedicalRecords() {
  const [activeSection, setActiveSection] = useState('Medical History');

  return (
    <div className="page medical-records-page">
      <h1>Medical Records</h1>

      <div className="med-records-layout">
        {/* In-page sidebar nav */}
        <MedRecSidebar
          sections={sections}
          activeSection={activeSection}
          onSelect={setActiveSection}
        />

        {/* Content area changes based on sidebar selection */}
        <div className="med-records-content">
          {activeSection === 'Medical History' && <MedicalHistory />}
          {activeSection === 'Vaccinations'    && <VaccineHistory />}
          {activeSection === 'Prescriptions'   && <Prescriptions />}
        </div>
      </div>
    </div>
  );
}

export default MedicalRecords;
