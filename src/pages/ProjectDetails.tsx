import React from 'react';
import { useParams, useNavigate } from 'react-router';
import DashboardLayout from '../components/layout/DashboardLayout';
import Button from '../components/ui/Button';

const ProjectDetails: React.FC = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const containerStyle: React.CSSProperties = {
    padding: '20px',
    height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const cardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '800px',
    backgroundColor: '#BDBDBD',
    borderRadius: 'var(--radius-md)',
    padding: '30px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column'
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '20px',
    fontWeight: 'bold',
    margin: 0,
    color: '#000'
  };

  const separatorStyle: React.CSSProperties = {
    border: 'none',
    borderBottom: '1px solid #000',
    margin: '0 0 20px 0',
    width: '100%'
  };

  const contentPlaceholderStyle: React.CSSProperties = {
    backgroundColor: '#9E9E9E',
    flex: 1, 
    borderRadius: 'var(--radius-sm)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#424242',
    fontWeight: 500
  };

  return (
    <DashboardLayout>
      <div style={containerStyle}>
        
        <div style={{ width: '100%', maxWidth: '800px', marginBottom: '10px' }}>
          <span 
            onClick={() => navigate('/')} 
            style={{ cursor: 'pointer', textDecoration: 'underline', fontSize: '14px', color: '#666' }}
          >
            Retour aux projets
          </span>
        </div>

        <div style={cardStyle}>
          
          <div style={headerStyle}>
            <h2 style={titleStyle}>Projet {id ? `#${id}` : 'Sélectionné'}</h2>
            
            <Button variant="neutral" style={{ padding: '5px 15px', fontSize: '12px' }}>
              Edition
            </Button>
          </div>

          <hr style={separatorStyle} />

          <div style={contentPlaceholderStyle}>
            Contenue et description du projet
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectDetails;