import React from 'react';

function AppointmentDetail({ appointment, onClose }) {
  return (
    <div className="detail-panel">
      <div className="detail-panel-header">
        <h2>Appointment Details</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      <div className="detail-panel-body">
        <div className="detail-row">
          <span className="detail-label">Pet</span>
          <span className="detail-value">{appointment.pet}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Service</span>
          <span className="detail-value">{appointment.service}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Date</span>
          <span className="detail-value">{appointment.date}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Time</span>
          <span className="detail-value">{appointment.time}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Veterinarian</span>
          <span className="detail-value">{appointment.vet}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Status</span>
          <span className={`status-badge status-${appointment.status.toLowerCase()}`}>
            {appointment.status}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AppointmentDetail;
