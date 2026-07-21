import React from 'react';

export default function AppointmentRow({ appointment, onClick }) {
  return (
    <tr className="clickable-row" onClick={onClick}>
      <td>{appointment.pet}</td>
      <td>{appointment.owner}</td>
      <td>{appointment.service}</td>
      <td>{appointment.date}</td>
      <td>{appointment.time}</td>
      <td>{appointment.vet}</td>
      <td>
        <span className={`status-badge status-${appointment.status.toLowerCase()}`}>
          {appointment.status}
        </span>
      </td>
    </tr>
  );
}
