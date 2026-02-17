import React from 'react';
import logoSrc from '../../assets/Images/Icons/RedCarreLogo.jpg'; 

interface LogoProps {
  size?: number;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 50, className = '' }) => {
  return (
    <div className={className} style={{ width: size, height: size, flexShrink: 0 }}>
      <img 
        src={logoSrc} 
        alt="Project Hub Logo" 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover',
          display: 'block' 
        }} 
      />
    </div>
  );
};

export default Logo;