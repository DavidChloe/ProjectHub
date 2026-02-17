import React from 'react';
import { Link } from 'react-router';
import AuthLayout from '../components/layout/AuthLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Login: React.FC = () => {
  
  const redCardStyle: React.CSSProperties = {
    backgroundColor: 'var(--color-primary-red)',
    padding: '30px',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: 'var(--radius-sm)', 
    boxShadow: 'var(--shadow-card)',
    marginBottom: '20px'
  };

  const titleStyle: React.CSSProperties = {
    margin: '0 0 20px 0',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'var(--color-text-main)'
  };

  const forgotPasswordStyle: React.CSSProperties = {
    display: 'block',
    color: 'var(--color-primary-white)',
    fontSize: '12px',
    textDecoration: 'none',
    marginTop: '-10px',
    marginBottom: '20px',
    fontWeight: 500
  };

  const footerLinkStyle: React.CSSProperties = {
    color: 'var(--color-text-main)',
    fontSize: '14px',
    fontWeight: 500
  };

  return (
    <AuthLayout>
      <div style={redCardStyle}>
        <h2 style={titleStyle}>Connexion</h2>
        
        <form onSubmit={(e) => e.preventDefault()}>
          <Input 
            placeholder="Mail ou telephone" 
            type="text" 
          />
          
          <Input 
            placeholder="Mot de passe" 
            type="password" 
          />
          
          <Link to="/forgot-password" style={forgotPasswordStyle}>
            Mot de passe oublié ?
          </Link>
          
          <div style={{ textAlign: 'center' }}>
            <Button type="submit" variant="primary">
              Connexion
            </Button>
          </div>
        </form>
      </div>

      <div style={footerLinkStyle}>
        Nouveau ici ?{' '}
        <Link 
          to="/creation_account" 
          style={{ color: 'blue', textDecoration: 'underline' }}
        >
          Crées un compte
        </Link>
      </div>
    </AuthLayout>
  );
};

export default Login;