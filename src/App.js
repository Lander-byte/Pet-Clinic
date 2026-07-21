import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import CustomerSidebar from './components/customer/CustomerSidebar';
import AdminSidebar from './components/admin/AdminSidebar';
import MainContent from './MainContent';

function AppContent() {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('petClinicUser');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem('petClinicUser', JSON.stringify(loggedInUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('petClinicUser');
  };

  const isLoggedIn = !!user;

  return (
    <div className="app-container">
      {user && user.role === 'customer' && <CustomerSidebar onLogout={handleLogout} />}
      {user && user.role === 'admin'    && <AdminSidebar    onLogout={handleLogout} />}
      <main className={`main-wrapper${!isLoggedIn ? ' full-width' : ''}`}>
        <MainContent user={user} onLogin={handleLogin} />
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
