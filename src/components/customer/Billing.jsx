import React, { useState } from 'react';

const initialInvoices = [
  { id: 'INV-2026-001', pet: 'Buddy',    service: 'Wellness Check',  date: '2026-07-10', amount: 800,    status: 'Pending'  },
  { id: 'INV-2026-002', pet: 'Whiskers', service: 'Dental Cleaning', date: '2026-07-18', amount: 1200,   status: 'Pending'  },
  { id: 'INV-2026-003', pet: 'Buddy',    service: 'Vaccination',     date: '2026-06-25', amount: 500,    status: 'Paid'     },
  { id: 'INV-2026-004', pet: 'Goldie',   service: 'Consultation',    date: '2026-06-15', amount: 350,    status: 'Paid'     },
  { id: 'INV-2026-005', pet: 'Whiskers', service: 'Flea Treatment',  date: '2026-05-30', amount: 600,    status: 'Overdue'  },
];

function Billing() {
  const [invoices, setInvoices] = useState(initialInvoices);
  const [payModal, setPayModal] = useState(null);       // invoice being paid
  const [payMethod, setPayMethod] = useState('');        // 'cash' | 'ewallet'
  const [showReceipt, setShowReceipt] = useState(false);

  const totalDue     = invoices.filter(i => i.status !== 'Paid').reduce((s, i) => s + i.amount, 0);
  const totalPaid    = invoices.filter(i => i.status === 'Paid').reduce((s, i) => s + i.amount, 0);
  const pendingCount = invoices.filter(i => i.status === 'Pending').length;
  const overdueCount = invoices.filter(i => i.status === 'Overdue').length;

  const handlePay = () => {
    if (!payMethod) return;
    setInvoices(prev =>
      prev.map(inv =>
        inv.id === payModal.id ? { ...inv, status: 'Paid' } : inv
      )
    );
    setShowReceipt(true);
  };

  const closeModal = () => {
    setPayModal(null);
    setPayMethod('');
    setShowReceipt(false);
  };

  const formatCurrency = (amount) => `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 2 })}`;

  return (
    <div className="page">
      <h1>Billing</h1>
      <p className="page-subtitle">Manage your invoices and payments.</p>

      {/* ── Payment Status Summary ── */}
      <div className="billing-stats">
        <div className="billing-stat-card">
          <span className="billing-stat-icon">💰</span>
          <div className="billing-stat-info">
            <span className="billing-stat-value">{formatCurrency(totalDue)}</span>
            <span className="billing-stat-label">Total Due</span>
          </div>
        </div>
        <div className="billing-stat-card">
          <span className="billing-stat-icon">✅</span>
          <div className="billing-stat-info">
            <span className="billing-stat-value">{formatCurrency(totalPaid)}</span>
            <span className="billing-stat-label">Total Paid</span>
          </div>
        </div>
        <div className="billing-stat-card">
          <span className="billing-stat-icon">⏳</span>
          <div className="billing-stat-info">
            <span className="billing-stat-value">{pendingCount}</span>
            <span className="billing-stat-label">Pending</span>
          </div>
        </div>
        <div className="billing-stat-card">
          <span className="billing-stat-icon">⚠️</span>
          <div className="billing-stat-info">
            <span className="billing-stat-value">{overdueCount}</span>
            <span className="billing-stat-label">Overdue</span>
          </div>
        </div>
      </div>

      {/* ── Invoice Table ── */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Invoice #</th>
              <th>Pet</th>
              <th>Service</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv) => (
              <tr key={inv.id}>
                <td style={{ fontWeight: 600 }}>{inv.id}</td>
                <td>{inv.pet}</td>
                <td>{inv.service}</td>
                <td>{inv.date}</td>
                <td style={{ fontWeight: 600 }}>{formatCurrency(inv.amount)}</td>
                <td>
                  <span className={`status-badge status-${inv.status.toLowerCase()}`}>
                    {inv.status}
                  </span>
                </td>
                <td>
                  {inv.status !== 'Paid' ? (
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => { setPayModal(inv); setPayMethod(''); setShowReceipt(false); }}
                    >
                      Pay Now
                    </button>
                  ) : (
                    <span style={{ color: '#64748b', fontSize: '0.85rem' }}>—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Pay Bills Modal ── */}
      {payModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {!showReceipt ? (
              <>
                <div className="modal-header">
                  <h2>Pay Bill</h2>
                  <button className="close-btn" onClick={closeModal}>✕</button>
                </div>

                <div className="pay-invoice-summary">
                  <div className="pay-invoice-row">
                    <span>Invoice</span>
                    <strong>{payModal.id}</strong>
                  </div>
                  <div className="pay-invoice-row">
                    <span>Service</span>
                    <strong>{payModal.service}</strong>
                  </div>
                  <div className="pay-invoice-row">
                    <span>Pet</span>
                    <strong>{payModal.pet}</strong>
                  </div>
                  <div className="pay-invoice-row pay-total-row">
                    <span>Amount Due</span>
                    <strong>{formatCurrency(payModal.amount)}</strong>
                  </div>
                </div>

                <div className="pay-method-section">
                  <h3>Select Payment Method</h3>
                  <div className="pay-method-options">
                    <button
                      className={`pay-method-btn ${payMethod === 'cash' ? 'selected' : ''}`}
                      onClick={() => setPayMethod('cash')}
                    >
                      <span className="pay-method-icon">💵</span>
                      <span className="pay-method-label">Cash</span>
                      <span className="pay-method-desc">Pay at the clinic counter</span>
                    </button>
                    <button
                      className={`pay-method-btn ${payMethod === 'ewallet' ? 'selected' : ''}`}
                      onClick={() => setPayMethod('ewallet')}
                    >
                      <span className="pay-method-icon">📱</span>
                      <span className="pay-method-label">E-Wallet</span>
                      <span className="pay-method-desc">GCash, Maya, or PayPal</span>
                    </button>
                  </div>
                </div>

                <div className="modal-actions">
                  <button type="button" className="btn" onClick={closeModal}>Cancel</button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={!payMethod}
                    onClick={handlePay}
                  >
                    Confirm Payment
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="pay-receipt">
                  <div className="pay-receipt-icon">✅</div>
                  <h2>Payment Successful!</h2>
                  <p className="pay-receipt-sub">Your payment has been recorded.</p>

                  <div className="pay-invoice-summary">
                    <div className="pay-invoice-row">
                      <span>Invoice</span>
                      <strong>{payModal.id}</strong>
                    </div>
                    <div className="pay-invoice-row">
                      <span>Amount Paid</span>
                      <strong>{formatCurrency(payModal.amount)}</strong>
                    </div>
                    <div className="pay-invoice-row">
                      <span>Method</span>
                      <strong>{payMethod === 'cash' ? '💵 Cash' : '📱 E-Wallet'}</strong>
                    </div>
                  </div>

                  <button className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }} onClick={closeModal}>
                    Done
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Billing;
