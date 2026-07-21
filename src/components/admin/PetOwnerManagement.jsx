import React, { useState } from 'react';
import PetOwnerDetail from './PetOwnerDetail';
<<<<<<< HEAD
import PetOwnerRow from './PetOwnerRow';
=======
>>>>>>> 3aae46a63274f2280a158b30ff0a4000dcd59137

const petOwners = [
  { id: 1, name: 'Juan dela Cruz', email: 'juan@email.com', pets: ['Buddy', 'Max'],      phone: '09171234567', status: 'Active'   },
  { id: 2, name: 'Maria Santos',   email: 'maria@email.com', pets: ['Whiskers'],          phone: '09187654321', status: 'Active'   },
  { id: 3, name: 'Pedro Reyes',    email: 'pedro@email.com', pets: ['Goldie', 'Charlie'], phone: '09199876543', status: 'Active'   },
  { id: 4, name: 'Ana Garcia',     email: 'ana@email.com',   pets: ['Luna'],              phone: '09201234567', status: 'Inactive' },
  { id: 5, name: 'Carlos Lim',     email: 'carlos@email.com', pets: ['Mochi', 'Biscuit', 'Pepper'], phone: '09211234567', status: 'Active' },
];

function PetOwnerManagement() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');

  const filtered = petOwners.filter(owner =>
    owner.name.toLowerCase().includes(search.toLowerCase()) ||
    owner.email.toLowerCase().includes(search.toLowerCase()) ||
    owner.phone.includes(search)
  );

  return (
    <div className="page">
      <h1>Pet Owner Management</h1>
      <p className="page-subtitle">Search and manage registered pet owners.</p>

      {/* ── Search Bar ── */}
      <div className="search-bar-container">
        <input
          type="text"
          className="search-bar-input"
          placeholder="Search by name, email, or phone..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <button className="search-bar-clear" onClick={() => setSearch('')}>✕</button>
        )}
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Total Pets</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map(owner => (
<<<<<<< HEAD
                <PetOwnerRow
                  key={owner.id}
                  owner={owner}
                  onView={() => setSelected(owner)}
                />
=======
                <tr key={owner.id}>
                  <td style={{ fontWeight: 600 }}>{owner.name}</td>
                  <td>{owner.phone}</td>
                  <td>{owner.email}</td>
                  <td>{owner.pets.length}</td>
                  <td>
                    <span className={`status-badge status-${owner.status.toLowerCase()}`}>
                      {owner.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => setSelected(owner)}
                    >
                      View
                    </button>
                  </td>
                </tr>
>>>>>>> 3aae46a63274f2280a158b30ff0a4000dcd59137
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '2rem', color: '#64748b' }}>
                  No owners found matching "{search}"
                </td>
              </tr>
            )}
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
