import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PortalSelection.css';

function PortalSelection() {
  const navigate = useNavigate();

  return (
    <div className="portal-selection-container">
      <div className="portal-selection-header">
        <div className="portal-logo">🐾</div>
        <h1>Pet Clinic Portal</h1>
        <p>Please select your gateway to continue</p>
      </div>

      <div className="portal-cards-grid">
        {/* Customer Portal Card */}
        <div 
          className="portal-card customer-portal" 
          onClick={() => navigate('/login')}
        >
          <div className="portal-card-icon">🐶</div>
          <h2>Customer Portal</h2>
          <p>Book appointments, view medical records, and manage your pets' vaccine history.</p>
          <button className="portal-btn btn-customer">
            Enter Customer Portal
          </button>
        </div>

        {/* Admin Portal Card */}
        <div 
          className="portal-card admin-portal" 
          onClick={() => navigate('/admin/login')}
        >
          <div className="portal-card-icon">🩺</div>
          <h2>Admin Portal</h2>
          <p>Manage appointments, update billing records, and view pet owners' information.</p>
          <button className="portal-btn btn-admin">
            Enter Admin Portal
          </button>
        </div>
      </div>

      <div className="portal-selection-footer">
        © 2026 Pet Clinic Management System. All rights reserved.
      </div>
    </div>
  );
}

export default PortalSelection;
