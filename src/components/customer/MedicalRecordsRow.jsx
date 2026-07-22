import React from 'react';

function MedicalRecordsRow({ record }) {
  const { pet, diagnosis, treatment, date, vet, notes } = record;

  return (
    <tr>
      <td>{pet}</td>
      <td>{diagnosis}</td>
      <td>{treatment}</td>
      <td>{date}</td>
      <td>{vet}</td>
      <td>{notes}</td>
    </tr>
  );
}

export default MedicalRecordsRow;
