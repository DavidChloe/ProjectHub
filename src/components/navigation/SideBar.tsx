import React from 'react';
import { Link } from 'react-router';

const SideBar: React.FC = () => {
  const sidebarStyle: React.CSSProperties = {
    width: '250px',
    height: '100vh',
    backgroundColor: 'var(--color-bg-light)', // Le gris défini dans variables.css
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    borderRight: '1px solid #ccc'
  };

  const linkStyle: React.CSSProperties = {
    display: 'block',
    padding: '10px 15px',
    color: 'black',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 500,
    marginBottom: '10px',
    borderRadius: 'var(--radius-sm)',
    transition: 'background 0.2s'
  };

  return (
    <aside style={sidebarStyle}>
      <div style={{ marginBottom: '40px', fontWeight: 'bold' }}>Menu</div>
      
      <nav>
        <Link to="/" style={linkStyle}>Accueil</Link>
        <Link to="/edit_user" style={linkStyle}>Paramètres</Link>
      </nav>
    </aside>
  );
};

export default SideBar;