import React, { useState } from 'react';
import AdminAppointmentDetail from './AdminAppointmentDetail';

const appointments = [
  { id: 1, pet: 'Buddy',    owner: 'Juan dela Cruz', service: 'Wellness Check',  date: '2026-07-10', time: '9:00 AM',  vet: 'Dr. Santos', status: 'Confirmed' },
  { id: 2, pet: 'Whiskers', owner: 'Maria Santos',   service: 'Dental Cleaning', date: '2026-07-10', time: '10:30 AM', vet: 'Dr. Reyes',  status: 'Pending'   },
  { id: 3, pet: 'Max',      owner: 'Pedro Reyes',    service: 'Vaccination',     date: '2026-07-11', time: '2:00 PM',  vet: 'Dr. Santos', status: 'Confirmed' },
];

function AppointmentManagement() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="page">
      <h1>Appointment Management</h1>
      <p className="page-subtitle">Click a row to manage an appointment.</p>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Pet</th>
              <th>Owner</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Vet</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(appt => (
              <tr
                key={appt.id}
                className="clickable-row"
                onClick={() => setSelected(appt)}
              >
                <td>{appt.pet}</td>
                <td>{appt.owner}</td>
                <td>{appt.service}</td>
                <td>{appt.date}</td>
                <td>{appt.time}</td>
                <td>{appt.vet}</td>
                <td>
                  <span className={`status-badge status-${appt.status.toLowerCase()}`}>
                    {appt.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <AdminAppointmentDetail
          appointment={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

export default AppointmentManagement;
