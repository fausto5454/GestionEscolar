import Layout from "../../components/Layout";
import { CalendarDays, ClipboardList, Clock } from "lucide-react";

function AuxiliarDashboard() {
  return (
    <Layout role="auxiliar">
      <div className="min-h-screen p-6 bg-gradient-to-br from-green-200 to-indigo-100 text-gray-800">
        <div className="max-w-5xl mx-auto bg-yellow-100 shadow-xl rounded-2xl p-6">
          <h1 className="text-3xl font-bold mb-4 text-green-700">Panel del Auxiliar</h1>
          <p className="text-gray-700 text-lg mb-6">
            Bienvenido/a. Desde este panel puedes gestionar los horarios escolares, controlar la asistencia de los estudiantes y acceder a información clave del sistema.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-700 p-5 rounded-2xl shadow hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="text-sky-100" />
                <h2 className="text-xl font-semibold text-sky-100">Gestión de Horarios</h2>
              </div>
              <p className="text-yellow-200">Registra y modifica los horarios de clases por nivel y sección.</p>
            </div>

            <div className="bg-green-700 p-5 rounded-2xl shadow hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <ClipboardList className="text-sky-100" />
                <h2 className="text-xl font-semibold text-sky-100">Control de Asistencia</h2>
              </div>
              <p className="text-yellow-200">Marca y revisa la asistencia diaria de los estudiantes.</p>
            </div>

            <div className="bg-green-700 p-5 rounded-xl shadow hover:shadow-md transition">
              <div className="flex items-center gap-3 mb-2">
                <CalendarDays className="text-sky-100" />
                <h2 className="text-xl font-semibold text-sky-100">Gestión de Comunicados</h2>
              </div>
              <p className="text-yellow-200">Publica o consulta comunicados relevantes para la comunidad educativa.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AuxiliarDashboard;
