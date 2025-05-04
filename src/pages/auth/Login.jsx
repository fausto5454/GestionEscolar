import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("student");

  const handleLogin = (e) => {
    e.preventDefault();
    login(username, role);

    switch (role) {
      case "admin":
        navigate("/admin");
        break;
      case "student":
        navigate("/student");
        break;
      case "parent":
        navigate("/parent");
        break;
      case "teacher":
        navigate("/teacher");
        break;
      default:
        navigate("/auxiliar");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-400 to-yellow-200">
      <div className="w-full max-w-md bg-white p-8 rounded-4xl shadow-lg border-4 border-transparent hover:border-green-300 transition-all duration-300">
        <div className="flex justify-center mb-6">
          <img
            src="/logo_institucion.png" // Coloca tu logo en public/
            alt="Logo Institución"
            className="w-28 h-24 mx-auto"
          />
        </div>
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
          Iniciar Sesión
        </h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
          >
            <option value="admin">Administrador</option>
            <option value="student">Estudiante</option>
            <option value="parent">Padre de familia</option>
            <option value="teacher">Docente</option>
            <option value="auxiliar">Auxiliar de Educación</option>
          </select>
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-green-700 text-2xl text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );

}

export default Login;



