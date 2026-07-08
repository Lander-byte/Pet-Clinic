import React from 'react';

const records = [
  { date: '2026-06-25', owner: 'Juan dela Cruz', pet: 'Buddy',    service: 'Vaccination',     amount: '₱500.00',   status: 'Paid'    },
  { date: '2026-07-10', owner: 'Juan dela Cruz', pet: 'Buddy',    service: 'Wellness Check',  amount: '₱800.00',   status: 'Pending' },
  { date: '2026-07-10', owner: 'Maria Santos',   pet: 'Whiskers', service: 'Dental Cleaning', amount: '₱1,200.00', status: 'Pending' },
  { date: '2026-07-11', owner: 'Pedro Reyes',    pet: 'Max',      service: 'Vaccination',     amount: '₱500.00',   status: 'Paid'    },
];

function BillingRecords() {
  const total = '₱3,000.00';

  return (
    <div className="section-content">
      <div className="billing-summary">
        <span className="billing-total-label">Total Billed</span>
        <span className="billing-total-value">{total}</span>
      </div>

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
            </tr>
          </thead>
          <tbody>
            {records.map((r, i) => (
              <tr key={i}>
                <td>{r.date}</td>
                <td>{r.owner}</td>
                <td>{r.pet}</td>
                <td>{r.service}</td>
                <td>{r.amount}</td>
                <td>
                  <span className={`status-badge status-${r.status.toLowerCase()}`}>
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BillingRecords;
