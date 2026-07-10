import React from 'react';

function PetCard({ pet, onClose }) {
  return (
    <div className="pet-card">
      {onClose && <button className="close-btn" onClick={onClose}>✕</button>}
      <div className="pet-card-header">
        <span className="pet-card-icon">{pet.image}</span>
        <h2 className="pet-card-name">{pet.name}</h2>
      </div>
      <div className="pet-card-details">
        <div className="detail-row">
          <span className="detail-label">Species</span>
          <span className="detail-value">{pet.species}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Breed</span>
          <span className="detail-value">{pet.breed}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Age</span>
          <span className="detail-value">{pet.age} {pet.age === 1 ? 'year' : 'years'}</span>
        </div>
      </div>
    </div>
  );
}

export default PetCard;
