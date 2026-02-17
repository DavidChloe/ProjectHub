import React from 'react';
import DashboardLayout from '../components/layout/DashboardLayout';
import Avatar from '../components/ui/Avatar';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Settings: React.FC = () => {
  
  // --- Styles du Conteneur Principal ---
  const pageContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '40px', // Un peu d'espace par rapport au haut
  };

  const cardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '500px', // On limite la largeur pour que ça ressemble à la maquette
    backgroundColor: 'var(--color-bg-white)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)', // Ombre douce
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden', // Pour que l'en-tête gris ne dépasse pas des coins arrondis
  };

  // --- Styles de l'En-tête (Zone grise avec Avatar) ---
  const headerStyle: React.CSSProperties = {
    backgroundColor: '#E0E0E0', // Gris plus foncé que le fond de page
    padding: '40px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px' // Espace entre Avatar et Nom
  };

  const userNameStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0
  };

  // --- Styles du Formulaire ---
  const formSectionStyle: React.CSSProperties = {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  // Sur cette maquette, les inputs ont un fond gris spécifique
  const grayInputStyle: React.CSSProperties = {
    backgroundColor: '#EEEEEE', 
    fontWeight: 600
  };

  return (
    <DashboardLayout>
      <div style={pageContainerStyle}>
        
        <div style={cardStyle}>
          
          <div style={headerStyle}>
            <Avatar size={80} initials="" />
            <h2 style={userNameStyle}>Pseudo user</h2>
          </div>

          <div style={formSectionStyle}>
            
            <Input 
              label="Changer pseudo" 
              placeholder="Pseudo User" 
              defaultValue="Pseudo User"
              style={grayInputStyle}
            />
            
            <Input 
              label="Changer Nom" 
              placeholder="Nom User" 
              defaultValue="Nom User"
              style={grayInputStyle}
            />
            
            <Input 
              label="Changer mot de passe" 
              placeholder="Mot de passe" 
              type="password"
              defaultValue="********"
              style={grayInputStyle}
            />

            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <Button variant="success" fullWidth>
                Valider
              </Button>
              
              <Button variant="warning" fullWidth>
                Annuler
              </Button>
            </div>

          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;