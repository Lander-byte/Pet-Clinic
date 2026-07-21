import React, { useState } from 'react';
import billedIcon from "./images/billed.svg";
import collectedIcon from "./images/collected.svg";
import outstandingIcon from "./images/outstanding.svg";
import closeIcon from "./images/close.svg";

const initialRecords = [
  { id: 1, date: '2026-06-25', owner: 'Juan dela Cruz', pet: 'Buddy',    service: 'Vaccination',     amount: 500,    status: 'Paid'    },
  { id: 2, date: '2026-07-10', owner: 'Juan dela Cruz', pet: 'Buddy',    service: 'Wellness Check',  amount: 800,    status: 'Pending' },
  { id: 3, date: '2026-07-10', owner: 'Maria Santos',   pet: 'Whiskers', service: 'Dental Cleaning', amount: 1200,   status: 'Pending' },
  { id: 4, date: '2026-07-11', owner: 'Pedro Reyes',    pet: 'Max',      service: 'Vaccination',     amount: 500,    status: 'Paid'    },
  { id: 5, date: '2026-07-05', owner: 'Carlos Lim',     pet: 'Mochi',    service: 'Grooming',        amount: 650,    status: 'Overdue' },
  { id: 6, date: '2026-06-30', owner: 'Ana Garcia',     pet: 'Luna',     service: 'Flea Treatment',  amount: 400,    status: 'Paid'    },
];

function BillingRecords() {
  const [records, setRecords] = useState(initialRecords);
  const [viewRecord, setViewRecord] = useState(null);

  const formatCurrency = (amount) =>
    `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 2 })}`;

  const totalBilled = records.reduce((sum, r) => sum + r.amount, 0);
  const totalPaid   = records.filter(r => r.status === 'Paid').reduce((sum, r) => sum + r.amount, 0);
  const totalDue    = records.filter(r => r.status !== 'Paid').reduce((sum, r) => sum + r.amount, 0);

  const handleMarkPaid = (id) => {
    setRecords(prev => prev.map(r =>
      r.id === id ? { ...r, status: 'Paid' } : r
    ));
  };

  return (
    <div className="section-content">
      {/* ── Summary Cards ── */}
      <div className="billing-stats">
        <div className="billing-stat-card">
          <img src={billedIcon} alt="Total Billed" className="billing-stat-icon" style={{ width: '30px', height: '30px' }} />
          <div className="billing-stat-info">
            <span className="billing-stat-value">{formatCurrency(totalBilled)}</span>
            <span className="billing-stat-label">Total Billed</span>
          </div>
        </div>
        <div className="billing-stat-card">
          <img src={collectedIcon} alt="Collected" className="billing-stat-icon" style={{ width: '30px', height: '30px' }} />
          <div className="billing-stat-info">
            <span className="billing-stat-value">{formatCurrency(totalPaid)}</span>
            <span className="billing-stat-label">Collected</span>
          </div>
        </div>
        <div className="billing-stat-card">
          <img src={outstandingIcon} alt="Outstanding" className="billing-stat-icon" style={{ width: '30px', height: '30px' }} />
          <div className="billing-stat-info">
            <span className="billing-stat-value">{formatCurrency(totalDue)}</span>
            <span className="billing-stat-label">Outstanding</span>
          </div>
        </div>
      </div>

      {/* ── Records Table ── */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Owner</th>
              <th>Pet</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {records.map((r) => (
              <tr key={r.id}>
                <td>{r.date}</td>
                <td>{r.owner}</td>
                <td>{r.pet}</td>
                <td>{r.service}</td>
                <td style={{ fontWeight: 600 }}>{formatCurrency(r.amount)}</td>
                <td>
                  <span className={`status-badge status-${r.status.toLowerCase()}`}>
                    {r.status}
                  </span>
                </td>
                <td>
                  <div className="action-btns">
                    <button className="btn btn-primary btn-sm" onClick={() => setViewRecord(r)}>View</button>
                    {r.status !== 'Paid' && (
                      <button className="btn btn-success btn-sm" onClick={() => handleMarkPaid(r.id)}>Mark Paid</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── View Detail Modal ── */}
      {viewRecord && (
        <div className="modal-overlay" onClick={() => setViewRecord(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Billing Detail</h2>
              <button className="close-btn" onClick={() => setViewRecord(null)}>
                <img src={closeIcon} alt="Close" style={{ width: '14px', height: '14px' }} />
              </button>
            </div>
            <div className="pay-invoice-summary">
              {[
                ['Date',    viewRecord.date],
                ['Owner',   viewRecord.owner],
                ['Pet',     viewRecord.pet],
                ['Service', viewRecord.service],
              ].map(([label, value]) => (
                <div key={label} className="pay-invoice-row">
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
              <div className="pay-invoice-row pay-total-row">
                <span>Amount</span>
                <strong>{formatCurrency(viewRecord.amount)}</strong>
              </div>
            </div>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
              <span className={`status-badge status-${viewRecord.status.toLowerCase()}`} style={{ fontSize: '1rem', padding: '0.5rem 1.25rem' }}>
                {viewRecord.status}
              </span>
            </div>
            <div className="modal-actions">
              <button type="button" className="btn" onClick={() => setViewRecord(null)}>Close</button>
              {viewRecord.status !== 'Paid' && (
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => { handleMarkPaid(viewRecord.id); setViewRecord({ ...viewRecord, status: 'Paid' }); }}
                >
                  Mark as Paid
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BillingRecords;