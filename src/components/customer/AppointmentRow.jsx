import React from 'react';

function AppointmentRow({ appointment }) {
  const { pet, service, date, time, vet, status } = appointment;

  return (
    <tr>
      <td>{pet}</td>
      <td>{service}</td>
      <td>{date}</td>
      <td>{time}</td>
      <td>{vet}</td>
      <td>
        <span className={`status-badge status-${status.toLowerCase()}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}

export default AppointmentRow;
