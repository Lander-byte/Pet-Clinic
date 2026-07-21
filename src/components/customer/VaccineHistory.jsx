import React from 'react';

const vaccineRecords = [
  { pet: 'Buddy',    vaccine: 'Rabies',  date: '2025-01-10', nextDue: '2026-01-10', vet: 'Dr. Santos' },
  { pet: 'Buddy',    vaccine: 'DHPP',    date: '2025-03-05', nextDue: '2026-03-05', vet: 'Dr. Santos' },
  { pet: 'Whiskers', vaccine: 'FVRCP',   date: '2025-02-14', nextDue: '2026-02-14', vet: 'Dr. Reyes'  },
];

function VaccineHistory() {
  return (
    <div className="section-content">
      <h2>Vaccine History</h2>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Pet</th>
              <th>Vaccine</th>
              <th>Date Given</th>
              <th>Next Due</th>
              <th>Veterinarian</th>
            </tr>
          </thead>
          <tbody>
            {vaccineRecords.map((r, i) => (
              <tr key={i}>
                <td>{r.pet}</td>
                <td>{r.vaccine}</td>
                <td>{r.date}</td>
                <td>{r.nextDue}</td>
                <td>{r.vet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VaccineHistory;
