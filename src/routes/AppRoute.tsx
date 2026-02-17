import React from 'react';
import { Routes, Route, Navigate } from 'react-router';

import Login from '../pages/Login';
import CreationAccount from '../pages/CreationAccount';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import ProjectDetails from '../pages/ProjectDetails';

const AppRoute: React.FC = () => {
  return (
    <Routes>
    {/* --- Public zones --- */}
    <Route path="/connection" element={<Login />} />
    <Route path="/creation_account" element={<CreationAccount />} />

    {/* --- Connected zones --- */}
    <Route path="/" element={<Home />} />
    <Route path="/edit_user" element={<Settings />} />
    <Route path="/project/:id" element={<ProjectDetails />} />
    <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoute;