import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="text-2xl font-bold">Bienvenido al Dashboard</h1>
      <p className="mt-4">Aquí puedes ver un resumen de la actividad y administración.</p>
      
      <div className="mt-8">
        <h2 className="text-xl">Acciones rápidas</h2>
        <ul className="mt-4">
          <li><Link to="/gestionar-estudiantes" className="text-blue-600">Gestionar estudiantes</Link></li>
          <li><Link to="/informes" className="text-blue-600">Ver informes</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
