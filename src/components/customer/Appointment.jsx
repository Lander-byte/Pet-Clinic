import React from 'react';
import AppointmentDetail from './AppointmentDetail';

const sampleAppointments = [
  { id: 1, pet: 'Buddy',    service: 'Wellness Check',  date: '2026-07-10', time: '10:00 AM', vet: 'Dr. Santos',  status: 'Confirmed' },
  { id: 2, pet: 'Whiskers', service: 'Dental Cleaning', date: '2026-07-18', time: '2:00 PM',  vet: 'Dr. Reyes',   status: 'Pending'   },
  { id: 3, pet: 'Buddy',    service: 'Vaccination',     date: '2026-06-25', time: '11:30 AM', vet: 'Dr. Santos',  status: 'Completed' },
];

function Appointment() {
  return (
    <div className="page">
      <h1>My Appointments</h1>
      <p className="page-subtitle">View your upcoming and past appointments.</p>

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
              <AppointmentDetail key={appt.id} appointment={appt} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Appointment;
