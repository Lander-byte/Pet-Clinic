import React from 'react';

function AdminAppointmentDetail({ appointment, onClose }) {
  return (
    <div className="detail-panel">
      <div className="detail-panel-header">
        <h2>Appointment Details</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      <div className="detail-panel-body">
        {[
          ['Pet', appointment.pet],
          ['Owner', appointment.owner],
          ['Service', appointment.service],
          ['Date', appointment.date],
          ['Time', appointment.time],
          ['Veterinarian', appointment.vet],
        ].map(([label, value]) => (
          <div key={label} className="detail-row">
            <span className="detail-label">{label}</span>
            <span className="detail-value">{value}</span>
          </div>
        ))}
        <div className="detail-row">
          <span className="detail-label">Status</span>
          <span className={`status-badge status-${appointment.status.toLowerCase()}`}>
            {appointment.status}
          </span>
        </div>
        <div className="detail-actions">
          <button className="btn btn-success">Confirm</button>
          <button className="btn btn-danger">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default AdminAppointmentDetail;
