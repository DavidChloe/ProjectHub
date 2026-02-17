import React from 'react';

interface AvatarProps {
  initials?: string;
  imageUrl?: string;
  size?: number;
  onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ 
  initials = '', 
  imageUrl, 
  size = 40,
  onClick 
}) => {
  const containerStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    backgroundColor: 'var(--color-avatar-brown)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: size * 0.4,
    cursor: onClick ? 'pointer' : 'default',
    overflow: 'hidden',
    border: 0
  };

  if (imageUrl) {
    return (
      <img 
        src={imageUrl} 
        alt="Avatar" 
        style={{width: '100%', height: '100%', objectFit: 'cover'}} 
        onClick={onClick} 
      />
    );
  }

  return (
    <div style={containerStyle} onClick={onClick}>
      {initials}
    </div>
  );
};

export default Avatar;