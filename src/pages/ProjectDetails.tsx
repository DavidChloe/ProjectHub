import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { supabase } from '../supabaseClient';
import DashboardLayout from '../components/layout/DashboardLayout';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';

const ProjectDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    if (!id) return;
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single();

    if (!error && data) {
      setProject(data);
      setTitle(data.title);
      setDescription(data.description);
    }
    setLoading(false);
  };

  const handleUpdate = async () => {
    if (!id) return;

    const { error } = await supabase
      .from('projects')
      .update({ title, description })
      .eq('id', id);

    if (!error) {
      setProject({ ...project, title, description });
      setIsEditing(false);
    } else {
      alert("Erreur lors de la mise à jour");
    }
  };

  const handleDelete = async () => {
    if (!id) return;

    if (window.confirm("Es-tu sûr de vouloir supprimer ce projet définitivement ?")) {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (!error) {
        navigate('/');
      } else {
        alert("Erreur lors de la suppression");
      }
    }
  };

  const containerStyle: React.CSSProperties = {
    padding: '20px',
    height: '100%',
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
    flexDirection: 'column',
    position: 'relative'
  };

  const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
  };

  const separatorStyle: React.CSSProperties = {
    border: 'none',
    borderBottom: '1px solid #000',
    margin: '0 0 20px 0',
    width: '100%'
  };

  const contentZoneStyle: React.CSSProperties = {
    backgroundColor: '#9E9E9E',
    flex: 1,
    borderRadius: 'var(--radius-sm)',
    padding: '20px',
    color: 'var(--color-text-main)',
    whiteSpace: 'pre-wrap'
  };

  const textAreaStyle: React.CSSProperties = {
    width: '100%',
    minHeight: '200px',
    padding: '12px',
    borderRadius: 'var(--radius-sm)',
    border: 'none',
    fontFamily: 'Inter, sans-serif',
    resize: 'vertical'
  };

  if (loading) return <DashboardLayout><div>Chargement...</div></DashboardLayout>;

  return (
    <DashboardLayout>
      <div style={containerStyle}>

        <div style={{ width: '100%', maxWidth: '800px', marginBottom: '10px' }}>
          <span
            onClick={() => navigate('/')}
            style={{ cursor: 'pointer', textDecoration: 'underline', fontSize: '14px', color: 'var(--color-btn-text)' }}
          >
             <ArrowLeft /> Retour aux projets
          </span>
        </div>

        <div style={cardStyle}>
          <div style={headerStyle}>
            {isEditing ? (
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Titre du projet"
                style={{ marginBottom: 0, width: '300px', flexGrow: 1 }}
              />
            ) : (
              <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0, flexGrow: 1 }}>
                {project?.title} {project?.id && <span style={{ fontSize: '12px', opacity: 0.5 }}>#{project.id}</span>}
              </h2>
            )}

            <div style={{ display: 'flex', gap: '10px' }}>

              {isEditing ? (
                <>
                  <Button variant="success" onClick={handleUpdate}>Sauvegarder</Button>
                  <Button variant="neutral" onClick={() => setIsEditing(false)}>Annuler</Button>
                </>
              ) : (
                <>
                  <Button variant="danger" onClick={handleDelete}>
                    Supprimer
                  </Button>
                  <Button variant="neutral" onClick={() => setIsEditing(true)}>
                    Édition
                  </Button>
                </>
              )}
            </div>
          </div>

          <hr style={separatorStyle} />

          {isEditing ? (
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '12px', fontWeight: 'bold', marginBottom: '5px', display: 'block' }}>Description</label>
              <textarea
                style={textAreaStyle}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              
            </div>
          ) : (
            <div style={contentZoneStyle}>
              {project?.description || "Aucune description pour ce projet."}
            </div>
          )}

        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectDetails;