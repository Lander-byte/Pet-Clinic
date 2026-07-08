import React from 'react';

const todayAppointments = [
  { time: '9:00 AM',  pet: 'Buddy',    owner: 'Juan dela Cruz', service: 'Wellness Check'  },
  { time: '10:30 AM', pet: 'Whiskers', owner: 'Maria Santos',   service: 'Dental Cleaning' },
  { time: '2:00 PM',  pet: 'Max',      owner: 'Pedro Reyes',    service: 'Vaccination'     },
];

function DashboardAppointment() {
  return (
    <div className="card dashboard-appointment">
      <h2 className="card-title">📅 Today's Appointments</h2>
      <ul className="appointment-list">
        {todayAppointments.map((a, i) => (
          <li key={i} className="appointment-item">
            <span className="appt-time">{a.time}</span>
            <span className="pet-name">{a.pet}</span>
            <span className="owner-name">{a.owner}</span>
            <span className="service">{a.service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardAppointment;
