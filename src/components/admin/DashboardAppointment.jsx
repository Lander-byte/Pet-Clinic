import React from 'react';
import DashboardAppointmentRow from './DashboardAppointmentRow';

const todayAppointments = [
  { time: '9:00 AM',  pet: 'Buddy',    owner: 'Juan dela Cruz', service: 'Wellness Check',  status: 'Confirmed' },
  { time: '10:30 AM', pet: 'Whiskers', owner: 'Maria Santos',   service: 'Dental Cleaning', status: 'Pending'   },
  { time: '2:00 PM',  pet: 'Max',      owner: 'Pedro Reyes',    service: 'Vaccination',     status: 'Confirmed' },
  { time: '3:30 PM',  pet: 'Luna',     owner: 'Ana Garcia',     service: 'Grooming',        status: 'Pending'   },
  { time: '4:00 PM',  pet: 'Goldie',   owner: 'Carlos Lim',     service: 'Consultation',    status: 'Confirmed' },
];

function DashboardAppointment() {
  return (
    <div className="card dashboard-appointment">
      <h2 className="card-title">Appointments Today</h2>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Pet</th>
              <th>Owner</th>
              <th>Service</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {todayAppointments.map((a, i) => (
              <DashboardAppointmentRow
                key={i}
                appointment={a}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardAppointment;
