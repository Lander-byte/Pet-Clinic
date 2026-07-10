import React, { useState } from "react";
import "./CustomerDashboard.css";

const myPets = [
  { id: "pet-1", name: "Buddy", breed: "Golden Retriever", age: "3 years", sex: "Male", emoji: "🐕" },
  { id: "pet-2", name: "Milo", breed: "Persian Cat", age: "2 years", sex: "Male", emoji: "🐈" },
  { id: "pet-3", name: "Luna", breed: "Beagle", age: "1 year", sex: "Female", emoji: "🐕" },
];

const upcomingAppointments = [
  { id: "apt-1", petName: "Buddy", petType: "dog", service: "General Check-up", date: "May 22, 2026", time: "10:00 AM", status: "Confirmed" },
  { id: "apt-2", petName: "Milo", petType: "cat", service: "Vaccination", date: "Jun 5, 2026", time: "2:00 PM", status: "Pending" },
];

const vaccineReminders = [
  { id: "vax-1", petName: "Buddy", vaccine: "Rabies", dueDate: "May 30, 2026", urgency: "soon" },
  { id: "vax-2", petName: "Milo", vaccine: "Bordetella", dueDate: "Jul 15, 2026", urgency: "upcoming" },
];

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: "🏠" },
  { key: "my-pets", label: "My Pets", icon: "🐾" },
  { key: "appointments", label: "Appointments", icon: "📅" },
  { key: "medical-records", label: "Medical Records", icon: "📋" },
  { key: "profile", label: "Profile", icon: "👤" },
];

export default function CustomerDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-brand-mark">🐶</div>
          <div className="sidebar-brand-text">
            <strong>Happy Paws</strong>
            <span>VET CLINIC</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={"sidebar-nav-item " + (activeNav === item.key ? "active" : "")}
              onClick={() => setActiveNav(item.key)}
            >
              <span className="sidebar-nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer-note">
          <strong>Need help?</strong>
          Call us at (02) 8123-4567 for urgent pet care questions.
        </div>
      </aside>

      <div className="dashboard-main">
        <div className="dashboard-content">
          <header className="dash-header">
            <div className="dash-header-text">
              <h1>Welcome back, Ian! 👋</h1>
              <p>Here's what's happening with your pets today.</p>
            </div>
            <div className="dash-header-right">
              <span className="dash-header-date">{today}</span>
              <div className="dash-header-avatar">MS</div>
            </div>
          </header>

          <div className="section-row">
            <section className="card">
              <div className="card-header">
                <h2>📅 Upcoming Appointment</h2>
                <button className="card-link-btn">View All</button>
              </div>
              {upcomingAppointments.map((apt) => (
                <div className="appointment-item" key={apt.id}>
                  <div className="appointment-icon">{apt.petType === "cat" ? "🐈" : "🐕"}</div>
                  <div className="appointment-details">
                    <strong>{apt.petName} — {apt.service}</strong>
                    <span>{apt.date} • {apt.time}</span>
                  </div>
                  <span className={"status-pill " + apt.status.toLowerCase()}>{apt.status}</span>
                </div>
              ))}
            </section>

            <section className="card">
              <div className="card-header">
                <h2>💉 Vaccine Reminder</h2>
                <button className="card-link-btn">View All</button>
              </div>
              {vaccineReminders.map((v) => (
                <div className="vaccine-item" key={v.id}>
                  <div className="vaccine-icon">💉</div>
                  <div className="vaccine-details">
                    <strong>{v.petName} — {v.vaccine}</strong>
                    <span>Due {v.dueDate}</span>
                  </div>
                  <span className="vaccine-due">{v.urgency === "soon" ? "Due soon" : "Upcoming"}</span>
                </div>
              ))}
            </section>
          </div>

          <section className="pets-section">
            <div className="card-header">
              <h2>🐾 My Pets</h2>
              <button className="card-link-btn">View All</button>
            </div>
            <div className="pets-row">
              {myPets.map((pet) => (
                <div className="pet-mini-card" key={pet.id}>
                  <div className="pet-mini-avatar">{pet.emoji}</div>
                  <strong>{pet.name}</strong>
                  <span>{pet.breed}</span>
                  <div className="pet-meta">
                    <span className="pet-tag">{pet.sex}</span>
                    <span className="pet-tag">{pet.age}</span>
                  </div>
                </div>
              ))}
              <div className="pet-mini-card add-pet">
                <span className="plus-icon">+</span>
                Add Pet
              </div>
            </div>
          </section>
        </div>

        <footer className="dash-footer">
          <div className="paw-divider">🐾 🐾 🐾</div>
          Happy Paws Vet Clinic — 123 Pet Lovers St., Cebu City, PH · © 2026
        </footer>
      </div>
    </div>
  );
}