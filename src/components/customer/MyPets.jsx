import React, { useState } from 'react';
import PetsMiniCard from './PetsMiniCard';
import PetCard from './PetCard';

const samplePets = [
  { id: 1, name: 'Buddy',    species: 'Dog',  breed: 'Labrador',    age: 3, image: '🐶' },
  { id: 2, name: 'Whiskers', species: 'Cat',  breed: 'Persian',     age: 5, image: '🐱' },
  { id: 3, name: 'Goldie',   species: 'Fish', breed: 'Goldfish',    age: 1, image: '🐟' },
];

function MyPets() {
  const [selectedPet, setSelectedPet] = useState(null);

  return (
    <div className="page">
      <h1>My Pets</h1>
      <p className="page-subtitle">Manage and view all your registered pets.</p>

      {/* Mini card list for quick overview */}
      <div className="pets-mini-list">
        {samplePets.map(pet => (
          <PetsMiniCard
            key={pet.id}
            pet={pet}
            onSelect={() => setSelectedPet(pet)}
            isSelected={selectedPet?.id === pet.id}
          />
        ))}
      </div>

      {/* Full detail card for selected pet */}
      {selectedPet && (
        <PetCard pet={selectedPet} onClose={() => setSelectedPet(null)} />
      )}
    </div>
  );
}

export default MyPets;
