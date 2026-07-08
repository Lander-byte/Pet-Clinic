import React, { useState } from 'react';
import PetOwnerDetail from './PetOwnerDetail';

const petOwners = [
  { id: 1, name: 'Juan dela Cruz', email: 'juan@email.com', pets: ['Buddy', 'Max'],      phone: '09171234567' },
  { id: 2, name: 'Maria Santos',   email: 'maria@email.com', pets: ['Whiskers'],          phone: '09187654321' },
  { id: 3, name: 'Pedro Reyes',    email: 'pedro@email.com', pets: ['Goldie', 'Charlie'], phone: '09199876543' },
];

function PetOwnerManagement() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="page">
      <h1>Pet Owner Management</h1>
      <p className="page-subtitle">Click a row to view owner details.</p>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Pets</th>
            </tr>
          </thead>
          <tbody>
            {petOwners.map(owner => (
              <tr
                key={owner.id}
                className="clickable-row"
                onClick={() => setSelected(owner)}
              >
                <td>{owner.name}</td>
                <td>{owner.email}</td>
                <td>{owner.phone}</td>
                <td>{owner.pets.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <PetOwnerDetail
          owner={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}

export default PetOwnerManagement;
