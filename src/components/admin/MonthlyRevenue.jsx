import React from 'react';
import RevenueBar from './RevenueBar';
import revenueIcon from "./images/revenue.svg";

const monthlyRevenue = [
  { month: 'Jan', amount: 42500 },
  { month: 'Feb', amount: 38200 },
  { month: 'Mar', amount: 51800 },
  { month: 'Apr', amount: 46300 },
  { month: 'May', amount: 55100 },
  { month: 'Jun', amount: 48700 },
  { month: 'Jul', amount: 32400 },
];

export default function MonthlyRevenue() {
  const maxRevenue = Math.max(...monthlyRevenue.map(m => m.amount));

  const formatCurrency = (amount) =>
    `₱${amount.toLocaleString('en-PH', { minimumFractionDigits: 2 })}`;

  return (
    <div className="card monthly-revenue-card">
      <h3 className="card-title">
        <img src={revenueIcon} alt="Clinic Records" className="card-title-icon" style={{ width: '30px', height: '30px' }} />
        Monthly Revenue
      </h3>
      <div className="revenue-chart">
        {monthlyRevenue.map((m) => {
          const heightPercent = (m.amount / maxRevenue) * 100;
          return (
            <RevenueBar
              key={m.month}
              month={m.month}
              amount={m.amount}
              heightPercent={heightPercent}
              formatCurrency={formatCurrency}
            />
          );
        })}
      </div>
    </div>
  );
}
