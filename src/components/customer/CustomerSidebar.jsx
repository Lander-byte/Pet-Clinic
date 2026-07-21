import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


// Small Paw Logo SVG Component
const PawLogoSmall = () => (
  <svg width="28" height="28" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M49.9999 87.5C31.5422 87.5 16.6666 76.5417 16.6666 60.4167C16.6666 52.0833 22.9166 43.75 31.2499 43.75C34.4284 43.75 37.1425 45.4167 39.068 47.7818C42.2743 44.9351 46.0336 43.75 49.9999 43.75C53.9662 43.75 57.7255 44.9351 60.9317 47.7818C62.8573 45.4167 65.5714 43.75 68.7499 43.75C77.0833 43.75 83.3333 52.0833 83.3333 60.4167C83.3333 76.5417 68.4576 87.5 49.9999 87.5Z" fill="var(--accent-rust)"/>
    <path d="M22.9167 35.4167C26.3685 35.4167 29.1667 31.6853 29.1667 27.0833C29.1667 22.4814 26.3685 18.75 22.9167 18.75C19.4649 18.75 16.6667 22.4814 16.6667 27.0833C16.6667 31.6853 19.4649 35.4167 22.9167 35.4167Z" fill="var(--accent-rust)"/>
    <path d="M77.0833 35.4167C80.5351 35.4167 83.3333 31.6853 83.3333 27.0833C83.3333 22.4814 80.5351 18.75 77.0833 18.75C73.6316 18.75 70.8333 22.4814 70.8333 27.0833C70.8333 31.6853 73.6316 35.4167 77.0833 35.4167Z" fill="var(--accent-rust)"/>
    <path d="M41.6667 29.1667C45.1185 29.1667 47.9167 24.5025 47.9167 18.75C47.9167 12.9975 45.1185 8.33333 41.6667 8.33333C38.2149 8.33333 35.4167 12.9975 35.4167 18.75C35.4167 24.5025 38.2149 29.1667 41.6667 29.1667Z" fill="var(--accent-rust)"/>
    <path d="M58.3333 29.1667C61.7851 29.1667 64.5833 24.5025 64.5833 18.75C64.5833 12.9975 61.7851 8.33333 58.3333 8.33333C54.8815 8.33333 52.0833 12.9975 52.0833 18.75C52.0833 24.5025 54.8815 29.1667 58.3333 29.1667Z" fill="var(--accent-rust)"/>
    <path d="M49.9999 72.9167C49.9999 72.9167 58.3333 66.6667 58.3333 60.4167C58.3333 57.071 55.6178 54.1667 52.0833 54.1667C50.6033 54.1667 49.9999 55.4167 49.9999 55.4167C49.9999 55.4167 49.3966 54.1667 47.9166 54.1667C44.3821 54.1667 41.6666 57.071 41.6666 60.4167C41.6666 66.6667 49.9999 72.9167 49.9999 72.9167Z" fill="var(--primary-sage)"/>
  </svg>
);

const navItems = [
  { path: '/dashboard',       label: 'Dashboard' },
  { path: '/my-pets',         label: 'My Pets' },
  { path: '/appointments',    label: 'Appointments' },
  { path: '/medical-records', label: 'Medical Records' },
  { path: '/billing',         label: 'Billing' },
];

function CustomerSidebar({ onLogout }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <PawLogoSmall />
        <span className="sidebar-logo-text">PET CARE</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ path, label }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <span className="sidebar-label">{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <Link to="/" onClick={onLogout} className="sidebar-link logout">
          <span className="sidebar-label">Logout</span>
        </Link>
      </div>
    </aside>
  );
}

export default CustomerSidebar;
