import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const navItems = [
  { path: '/admin/dashboard',    label: 'Dashboard',         icon: '📊' },
  { path: '/admin/appointments', label: 'Appointments',      icon: '📅' },
  { path: '/admin/pets-owners',  label: 'Pet Owners',        icon: '👥' },
  { path: '/admin/billing',      label: 'Billing Reports',   icon: '💰' },
];

function AdminSidebar({ onLogout }) {
  return (
    <aside className="sidebar admin-sidebar">
      <div className="sidebar-logo">
        <span className="sidebar-logo-icon">⚕️</span>
        <span className="sidebar-logo-text">Admin Panel</span>
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
        <Link to="/admin/login" onClick={onLogout} className="sidebar-link logout">
          <span className="sidebar-icon">🚪</span>
          <span className="sidebar-label">Logout</span>
        </Link>
      </div>
    </aside>
  );
}

export default AdminSidebar;
