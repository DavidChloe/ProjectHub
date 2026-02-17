import React from 'react';

type ButtonVariant = 'primary' | 'success' | 'warning' | 'neutral' | 'danger';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  style,
  ...props 
}) => {

    const getBackgroundColor = (v: ButtonVariant) => {
    switch (v) {
      case 'success': return 'var(--color-btn-green)';
      case 'warning': return 'var(--color-btn-orange)';
      case 'danger': return 'var(--color-primary-red)';
      case 'neutral': return 'var(--color-btn-bg-grey)';
      case 'primary': return 'var(--color-btn-bg)';
      default: return 'var(--color-btn-bg)';
    }
  };

  const getTextColor = (v: ButtonVariant) => {
    if (v === 'danger' || v === 'warning') return '#FFFFFF'; 
    return '#000000';
  };
  
  const baseStyle: React.CSSProperties = {
    backgroundColor: getBackgroundColor(variant),
    color: getTextColor(variant),
    border: 'none',
    borderRadius: 'var(--radius-pill)',
    padding: '10px 24px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    width: fullWidth ? '100%' : 'auto',
    transition: 'opacity 0.2s',
    ...style
  };

  return (
    <button style={baseStyle} {...props}>
      {children}
    </button>
  );
};

export default Button;