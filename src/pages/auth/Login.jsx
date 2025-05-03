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
    if (role === "admin") navigate("/admin");
    else if (role === "student") navigate("/student");
    else navigate("/parent");
  };
  function Login() {
    console.log("Renderizando Login");}
  
    // resto del código...
  
  return (

    <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
      <h1 className="text-xl font-bold mb-4 text-center">Iniciar Sesión</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="admin">Administrador</option>
          <option value="student">Estudiante</option>
          <option value="parent">Padre de familia</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
    </div>
  );
  
}

export default Login;
