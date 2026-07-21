import React from 'react';
import syringeIcon from './images/syringe.svg';

function VaccineReminder() {
  const reminders = [
    { pet: 'Buddy', vaccine: 'Rabies', dueDate: '2026-07-15' },
    { pet: 'Whiskers', vaccine: 'FVRCP', dueDate: '2026-07-22' },
  ];

  return (
    <div className="card vaccine-reminder">
      <h2 className="card-title"><img src={syringeIcon} alt="" className="title-icon" style={{ width: "18px", height: "18px", objectFit: "contain" }} /> Vaccine Reminders</h2>
      <ul className="reminder-list">
        {reminders.map((r, i) => (
          <li key={i} className="reminder-item">
            <span className="pet-name">{r.pet}</span>
            <span className="vaccine-name">{r.vaccine}</span>
            <span className="due-date">Due: {r.dueDate}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VaccineReminder;
