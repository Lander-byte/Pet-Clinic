import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockUsers } from '../../users';

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = mockUsers.find(
      (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password && u.role === 'admin'
    );

    if (user) {
      setError('');
      onLogin(user); // App.js state update triggers isAdmin=true → route redirects to /admin/dashboard
    } else {
      setError('Invalid admin email or password.');
    }
  };

  return (
    <div className="page auth-page">
      <h1>Admin Login</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        {error && (
          <div style={{ color: '#dc2626', background: '#fee2e2', padding: '0.6rem 0.8rem', borderRadius: '8px', fontSize: '0.85rem', border: '1px solid #fca5a5' }}>
            {error}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="admin-email">Admin Email</label>
          <input
            id="admin-email"
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login as Admin</button>
      </form>
      <p>Not an admin? <Link to="/login">Customer Login</Link></p>
    </div>
  );
}

export default AdminLogin;
