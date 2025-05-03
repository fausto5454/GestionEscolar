import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Home from '../pages/Home';
import AdminDashboard from '../pages/dashboard/AdminDashboard';
import StudentDashboard from '../pages/dashboard/StudentDashboard';
import ParentDashboard from '../pages/dashboard/ParentDashboard';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/parent" element={<ParentDashboard />} />
      <Route path="*" element={<div>Página no encontrada</div>} />
    </Routes>
  );
};

export default AppRouter;
