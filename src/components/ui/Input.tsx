import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({ label, fullWidth = true, style, ...props }) => {
  const containerStyle: React.CSSProperties = {
    marginBottom: '16px',
    width: fullWidth ? '100%' : 'auto',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '6px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: 'var(--color-text-main)',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: 'var(--color-bg-white)', // Par défaut blanc
    border: 'none',
    borderRadius: 'var(--radius-sm)',
    fontSize: '14px',
    color: 'var(--color-text-main)',
    outline: 'none',
    boxSizing: 'border-box',
    ...style
  };

  return (
    <div style={containerStyle}>
      {label && <label style={labelStyle}>{label}</label>}
      <input style={inputStyle} {...props} />
    </div>
  );
};

export default Input;