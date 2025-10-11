import { Routes, Route } from "react-router";
import { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import InstallPrompt from "./Components/PWA/InstallModal";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Layout from "./Components/Layout/Layout";
import LayoutMarket from "./Components/LayoutMarket/LayoutMarket";

// Lazy imports de las vistas
const Login = lazy(() => import("./Views/Login/Login"));
const Register = lazy(() => import("./Views/Register/Register"));
const Dashboard = lazy(() => import("./Views/Dashboard/Dashboard"));
const NotSubscribed = lazy(() => import("./Views/NotSubscribed/NotSubscribed"));
const Mechanics = lazy(() => import("./Views/Mechanics/Mechanics"));
const Clients = lazy(() => import("./Views/Clients/Clients"));
const Motorcycles = lazy(() => import("./Views/Motorcycles/Motorcycles"));
const WorkOrderCreate = lazy(() => import("./Views/WorkOrder/WorkOrderCreate"));
const Services = lazy(() => import("./Views/Services/Services"));
const WorkOrderEdit = lazy(() => import("./Views/WorkOrder/WorkOrderEdit"));
const Profile = lazy(() => import("./Views/Profile/Profile"));
const OrdenView = lazy(() => import("./Views/OrdenView/OrdenView"));
const Home = lazy(() => import("./Views/Landing/Home"));
const ResetPassword = lazy(() => import("./Views/ResetPassword/ResetPassword"));
const Quotes = lazy(() => import("./Views/Quotes/Quotes"));
const Workshops = lazy(() => import("./Views/Workshops/Workshops"));
const Parts = lazy(() => import("./Views/Parts/Parts"));

const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
        }}
      />
      <InstallPrompt />

      {/* Suspense envuelve las rutas para mostrar fallback mientras carga */}
      <Suspense fallback={<div className="text-center mt-10">Cargando...</div>}>
        <Routes>
          {/* Rutas públicas */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/order/view" element={<OrdenView />} />
          <Route path="/" element={<Home />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Marketplace */}
          <Route element={<LayoutMarket />}>
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/parts" element={<Parts />} />
          </Route>

          {/* Rutas protegidas */}
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Mechanics" element={<Mechanics />} />
              <Route path="/Clients" element={<Clients />} />
              <Route path="/Vehiculos" element={<Motorcycles />} />
              <Route path="/Services" element={<Services />} />
              <Route path="/Order/create" element={<WorkOrderCreate />} />
              <Route path="/Order" element={<WorkOrderEdit />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/Quotes" element={<Quotes />} />
            </Route>
          </Route>

          <Route path="/not-subscribed" element={<NotSubscribed />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
