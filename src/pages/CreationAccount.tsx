import React from 'react';
import { Link } from 'react-router';
import AuthLayout from '../components/layout/AuthLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const CreationAccount: React.FC = () => {
  const redCardStyle: React.CSSProperties = {
    backgroundColor: 'var(--color-primary-red)',
    padding: '30px',
    borderRadius: 'var(--radius-sm)',
    boxShadow: 'var(--shadow-card)',
    marginBottom: '20px',
    width: '100%'
  };

  return (
    <AuthLayout>
      <div style={redCardStyle}>
        <h2 style={{ margin: '0 0 20px 0', fontWeight: 'bold' }}>Créer un compte</h2>
        <form>
          <Input placeholder="Mail ou telephone" />
          <Input placeholder="Pseudo" />
          <Input placeholder="Mot de passe" type="password" />
          
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button fullWidth type="submit">Créer</Button>
          </div>
        </form>
      </div>

      <div style={{ fontSize: '14px', fontWeight: 500 }}>
        Déja un compte ?{' '}
        <Link to="/connection" style={{ color: 'blue', textDecoration: 'underline' }}>
          Connectes toi
        </Link>
      </div>
    </AuthLayout>
  );
};

export default CreationAccount;