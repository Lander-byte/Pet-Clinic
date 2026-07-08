import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="page auth-page">
      <h1>Create Account</h1>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input id="fullname" type="text" placeholder="Enter your full name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="Create a password" />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Register;
