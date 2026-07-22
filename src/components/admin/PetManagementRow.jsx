import React from 'react';

export default function PetRow({ pet, onToggleStatus, onDelete }) {
  return (
    <tr>
      <td style={{ fontWeight: 600 }}>{pet.name}</td>
      <td>{pet.species}</td>
      <td>{pet.breed}</td>
      <td>{pet.age} yr{pet.age !== 1 ? 's' : ''}</td>
      <td>{pet.owner}</td>
      <td>
        <span className={`status-badge status-${pet.status.toLowerCase()}`}>
          {pet.status}
        </span>
      </td>
      <td>
        <div className="action-btns">
          <button className="btn btn-outline btn-sm" onClick={onToggleStatus}>
            {pet.status === 'Active' ? 'Deactivate' : 'Activate'}
          </button>
          <button className="btn btn-danger btn-sm" onClick={onDelete}>Delete</button>
        </div>
      </td>
    </tr>
  );
}
