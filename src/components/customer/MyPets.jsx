import React, { useState } from 'react';
import PetCard from './PetCard';

const defaultPets = [
  { id: 1, name: 'Buddy',    species: 'Dog',  breed: 'Labrador',    age: 3, image: '🐶' },
  { id: 2, name: 'Whiskers', species: 'Cat',  breed: 'Persian',     age: 5, image: '🐱' },
  { id: 3, name: 'Goldie',   species: 'Fish', breed: 'Goldfish',    age: 1, image: '🐟' },
];

function MyPets() {
  const [pets] = useState(() => {
    const saved = localStorage.getItem('petClinicPets');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return defaultPets;
      }
    }
    return defaultPets;
  });

  return (
    <div className="page">
      <h1>My Pets</h1>
      <p className="page-subtitle">Manage and view all your registered pets.</p>

      {pets.length === 0 ? (
        <p className="no-pets-message">No pets registered yet. Add a pet from the Dashboard!</p>
      ) : (
        <div className="pets-list-grid">
          {pets.map(pet => (
            <PetCard
              key={pet.id}
              pet={pet}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MyPets;
