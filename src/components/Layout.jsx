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
  Menu, // <-- ICONO DEL BOTÓN HAMBURGUESA
} from "lucide-react";

function Layout({ children }) {
  const { user, logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Nuevo estado para controlar la visibilidad del menú en móvil

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen); // Función para controlar el menú en móvil

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
    <div className="flex min-h-screen">
      <motion.aside
        animate={{ width: isCollapsed ? 72 : 256 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-green-700 text-white p-4 shadow-xl overflow-hidden"
      >
        {/* Botón hamburguesa visible solo en dispositivos móviles */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white p-2"
          >
            <Menu size={24} /> {/* Icono del menú hamburguesa */}
          </button>
        </div>

        {/* Menú lateral para dispositivos grandes */}
        <div className={`lg:block ${isMenuOpen ? "block" : "hidden"} lg:flex lg:flex-col`}>
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
                  <span className="text-sm sm:text-base lg:text-lg">{!isCollapsed && item.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleSidebar}
            className="mt-10 flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-yellow-500 rounded-2xl text-white w-full"
          >
            <LogOut size={18} />
            {!isCollapsed && <span>{isCollapsed ? "Abrir menú" : "Cerrar menú"}</span>}
          </button>

          {/* BOTÓN DE VOLVER AL LOGIN */}
          <Link
            to="/login"
            className="mt-4 flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-yellow-500 rounded-2xl text-white w-full"
          >
            <ArrowLeftCircle size={18} />
            {!isCollapsed && <span className="text-sm sm:text-base lg:text-lg">Volver al login</span>}
          </Link>
        </div>
      </motion.aside>

      <main className="flex-1 p-4 bg-gray-50">{children}</main>
    </div>
  );
}

export default Layout;
