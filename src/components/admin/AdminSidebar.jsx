import { NavLink } from 'react-router-dom';

export default function AdminSidebar() {
  return (
    <div className="app-sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">🚀</div>
        <span className="logo-text">Workspace Pro</span>
      </div>

      <nav className="sidebar-menu">
        <NavLink to="/dashboard" className="sidebar-link">
          <span className="sidebar-link-icon">📊</span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/profile" className="sidebar-link">
          <span className="sidebar-link-icon">👤</span>
          <span>Profile</span>
        </NavLink>
        <NavLink to="/student-workplace" className="sidebar-link">
          <span className="sidebar-link-icon">🎓</span>
          <span>Student Workspace</span>
        </NavLink>
        <NavLink to="/cashier" className="sidebar-link">
          <span className="sidebar-link-icon">💰</span>
          <span>Cashier</span>
        </NavLink>
        <NavLink to="/todolist" className="sidebar-link">
          <span className="sidebar-link-icon">📝</span>
          <span>Todo List</span>
        </NavLink>
        <NavLink to="/catalogue" className="sidebar-link">
          <span className="sidebar-link-icon">🛍️</span>
          <span>Catalogue</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/" className="logout-btn">
          <span className="sidebar-link-icon">🚪</span>
          <span>Logout</span>
        </NavLink>
      </div>
    </div>
  );
}