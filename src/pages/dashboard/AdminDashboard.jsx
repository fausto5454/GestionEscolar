import Layout from "../../components/Layout";

function AdminDashboard() {
  return (
    <Layout>
    <div className="min-h-screen p-6 bg-gradient-to-br from-green-200 to-indigo-100 text-gray-800">
      <div className="max-w-4xl mx-auto bg-yellow-100 shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold mb-4 text-green-700">Panel del Administrador</h1>
        <p className="text-gray-700 text-lg">
          Bienvenido/a. Aquí podrás acceder a las funcionalidades específicas de tu perfil: Ver información relevante, realizar acciones y estar al tanto de comunicados importantes.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-700 p-5 rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-sky-100 text-center">Módulo 1</h2>
            <p className="text-sky-100">Funcionalidad relacionada.</p>
          </div>
          <div className="bg-green-700 p-5 rounded-2xl shadow">
            <h2 className="text-xl font-semibold text-sky-100 text-center">Módulo 2</h2>
            <p className="text-sky-100">Otra funcionalidad.</p>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default AdminDashboard;

