import React from 'react';

function PetsMiniCard({ pet, onSelect, isSelected }) {
  return (
    <button
      className={`pets-mini-card ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <img src={pet.image} alt="" className="mini-icon" style={{ width: "28px", height: "28px", objectFit: "contain" }} />
      <span className="mini-name">{pet.name}</span>
      <span className="mini-species">{pet.species}</span>
    </button>
  );
}

export default PetsMiniCard;
