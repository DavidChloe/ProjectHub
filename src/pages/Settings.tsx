import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import DashboardLayout from '../components/layout/DashboardLayout';
import Avatar from '../components/ui/Avatar';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Settings: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' } | null>(null);
  const [pseudo, setPseudo] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const getUserData = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        setPseudo(user.user_metadata?.username || '');
        setFullName(user.user_metadata?.full_name || '');
      }
      setLoading(false);
    };

    getUserData();
  }, []);

  const handleUpdate = async () => {
    setMessage(null);
    
    const updates: any = {
      data: {
        username: pseudo,
        full_name: fullName,
      }
    };

    if (password.length > 0) {
      updates.password = password;
    }

    const { error } = await supabase.auth.updateUser(updates);

    if (error) {
      setMessage({ text: "Erreur : " + error.message, type: 'error' });
    } else {
      setMessage({ text: "Profil mis à jour avec succès !", type: 'success' });
      setPassword('');
    }
  };

  const pageContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '40px',
  };

  const cardStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: 'var(--color-bg-white)',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: '#E0E0E0',
    padding: '40px',
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  };

  const userNameStyle: React.CSSProperties = {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0
  };

  const formSectionStyle: React.CSSProperties = {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  const grayInputStyle: React.CSSProperties = {
    backgroundColor: '#EEEEEE', 
    fontWeight: 600
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div style={{ padding: 40, textAlign: 'center' }}>Chargement de vos infos...</div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div style={pageContainerStyle}>
        
        <div style={cardStyle}>
          
          <div style={headerStyle}>
            <Avatar size={80} initials={pseudo.substring(0, 2).toUpperCase() || ''} />
            <h2 style={userNameStyle}>{pseudo || 'Utilisateur'}</h2>
          </div>

          <div style={formSectionStyle}>
            
            {message && (
              <div style={{ 
                padding: '10px', 
                borderRadius: '4px', 
                backgroundColor: message.type === 'success' ? 'var(--color-btn-green)' : 'var(--color-primary-red)',
                color: message.type === 'success' ? 'var(--color-primary-white)' : 'var(--color-primary-white)',
                marginBottom: '10px',
                textAlign: 'center'
              }}>
                {message.text}
              </div>
            )}

            <Input 
              label="Changer pseudo" 
              placeholder="Votre pseudo" 
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
              style={grayInputStyle}
            />
            
            <Input 
              label="Changer Nom" 
              placeholder="Votre nom complet" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={grayInputStyle}
            />
            
            <Input 
              label="Changer mot de passe" 
              placeholder="Laisser vide pour ne pas changer" 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={grayInputStyle}
            />

            <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <Button variant="success" fullWidth onClick={handleUpdate}>
                Valider
              </Button>
              
              <Button variant="warning" fullWidth onClick={() => window.location.reload()}>
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