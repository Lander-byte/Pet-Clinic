import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const navItems = [
  { path: '/dashboard',       label: 'Dashboard',        icon: '🏠' },
  { path: '/my-pets',         label: 'My Pets',          icon: '🐾' },
  { path: '/appointments',    label: 'Appointments',     icon: '📅' },
  { path: '/medical-records', label: 'Medical Records',  icon: '📋' },
];

function CustomerSidebar() {
  return (
    <aside className="sidebar customer-sidebar">
      <div className="sidebar-logo">
        <span className="sidebar-logo-icon">🐾</span>
        <span className="sidebar-logo-text">Pet Clinic</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <span className="sidebar-icon">{icon}</span>
            <span className="sidebar-label">{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <Link to="/login" className="sidebar-link logout">
          <span className="sidebar-icon">🚪</span>
          <span className="sidebar-label">Logout</span>
        </Link>
      </div>
    </aside>
  );
}

export default CustomerSidebar;
