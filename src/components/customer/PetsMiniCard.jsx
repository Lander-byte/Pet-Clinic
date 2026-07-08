import React from 'react';

function PetsMiniCard({ pet, onSelect, isSelected }) {
  return (
    <button
      className={`pets-mini-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <span className="mini-icon">{pet.image}</span>
      <span className="mini-name">{pet.name}</span>
      <span className="mini-species">{pet.species}</span>
    </button>
  );
}

export default PetsMiniCard;
