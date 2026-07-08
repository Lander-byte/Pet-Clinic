import React from 'react';

const billingRecords = [
  { date: '2026-06-25', service: 'Vaccination',     pet: 'Buddy',    amount: '₱500.00',   status: 'Paid'    },
  { date: '2026-07-10', service: 'Wellness Check',  pet: 'Buddy',    amount: '₱800.00',   status: 'Pending' },
  { date: '2026-07-18', service: 'Dental Cleaning', pet: 'Whiskers', amount: '₱1,200.00', status: 'Pending' },
];

function Billing() {
  return (
    <div className="section-content">
      <h2>Billing</h2>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Service</th>
              <th>Pet</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {billingRecords.map((b, i) => (
              <tr key={i}>
                <td>{b.date}</td>
                <td>{b.service}</td>
                <td>{b.pet}</td>
                <td>{b.amount}</td>
                <td>
                  <span className={`status-badge status-${b.status.toLowerCase()}`}>
                    {b.status}
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

export default Billing;
