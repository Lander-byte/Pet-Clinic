import React from 'react';

export default function BillingRecordRow({ record, formatCurrency, onView, onMarkPaid }) {
  return (
    <tr>
      <td>{record.date}</td>
      <td>{record.owner}</td>
      <td>{record.pet}</td>
      <td>{record.service}</td>
      <td style={{ fontWeight: 600 }}>{formatCurrency(record.amount)}</td>
      <td>
        <span className={`status-badge status-${record.status.toLowerCase()}`}>
          {record.status}
        </span>
      </td>
      <td>
        <div className="action-btns">
          <button className="btn btn-primary btn-sm" onClick={onView}>View</button>
          {record.status !== 'Paid' && (
            <button className="btn btn-success btn-sm" onClick={onMarkPaid}>Mark Paid</button>
          )}
        </div>
      </td>
    </tr>
  );
}
