import React, { useState } from 'react';
import BillingRecordRow from './BillingRecordRow';
import BillingStatCard from './BillingStatCard';
import BillingDetail from './BillingDetail';
import billedIcon from './images/billed.svg';
import collectedIcon from './images/collected.svg';
import outstandingIcon from './images/outstanding.svg';

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
        <BillingStatCard icon={billedIcon}      amount={totalBilled} label="Total Billed" formatCurrency={formatCurrency} />
        <BillingStatCard icon={collectedIcon}   amount={totalPaid}   label="Collected"    formatCurrency={formatCurrency} />
        <BillingStatCard icon={outstandingIcon} amount={totalDue}    label="Outstanding"  formatCurrency={formatCurrency} />
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
              <BillingRecordRow
                key={r.id}
                record={r}
                formatCurrency={formatCurrency}
                onView={() => setViewRecord(r)}
                onMarkPaid={() => handleMarkPaid(r.id)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* ── View Detail Modal ── */}
      {viewRecord && (
        <BillingDetail
          record={viewRecord}
          formatCurrency={formatCurrency}
          onClose={() => setViewRecord(null)}
          onMarkPaid={() => {
            handleMarkPaid(viewRecord.id);
            setViewRecord({ ...viewRecord, status: 'Paid' });
          }}
        />
      )}
    </div>
  );
}

export default BillingRecords;