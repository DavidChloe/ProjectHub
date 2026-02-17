import React from 'react';
import AppRoute from './routes/AppRoute';
import './assets/styles/variables.css'; 

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRoute />
    </div>
  );
};

export default App;