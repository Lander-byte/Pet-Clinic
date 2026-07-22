import React from 'react';

function PrescriptionRow({ record }) {
  const { pet, medication, dosage, duration, prescribedDate, vet, status } = record;

  return (
    <tr>
      <td>{pet}</td>
      <td>{medication}</td>
      <td>{dosage}</td>
      <td>{duration}</td>
      <td>{prescribedDate}</td>
      <td>{vet}</td>
      <td>
        <span className={`status-badge status-${status.toLowerCase()}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}

export default PrescriptionRow;
