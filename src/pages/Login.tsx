import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import AuthLayout from '../components/layout/AuthLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { supabase } from '../supabaseClient';

const Login: React.FC = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Erreur : " + error.message);
    } else {
      navigate('/');
    }
  };

  return (
    <AuthLayout>
      <div style={redCardStyle}>
        <h2 style={titleStyle}>Connexion</h2>
        
        <form onSubmit={handleLogin}>
          <Input 
            placeholder="Mail ou telephone" 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <Input 
            placeholder="Mot de passe" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          {error && (
            <div style={{ color: 'white', marginBottom: '15px', fontSize: '14px', fontWeight: 'bold' }}>
              {error}
            </div>
          )}

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