import React from 'react';

const medicalHistoryRecords = [
  { id: 1, pet: 'Buddy',    diagnosis: 'Ear Infection',     treatment: 'Antibiotic ear drops',     date: '2026-05-10', vet: 'Dr. Santos',  notes: 'Follow-up in 2 weeks' },
  { id: 2, pet: 'Whiskers', diagnosis: 'Hairball Blockage', treatment: 'Laxative treatment',       date: '2026-04-22', vet: 'Dr. Reyes',   notes: 'Diet adjustment recommended' },
  { id: 3, pet: 'Buddy',    diagnosis: 'Annual Check-up',   treatment: 'General wellness exam',    date: '2026-03-15', vet: 'Dr. Santos',  notes: 'Healthy, no concerns' },
  { id: 4, pet: 'Goldie',   diagnosis: 'Fin Rot',           treatment: 'Antibacterial bath',       date: '2026-02-08', vet: 'Dr. Reyes',   notes: 'Improve water quality' },
];

function MedicalHistory() {
  return (
    <div className="section-content">
      <h2>Medical History</h2>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Pet</th>
              <th>Diagnosis</th>
              <th>Treatment</th>
              <th>Date</th>
              <th>Veterinarian</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {medicalHistoryRecords.map((r) => (
              <tr key={r.id}>
                <td>{r.pet}</td>
                <td>{r.diagnosis}</td>
                <td>{r.treatment}</td>
                <td>{r.date}</td>
                <td>{r.vet}</td>
                <td>{r.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MedicalHistory;
