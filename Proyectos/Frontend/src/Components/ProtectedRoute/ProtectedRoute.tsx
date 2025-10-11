// ProtectedLayout.tsx

import { Navigate, Outlet } from "react-router";
import NotSubscribed from "../../Views/NotSubscribed/NotSubscribed"; // Ajusta la ruta si es necesario
import { useAuth } from "../../hooks/useAuth";


const ProtectedLayout = () => {
  const { isAuthenticated, user, loading } = useAuth();




  if (loading) {
    return <div className="text-center mt-10">Cargando...</div>;
  }

 if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!user?.suscription) {
    return <NotSubscribed />;
  }

  return <Outlet />;
};


export default ProtectedLayout;
