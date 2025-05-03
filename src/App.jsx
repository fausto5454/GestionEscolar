import { AuthProvider } from "./context/AuthContext"; // Verifica la ruta
import React from 'react';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
