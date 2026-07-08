import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockUsers } from '../../users';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = mockUsers.find(
      (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password && u.role === 'customer'
    );

    if (user) {
      setError('');
      onLogin(user); // App.js state update triggers isCustomer=true → route redirects to /dashboard
    } else {
      setError('Invalid email or password for customer account.');
    }
  };

  return (
    <div className="page auth-page">
      <Link to="/" className="back-link">← Back to Portal Selection</Link>
      <h1>Customer Login</h1>
      <form className="auth-form" onSubmit={handleSubmit}>
        {error && (
          <div style={{ color: '#dc2626', background: '#fee2e2', padding: '0.6rem 0.8rem', borderRadius: '8px', fontSize: '0.85rem', border: '1px solid #fca5a5' }}>
            {error}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
}

export default Login;
