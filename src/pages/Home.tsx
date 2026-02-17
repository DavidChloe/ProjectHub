import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { supabase } from '../supabaseClient';
import { useAuth } from '../context/AuthContext';
import DashboardLayout from '../components/layout/DashboardLayout';
import { Link } from 'react-router';

const Home: React.FC = () => {
  const { session } = useAuth();
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    if (session) {
      fetchProjects();
    }
  }, [session]);

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setProjects(data);
    }
  };

  const createTestProject = async () => {
    if (!session?.user) return;

    const { error } = await supabase.from('projects').insert([
      {
        title: 'Nouveau Projet',
        description: 'Description du projet',
        user_id: session.user.id
      }
    ]);
    if (!error) fetchProjects();
  };

  const sectionHeaderStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
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
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
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
        <button onClick={createTestProject}><Plus /></button>
      </div>

      <div style={gridStyle}>
        {projects.map(project => (
          <Link key={project.id} to={`/project/${project.id}`} style={cardPlaceholderStyle}>
            <div style={{ padding: 10, color: 'var(--color-primary-white)' }}>{project.title}</div>
          </Link>
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Home;