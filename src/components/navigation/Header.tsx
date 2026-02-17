import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isUserConnected, setIsUserConnected] = useState(true);

  const headerStyle: React.CSSProperties = {
    width: '100%',
    height: '80px',
    backgroundColor: 'var(--color-bg-light)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 40px',
    boxSizing: 'border-box'
  };

  const titleStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0
  };

  const rightSectionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px'
  };

  const handleLogout = () => {
    setIsUserConnected(false);
    navigate('/connection');
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>Project Hub</h1>
      
      <div style={rightSectionStyle}>
        {isUserConnected ? (
          <>
            <Button variant="danger" onClick={handleLogout}>
              Deconnexion
            </Button>
            
            <Avatar 
              initials="PU" 
              size={45} 
              onClick={() => navigate('/edit_user')} 
            />
          </>
        ) : (
          <>
            <Button variant="primary" onClick={() => navigate('/connection')}>
              Connexion
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;