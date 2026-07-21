import React from 'react';
import BillingRecords from './BillingRecords';

function BillingReports() {
  return (
    <div className="page">
      <h1>Billing Reports</h1>
      <p className="page-subtitle">View and manage all clinic billing records.</p>

      <BillingRecords />
    </div>
  );
}

export default BillingReports;
