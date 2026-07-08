import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// ── Customer pages ──────────────────────────────────────────────
import Login from './components/customer/Login';
import Register from './components/customer/Register';
import Dashboard from './components/customer/Dashboard';
import MyPets from './components/customer/MyPets';
import Appointment from './components/customer/Appointment';
import MedicalRecords from './components/customer/MedicalRecords';

// ── Admin pages ─────────────────────────────────────────────────
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import AppointmentManagement from './components/admin/AppointmentManagement';
import PetOwnerManagement from './components/admin/PetOwnerManagement';
import BillingReports from './components/admin/BillingReports';

function MainContent() {
  return (
    <Routes>
      {/* Default redirect */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* ── Customer Routes ── */}
      <Route path="/login"           element={<Login />} />
      <Route path="/register"        element={<Register />} />
      <Route path="/dashboard"       element={<Dashboard />} />
      <Route path="/my-pets"         element={<MyPets />} />
      <Route path="/appointments"    element={<Appointment />} />
      <Route path="/medical-records" element={<MedicalRecords />} />

      {/* ── Admin Routes ── */}
      <Route path="/admin/login"        element={<AdminLogin />} />
      <Route path="/admin/dashboard"    element={<AdminDashboard />} />
      <Route path="/admin/appointments" element={<AppointmentManagement />} />
      <Route path="/admin/pets-owners"  element={<PetOwnerManagement />} />
      <Route path="/admin/billing"      element={<BillingReports />} />

      {/* 404 fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default MainContent;
