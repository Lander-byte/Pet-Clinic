import React from 'react';

const prescriptionRecords = [
  { id: 1, pet: 'Buddy',    medication: 'Amoxicillin 250mg',     dosage: '1 tablet, twice daily',   duration: '10 days',  prescribedDate: '2026-05-10', vet: 'Dr. Santos',  status: 'Active'    },
  { id: 2, pet: 'Whiskers', medication: 'Laxatone Paste',        dosage: '1 inch strip, daily',     duration: '14 days',  prescribedDate: '2026-04-22', vet: 'Dr. Reyes',   status: 'Completed' },
  { id: 3, pet: 'Buddy',    medication: 'Heartgard Plus',        dosage: '1 chewable, monthly',     duration: '12 months', prescribedDate: '2026-03-15', vet: 'Dr. Santos',  status: 'Active'    },
  { id: 4, pet: 'Goldie',   medication: 'Melafix Antibacterial', dosage: '5ml per 10 gal, daily',   duration: '7 days',   prescribedDate: '2026-02-08', vet: 'Dr. Reyes',   status: 'Completed' },
];

function Prescriptions() {
  return (
    <div className="section-content">
      <h2>Prescriptions</h2>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Pet</th>
              <th>Medication</th>
              <th>Dosage</th>
              <th>Duration</th>
              <th>Prescribed</th>
              <th>Vet</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {prescriptionRecords.map((rx) => (
              <tr key={rx.id}>
                <td>{rx.pet}</td>
                <td>{rx.medication}</td>
                <td>{rx.dosage}</td>
                <td>{rx.duration}</td>
                <td>{rx.prescribedDate}</td>
                <td>{rx.vet}</td>
                <td>
                  <span className={`status-badge status-${rx.status.toLowerCase()}`}>
                    {rx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Prescriptions;
