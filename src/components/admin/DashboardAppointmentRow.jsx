import React from 'react';

export default function DashboardAppointmentRow({ appointment }) {
  return (
    <tr>
      <td style={{ fontWeight: 600 }}>{appointment.time}</td>
      <td>{appointment.pet}</td>
      <td>{appointment.owner}</td>
      <td>{appointment.service}</td>
      <td>
        <span className={`status-badge status-${appointment.status.toLowerCase()}`}>
          {appointment.status}
        </span>
      </td>
    </tr>
  );
}
