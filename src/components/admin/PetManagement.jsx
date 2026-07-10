import React, { useState } from 'react';

const initialPets = [
  { id: 1, name: 'Buddy',    species: 'Dog',  breed: 'Golden Retriever', age: 3, owner: 'Juan dela Cruz', status: 'Active'   },
  { id: 2, name: 'Whiskers', species: 'Cat',  breed: 'Persian',          age: 2, owner: 'Maria Santos',   status: 'Active'   },
  { id: 3, name: 'Max',      species: 'Dog',  breed: 'Bulldog',          age: 5, owner: 'Pedro Reyes',    status: 'Active'   },
  { id: 4, name: 'Goldie',   species: 'Fish', breed: 'Goldfish',         age: 1, owner: 'Pedro Reyes',    status: 'Active'   },
  { id: 5, name: 'Luna',     species: 'Cat',  breed: 'Siamese',          age: 4, owner: 'Ana Garcia',     status: 'Inactive' },
  { id: 6, name: 'Charlie',  species: 'Dog',  breed: 'Poodle',           age: 2, owner: 'Pedro Reyes',    status: 'Active'   },
  { id: 7, name: 'Mochi',    species: 'Cat',  breed: 'Ragdoll',          age: 1, owner: 'Carlos Lim',     status: 'Active'   },
  { id: 8, name: 'Biscuit',  species: 'Dog',  breed: 'Shih Tzu',         age: 6, owner: 'Carlos Lim',     status: 'Active'   },
];

function PetManagement() {
  const [pets, setPets] = useState(initialPets);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editPet, setEditPet] = useState(null);
  const [form, setForm] = useState({ name: '', species: 'Dog', breed: '', age: '', owner: '' });
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const filtered = pets.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.owner.toLowerCase().includes(search.toLowerCase()) ||
    p.species.toLowerCase().includes(search.toLowerCase())
  );

  const openAdd = () => {
    setEditPet(null);
    setForm({ name: '', species: 'Dog', breed: '', age: '', owner: '' });
    setShowModal(true);
  };

  const openEdit = (pet) => {
    setEditPet(pet);
    setForm({ name: pet.name, species: pet.species, breed: pet.breed, age: pet.age.toString(), owner: pet.owner });
    setShowModal(true);
  };

  const handleSave = () => {
    if (!form.name || !form.breed || !form.age || !form.owner) return;
    if (editPet) {
      setPets(prev => prev.map(p =>
        p.id === editPet.id
          ? { ...p, name: form.name, species: form.species, breed: form.breed, age: parseInt(form.age), owner: form.owner }
          : p
      ));
    } else {
      const newPet = {
        id: Math.max(...pets.map(p => p.id)) + 1,
        name: form.name,
        species: form.species,
        breed: form.breed,
        age: parseInt(form.age),
        owner: form.owner,
        status: 'Active',
      };
      setPets(prev => [...prev, newPet]);
    }
    setShowModal(false);
  };

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
      <p className="page-subtitle">Add, edit, and manage all registered pets.</p>

      {/* ── Search + Add ── */}
      <div className="management-toolbar">
        <div className="search-bar-container" style={{ flex: 1, marginBottom: 0 }}>
          <span className="search-bar-icon">🔍</span>
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
        <button className="btn btn-primary" onClick={openAdd}>
          + Add Pet
        </button>
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
                <tr key={pet.id}>
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
                      <button className="btn btn-primary btn-sm" onClick={() => openEdit(pet)}>Edit</button>
                      <button className="btn btn-outline btn-sm" onClick={() => toggleStatus(pet.id)}>
                        {pet.status === 'Active' ? 'Deactivate' : 'Activate'}
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => setDeleteConfirm(pet)}>Delete</button>
                    </div>
                  </td>
                </tr>
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

      {/* ── Add / Edit Modal ── */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editPet ? 'Edit Pet' : 'Add New Pet'}</h2>
              <button className="close-btn" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <div className="modal-form">
              <div className="form-group">
                <label>Pet Name</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. Buddy" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Species</label>
                  <select value={form.species} onChange={(e) => setForm({ ...form, species: e.target.value })}>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    <option value="Bird">Bird</option>
                    <option value="Fish">Fish</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Breed</label>
                  <input type="text" value={form.breed} onChange={(e) => setForm({ ...form, breed: e.target.value })} placeholder="e.g. Golden Retriever" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Age (years)</label>
                  <input type="number" min="0" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} placeholder="e.g. 3" />
                </div>
                <div className="form-group">
                  <label>Owner</label>
                  <input type="text" value={form.owner} onChange={(e) => setForm({ ...form, owner: e.target.value })} placeholder="e.g. Juan dela Cruz" />
                </div>
              </div>
            </div>
            <div className="modal-actions">
              <button type="button" className="btn" onClick={() => setShowModal(false)}>Cancel</button>
              <button
                type="button"
                className="btn btn-primary"
                disabled={!form.name || !form.breed || !form.age || !form.owner}
                onClick={handleSave}
              >
                {editPet ? 'Save Changes' : 'Add Pet'}
              </button>
            </div>
          </div>
        </div>
      )}

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
