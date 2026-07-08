import React from 'react';

function PetOwnerDetail({ owner, onClose }) {
  return (
    <div className="detail-panel">
      <div className="detail-panel-header">
        <h2>Owner Details</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      <div className="detail-panel-body">
        <div className="detail-row">
          <span className="detail-label">Name</span>
          <span className="detail-value">{owner.name}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Email</span>
          <span className="detail-value">{owner.email}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Phone</span>
          <span className="detail-value">{owner.phone}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Pets</span>
          <span className="detail-value">{owner.pets.join(', ')}</span>
        </div>
        <div className="detail-actions">
          <button className="btn btn-primary">Edit Owner</button>
          <button className="btn btn-danger">Remove Owner</button>
        </div>
      </div>
    </div>
  );
}

export default PetOwnerDetail;
