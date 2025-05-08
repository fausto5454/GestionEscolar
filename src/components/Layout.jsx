import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import {
  Home,
  Users,
  FileText,
  BookOpen,
  FileCheck,
  ClipboardList,
  FilePlus,
  LogOut,
  ArrowLeftCircle,
  Menu,
  X,
} from "lucide-react";

function Layout({ children }) {
  const { user, logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);

  const menu = {
    admin: [
      { label: "Inicio", path: "/dashboard", icon: <Home size={18} /> },
      { label: "Usuarios", path: "/dashboard/users", icon: <Users size={18} /> },
      { label: "Reportes", path: "/dashboard/reports", icon: <FileText size={18} /> },
    ],
    teacher: [
      { label: "Clases", path: "/dashboard", icon: <BookOpen size={18} /> },
      { label: "Notas", path: "/dashboard/grades", icon: <FileCheck size={18} /> },
    ],
    student: [
      { label: "Cursos", path: "/dashboard", icon: <BookOpen size={18} /> },
      { label: "Mis Notas", path: "/dashboard/grades", icon: <FileCheck size={18} /> },
    ],
    parent: [
      { label: "Hijos", path: "/dashboard", icon: <Users size={18} /> },
      { label: "Notas de Hijos", path: "/dashboard/grades", icon: <FileCheck size={18} /> },
    ],
    auxiliar: [
      { label: "Asistencias", path: "/dashboard", icon: <ClipboardList size={18} /> },
      { label: "Horarios", path: "/dashboard/docs", icon: <FilePlus size={18} /> },
      { label: "Documentos", path: "/dashboard/docs", icon: <FilePlus size={18} /> },
      { label: "Comunicados", path: "/dashboard/docs", icon: <FilePlus size={18} /> },
    ]
  };

  const currentMenu = menu[user?.role] || [];

  return (
    <div className="flex min-h-screen relative">
      {/* Botón hamburguesa fijo en móviles */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white text-green-700 p-2 rounded shadow-md"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar móvil */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isMenuOpen ? 0 : "-100%" }}
        transition={{ type: "tween" }}
        className="fixed top-0 left-0 h-full w-64 bg-green-700 text-white p-4 shadow-xl z-40 lg:hidden"
      >
        <div className="flex items-center mb-6 pt-10">
          <h2 className="text-2xl font-bold">Gestión Escolar</h2>
        </div>

        <ul className="space-y-4">
          {currentMenu.map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                className="flex items-center space-x-2 hover:text-indigo-200 transition-colors"
                onClick={() => setIsMenuOpen(false)} // Cierra menú tras navegación
              >
                <span>{item.icon}</span>
                <span className="text-sm sm:text-base">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={() => {
            toggleSidebar();
            setIsMenuOpen(false);
          }}
          className="mt-10 flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-blue-800 rounded-2xl text-white w-full"
        >
          <LogOut size={18} />
          <span>{isCollapsed ? "Abrir menú" : "Cerrar menú"}</span>
        </button>

        <Link
          to="/login"
          className="mt-4 flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-yellow-500 rounded-2xl text-white w-full"
        >
          <ArrowLeftCircle size={18} />
          <span className="text-sm sm:text-base">Volver al login</span>
        </Link>
      </motion.aside>

      {/* Sidebar de escritorio */}
      <motion.aside
        animate={{ width: isCollapsed ? 72 : 256 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="hidden lg:block bg-green-700 text-white p-4 shadow-xl overflow-hidden h-screen"
      >
        <div className="flex justify-between items-center mb-6">
          {!isCollapsed && <h2 className="text-2xl font-bold">Gestión Escolar</h2>}
        </div>

        <ul className="space-y-4">
          {currentMenu.map((item, i) => (
            <li key={i}>
              <Link
                to={item.path}
                className="flex items-center space-x-2 hover:text-indigo-200 transition-colors"
              >
                <span>{item.icon}</span>
                <span className="text-sm sm:text-base lg:text-lg">
                  {!isCollapsed && item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          onClick={toggleSidebar}
          className="mt-10 flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-blue-800 rounded-2xl text-white w-full"
        >
          <LogOut size={18} />
          {!isCollapsed && <span>Cerrar menú</span>}
        </button>

        <Link
          to="/login"
          className="mt-4 flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-yellow-500 rounded-2xl text-white w-full"
        >
          <ArrowLeftCircle size={18} />
          {!isCollapsed && <span className="text-sm sm:text-base lg:text-lg">Volver al login</span>}
        </Link>
      </motion.aside>

      <main className="flex-1 p-0 bg-gray-50">{children}</main>
    </div>
  );
}

export default Layout;
