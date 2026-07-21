import React from 'react';

export default function BillingDetail({ record, formatCurrency, onClose, onMarkPaid }) {
  if (!record) return null;

  return (
    <div className="detail-panel">
      <div className="detail-panel-header">
        <h2>Billing Detail</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      <div className="detail-panel-body">
        {[
          ['Date',    record.date],
          ['Owner',   record.owner],
          ['Pet',     record.pet],
          ['Service', record.service],
        ].map(([label, value]) => (
          <div key={label} className="detail-row">
            <span className="detail-label">{label}</span>
            <span className="detail-value">{value}</span>
          </div>
        ))}
        <div className="detail-row">
          <span className="detail-label">Amount</span>
          <span className="detail-value" style={{ fontWeight: 600 }}>{formatCurrency(record.amount)}</span>
        </div>
        <div className="detail-row">
          <span className="detail-label">Status</span>
          <span className={`status-badge status-${record.status.toLowerCase()}`}>
            {record.status}
          </span>
        </div>
        <div className="detail-actions">
          {record.status !== 'Paid' && (
            <button
              type="button"
              className="btn btn-success"
              onClick={onMarkPaid}
            >
              Mark as Paid
            </button>
          )}
          <button type="button" className="btn btn-outline" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
