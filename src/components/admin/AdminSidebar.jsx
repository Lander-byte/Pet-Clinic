import { NavLink, Link } from 'react-router-dom';

export default function AdminSidebar({ onLogout }) {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">🐾</div>
        <span className="sidebar-logo-text">PET CARE</span>
      </div>

      <nav className="sidebar-menu">
        <NavLink to="/admin/dashboard" className="sidebar-link">
          <span className="sidebar-link-icon">📊</span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/admin/appointments" className="sidebar-link">
          <span className="sidebar-link-icon">📅</span>
          <span>Appointments</span>
        </NavLink>
        <NavLink to="/admin/pet-owners" className="sidebar-link">
          <span className="sidebar-link-icon">👥</span>
          <span>Pet Owners</span>
        </NavLink>
        <NavLink to="/admin/pet-management" className="sidebar-link">
          <span className="sidebar-link-icon">🐾</span>
          <span>Pet Management</span>
        </NavLink>
        <NavLink to="/admin/billing" className="sidebar-link">
          <span className="sidebar-link-icon">💰</span>
          <span>Billing</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <Link to="/" onClick={onLogout} className="sidebar-link logout">
          <span className="sidebar-link-icon">🚪</span>
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
}