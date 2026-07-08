import React, { useState } from 'react';
import AppointmentDetail from './AppointmentDetail';

const sampleAppointments = [
  { id: 1, pet: 'Buddy',    service: 'Wellness Check',  date: '2026-07-10', time: '10:00 AM', vet: 'Dr. Santos',  status: 'Confirmed' },
  { id: 2, pet: 'Whiskers', service: 'Dental Cleaning', date: '2026-07-18', time: '2:00 PM',  vet: 'Dr. Reyes',   status: 'Pending'   },
  { id: 3, pet: 'Buddy',    service: 'Vaccination',     date: '2026-06-25', time: '11:30 AM', vet: 'Dr. Santos',  status: 'Completed' },
];

function Appointment() {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  return (
    <div className="page">
      <h1>My Appointments</h1>
      <p className="page-subtitle">Click a row to view appointment details.</p>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Pet</th>
              <th>Service</th>
              <th>Date</th>
              <th>Time</th>
              <th>Vet</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {sampleAppointments.map(appt => (
              <tr
                key={appt.id}
                className="clickable-row"
                onClick={() => setSelectedAppointment(appt)}
              >
                <td>{appt.pet}</td>
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

      {/* Detail panel renders when a row is clicked */}
      {selectedAppointment && (
        <AppointmentDetail
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
        />
      )}
    </div>
  );
}

export default Appointment;
