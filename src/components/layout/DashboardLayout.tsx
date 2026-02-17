import React from 'react';
import SideBar from '../navigation/SideBar';
import Header from '../navigation/Header';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const layoutContainerStyle: React.CSSProperties = {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  };

  const mainContentStyle: React.CSSProperties = {
    flex: 1, //1 pour full place restante
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto', //scroll intern
    backgroundColor: 'var(--color-bg-white)'
  };

  return (
    <div style={layoutContainerStyle}>
      <SideBar />

      <div style={mainContentStyle}>
        <Header />
        <main style={{ padding: '40px' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;