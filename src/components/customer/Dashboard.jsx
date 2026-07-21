import React, { useState } from 'react';
import VaccineReminder from './VaccineReminder';
import UpcomingAppointment from './UpcomingAppointment';
import PetsMiniCard from './PetsMiniCard';
import PetCard from './PetCard';
import dogIcon from './images/dog.svg';
import catIcon from './images/cat.svg';
import fishIcon from './images/fish.svg';
import birdIcon from './images/bird.svg';
import rabbitIcon from './images/rabbit.svg';
import hamsterIcon from './images/hamster.svg';
import pawIcon from './images/paw.svg';
import plusIcon from './images/plus.svg';
import closeIcon from './images/close.svg';

const defaultPets = [
  { id: 1, name: 'Buddy',    species: 'Dog',  breed: 'Labrador',    age: 3, image: dogIcon },
  { id: 2, name: 'Whiskers', species: 'Cat',  breed: 'Persian',     age: 5, image: catIcon },
  { id: 3, name: 'Goldie',   species: 'Fish', breed: 'Goldfish',    age: 1, image: fishIcon },
];

function Dashboard() {
  const [pets, setPets] = useState(() => {
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

  const [selectedPet, setSelectedPet] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPetName, setNewPetName] = useState('');
  const [newPetSpecies, setNewPetSpecies] = useState('Dog');
  const [newPetBreed, setNewPetBreed] = useState('');
  const [newPetAge, setNewPetAge] = useState('');
  const [newPetEmoji, setNewPetEmoji] = useState(dogIcon);

  const speciesEmojis = {
    Dog: dogIcon,
    Cat: catIcon,
    Fish: fishIcon,
    Bird: birdIcon,
    Rabbit: rabbitIcon,
    Hamster: hamsterIcon,
    Other: pawIcon
  };

  const handleSpeciesChange = (e) => {
    const species = e.target.value;
    setNewPetSpecies(species);
    setNewPetEmoji(speciesEmojis[species] || pawIcon);
  };

  const handleAddPet = (e) => {
    e.preventDefault();
    if (!newPetName.trim()) return;

    const newPet = {
      id: Date.now(),
      name: newPetName,
      species: newPetSpecies,
      breed: newPetBreed || 'Mixed Breed',
      age: parseInt(newPetAge) || 1,
      image: newPetEmoji,
    };

    const updated = [...pets, newPet];
    setPets(updated);
    localStorage.setItem('petClinicPets', JSON.stringify(updated));

    // Reset Form
    setNewPetName('');
    setNewPetSpecies('Dog');
    setNewPetBreed('');
    setNewPetAge('');
    setNewPetEmoji(dogIcon);
    setShowAddModal(false);
  };

  return (
    <div className="page">
      <h1>Dashboard</h1>
      <p className="page-subtitle">Welcome back! Here's what's coming up.</p>

      <div className="dashboard-grid">
        <VaccineReminder />
        <UpcomingAppointment />
      </div>

      {/* Mini Pets section */}
      <section className="card" style={{ marginTop: '2rem' }}>
        <h2 className="card-title"><img src={pawIcon} alt="" className="title-icon" style={{ width: "18px", height: "18px", objectFit: "contain" }} /> My Pets</h2>
        <div className="pets-mini-list">
          {pets.map(pet => (
            <PetsMiniCard
              key={pet.id}
              pet={pet}
              onSelect={() => setSelectedPet(pet)}
              isSelected={selectedPet?.id === pet.id}
            />
          ))}
          <button className="pets-mini-card add-pet-btn" onClick={() => setShowAddModal(true)}>
            <img src={plusIcon} alt="" className="mini-icon" style={{ width: "20px", height: "20px", objectFit: "contain" }} />
            <span className="mini-name" style={{ fontWeight: '600', color: 'var(--accent-rust)' }}>Add Pet</span>
            <span className="mini-species">New Register</span>
          </button>
        </div>

        {/* Selected Pet Detail Card */}
        {selectedPet && (
          <div style={{ marginTop: '1.5rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
            <PetCard pet={selectedPet} onClose={() => setSelectedPet(null)} />
          </div>
        )}
      </section>

      {/* Add Pet Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add a New Pet</h2>
              <button className="close-btn" onClick={() => setShowAddModal(false)}><img src={closeIcon} alt="Close" style={{ width: "14px", height: "14px", objectFit: "contain" }} /></button>
            </div>
            <form onSubmit={handleAddPet} className="modal-form">
              <label>
                Pet Name
                <input
                  type="text"
                  placeholder="e.g. Max"
                  value={newPetName}
                  onChange={(e) => setNewPetName(e.target.value)}
                  required
                />
              </label>

              <label>
                Species
                <select value={newPetSpecies} onChange={handleSpeciesChange}>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Fish">Fish</option>
                  <option value="Bird">Bird</option>
                  <option value="Rabbit">Rabbit</option>
                  <option value="Hamster">Hamster</option>
                  <option value="Other">Other</option>
                </select>
              </label>

              <label>
                Breed
                <input
                  type="text"
                  placeholder="e.g. Golden Retriever"
                  value={newPetBreed}
                  onChange={(e) => setNewPetBreed(e.target.value)}
                />
              </label>

              <label>
                Age (Years)
                <input
                  type="number"
                  min="0"
                  max="30"
                  placeholder="e.g. 2"
                  value={newPetAge}
                  onChange={(e) => setNewPetAge(e.target.value)}
                  required
                />
              </label>

              <label>
                Choose Avatar Icon
                <div className="emoji-selector">
                  {Object.values(speciesEmojis).map((icon) => (
                    <button
                      key={icon}
                      type="button"
                      className={`emoji-btn ${newPetEmoji === icon ? 'selected' : ''}`}
                      onClick={() => setNewPetEmoji(icon)}
                    >
                      <img src={icon} alt="" style={{ width: "22px", height: "22px", objectFit: "contain" }} />
                    </button>
                  ))}
                </div>
              </label>

              <div className="modal-actions">
                <button type="button" className="btn" onClick={() => setShowAddModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Add Pet</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
