import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate admin login and navigate to admin dashboard
    navigate('/admin/dashboard');
  };

  return (
    <div className="page auth-page">
      <h1>Admin Login</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="admin-email">Admin Email</label>
          <input id="admin-email" type="email" placeholder="Enter admin email" required />
        </div>
        <div className="form-group">
          <label htmlFor="admin-password">Password</label>
          <input id="admin-password" type="password" placeholder="Enter password" required />
        </div>
        <button type="submit" className="btn btn-primary">Login as Admin</button>
      </form>
      <p>Not an admin? <Link to="/login">Customer Login</Link></p>
    </div>
  );
}

export default AdminLogin;
