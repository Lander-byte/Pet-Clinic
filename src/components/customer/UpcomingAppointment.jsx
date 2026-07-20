import React from 'react';
import calendarIcon from './images/calendar.svg';

function UpcomingAppointment() {
  const appointments = [
    { pet: 'Buddy', service: 'Wellness Check', date: '2026-07-10', time: '10:00 AM' },
    { pet: 'Whiskers', service: 'Dental Cleaning', date: '2026-07-18', time: '2:00 PM' },
  ];

  return (
    <div className="card upcoming-appointment">
      <h2 className="card-title"><img src={calendarIcon} alt="" className="title-icon" style={{ width: "18px", height: "18px", objectFit: "contain" }} /> Upcoming Appointments</h2>
      <ul className="appointment-list">
        {appointments.map((a, i) => (
          <li key={i} className="appointment-item">
            <span className="pet-name">{a.pet}</span>
            <span className="service">{a.service}</span>
            <span className="appt-date">{a.date} at {a.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpcomingAppointment;
