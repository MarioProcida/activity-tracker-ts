// src/components/Header.tsx
import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        {/* Placeholder per il logo. Sostituisci 'logo.png' con il percorso del tuo logo */}
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
      <h1>Activity Tracker</h1>
    </header>
  );
}

export default Header;