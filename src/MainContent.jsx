import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// ── Portal Selection ───────────────────────────────────────────
import PortalSelection from './components/PortalSelection';

// ── Customer pages ──────────────────────────────────────────────
import Login from './components/customer/Login';
import Register from './components/customer/Register';
import Dashboard from './components/customer/Dashboard';
import MyPets from './components/customer/MyPets';
import Appointment from './components/customer/Appointment';
import MedicalRecords from './components/customer/MedicalRecords';
import Billing from './components/customer/Billing';

// ── Admin pages ─────────────────────────────────────────────────
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import AppointmentManagement from './components/admin/AppointmentManagement';
import PetOwnerManagement from './components/admin/PetOwnerManagement';
import PetManagement from './components/admin/PetManagement';
import BillingReports from './components/admin/BillingReports';

function MainContent({ user, onLogin }) {
  const isCustomer = user && user.role === 'customer';
  const isAdmin = user && user.role === 'admin';

  return (
    <Routes>
      {/* Landing selection portal */}
      <Route path="/" element={<PortalSelection />} />

      {/* ── Customer Routes ── */}
      <Route path="/login"           element={isCustomer ? <Navigate to="/dashboard" replace /> : <Login onLogin={onLogin} />} />
      <Route path="/register"        element={isCustomer ? <Navigate to="/dashboard" replace /> : <Register />} />
      <Route path="/dashboard"       element={isCustomer ? <Dashboard /> : <Navigate to="/login" replace />} />
      <Route path="/my-pets"         element={isCustomer ? <MyPets /> : <Navigate to="/login" replace />} />
      <Route path="/appointments"    element={isCustomer ? <Appointment /> : <Navigate to="/login" replace />} />
      <Route path="/medical-records" element={isCustomer ? <MedicalRecords /> : <Navigate to="/login" replace />} />
      <Route path="/billing"          element={isCustomer ? <Billing /> : <Navigate to="/login" replace />} />

      {/* ── Admin Routes ── */}
      <Route path="/admin/login"        element={isAdmin ? <Navigate to="/admin/dashboard" replace /> : <AdminLogin onLogin={onLogin} />} />
      <Route path="/admin/dashboard"    element={isAdmin ? <AdminDashboard /> : <Navigate to="/admin/login" replace />} />
      <Route path="/admin/appointments" element={isAdmin ? <AppointmentManagement /> : <Navigate to="/admin/login" replace />} />
      <Route path="/admin/pets-owners"      element={isAdmin ? <PetOwnerManagement /> : <Navigate to="/admin/login" replace />} />
      <Route path="/admin/pet-management"  element={isAdmin ? <PetManagement /> : <Navigate to="/admin/login" replace />} />
      <Route path="/admin/billing"          element={isAdmin ? <BillingReports /> : <Navigate to="/admin/login" replace />} />

      {/* 404 fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default MainContent;
