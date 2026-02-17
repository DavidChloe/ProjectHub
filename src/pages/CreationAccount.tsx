import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { supabase } from '../supabaseClient';
import AuthLayout from '../components/layout/AuthLayout';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const CreationAccount: React.FC = () => {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const redCardStyle: React.CSSProperties = {
    backgroundColor: 'var(--color-primary-red)',
    padding: '30px',
    borderRadius: 'var(--radius-sm)',
    boxShadow: 'var(--shadow-card)',
    marginBottom: '20px',
    width: '100%'
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: pseudo, 
        },
      },
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate('/'); 
    }
  };

  return (
    <AuthLayout>
      <div style={redCardStyle}>
        <h2 style={{ margin: '0 0 20px 0', fontWeight: 'bold', fontSize: '18px' }}>
          Créer un compte
        </h2>
        
        <form onSubmit={handleRegister}>
          <Input 
            placeholder="Mail ou telephone" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <Input 
            placeholder="Pseudo" 
            type="text"
            value={pseudo}
            onChange={(e) => setPseudo(e.target.value)}
            required
          />
          
          <Input 
            placeholder="Mot de passe" 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          {error && (
            <div style={{ color: 'white', marginBottom: '15px', fontSize: '14px', fontWeight: 'bold' }}>
              {error}
            </div>
          )}
          
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <Button fullWidth type="submit" disabled={loading}>
              {loading ? 'Création...' : 'Créer'}
            </Button>
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