import React, { useState } from 'react';
import PetRow from './PetRow';

const initialPets = [
  { id: 1, name: 'Buddy', species: 'Dog', breed: 'Golden Retriever', age: 3, owner: 'Juan dela Cruz', status: 'Active' },
  { id: 2, name: 'Whiskers', species: 'Cat', breed: 'Persian', age: 2, owner: 'Maria Santos', status: 'Active' },
  { id: 3, name: 'Max', species: 'Dog', breed: 'Bulldog', age: 5, owner: 'Pedro Reyes', status: 'Active' },
  { id: 4, name: 'Goldie', species: 'Fish', breed: 'Goldfish', age: 1, owner: 'Pedro Reyes', status: 'Active' },
  { id: 5, name: 'Luna', species: 'Cat', breed: 'Siamese', age: 4, owner: 'Ana Garcia', status: 'Inactive' },
  { id: 6, name: 'Charlie', species: 'Dog', breed: 'Poodle', age: 2, owner: 'Pedro Reyes', status: 'Active' },
  { id: 7, name: 'Mochi', species: 'Cat', breed: 'Ragdoll', age: 1, owner: 'Carlos Lim', status: 'Active' },
  { id: 8, name: 'Biscuit', species: 'Dog', breed: 'Shih Tzu', age: 6, owner: 'Carlos Lim', status: 'Active' },
];

function PetManagement() {
  const [pets, setPets] = useState(initialPets);
  const [search, setSearch] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const filtered = pets.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.owner.toLowerCase().includes(search.toLowerCase()) ||
    p.species.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setPets(prev => prev.filter(p => p.id !== id));
    setDeleteConfirm(null);
  };

  const toggleStatus = (id) => {
    setPets(prev => prev.map(p =>
      p.id === id ? { ...p, status: p.status === 'Active' ? 'Inactive' : 'Active' } : p
    ));
  };

  return (
    <div className="page">
      <h1>Pet Management</h1>
      <p className="page-subtitle">Search and manage all registered pets.</p>

      {/* ── Search Bar ── */}
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar-input"
          placeholder="Search by name, owner, or species..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button className="search-bar-clear" onClick={() => setSearch('')}>✕</button>
        )}
      </div>

      {/* ── Pet Table ── */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Species</th>
              <th>Breed</th>
              <th>Age</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map(pet => (
                <PetRow
                  key={pet.id}
                  pet={pet}
                  onToggleStatus={() => toggleStatus(pet.id)}
                  onDelete={() => setDeleteConfirm(pet)}
                />
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                  No pets found matching "{search}"
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ── Delete Confirmation ── */}
      {deleteConfirm && (
        <div className="modal-overlay" onClick={() => setDeleteConfirm(null)}>
          <div className="modal-content modal-sm" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Delete Pet</h2>
              <button className="close-btn" onClick={() => setDeleteConfirm(null)}>✕</button>
            </div>
            <p style={{ margin: '1rem 0', color: '#64748b' }}>
              Are you sure you want to delete <strong>{deleteConfirm.name}</strong>? This action cannot be undone.
            </p>
            <div className="modal-actions">
              <button type="button" className="btn" onClick={() => setDeleteConfirm(null)}>Cancel</button>
              <button type="button" className="btn btn-danger" onClick={() => handleDelete(deleteConfirm.id)}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PetManagement;
