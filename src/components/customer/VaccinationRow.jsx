import React from 'react';

function VaccinationRow({ record }) {
  const { pet, vaccine, date, nextDue, vet } = record;

  return (
    <tr>
      <td>{pet}</td>
      <td>{vaccine}</td>
      <td>{date}</td>
      <td>{nextDue}</td>
      <td>{vet}</td>
    </tr>
  );
}

export default VaccinationRow;
