import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Home from '../pages/Home';
import AdminDashboard from '../pages/dashboard/AdminDashboard';
import StudentDashboard from '../pages/dashboard/StudentDashboard';
import ParentDashboard from '../pages/dashboard/ParentDashboard';
import TeacherDashboard from '../pages/dashboard/TeacherDashboard';
import AuxiliarDashboard from '../pages/dashboard/AuxiliarDashboard';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/parent" element={<ParentDashboard />} />
      <Route path="/teacher" element={<TeacherDashboard />} />
      <Route path="/auxiliar" element={<AuxiliarDashboard />} />
      <Route path="*" element={<div>Página no encontrada</div>} />
    </Routes>
  );
};

export default AppRouter;
