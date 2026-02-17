import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Link } from 'react-router';

const Home: React.FC = () => {
  
  const sectionHeaderStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E0E0E0', // Le bandeau gris du titre "Projects"
    padding: '10px 20px',
    borderRadius: 'var(--radius-sm)',
    marginBottom: '20px'
  };

  const addButtonStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    backgroundColor: 'var(--color-btn-green)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    color: 'black',
    fontWeight: 'bold',
    border: 'none'
  };

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Responsive grid
    gap: '20px'
  };

  const cardPlaceholderStyle: React.CSSProperties = {
    height: '150px',
    backgroundColor: 'var(--color-btn-bg-grey)',
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer'
  };

  return (
    <DashboardLayout>
      <div style={sectionHeaderStyle}>
        <h3 style={{ margin: 0 }}>Projects</h3>
        <button style={addButtonStyle} title="Nouveau projet">+</button>
      </div>

      <div style={gridStyle}>
        <Link to="/project/1" style={cardPlaceholderStyle} />
        <Link to="/project/2" style={cardPlaceholderStyle} />
      </div>
    </DashboardLayout>
  );
};

export default Home;