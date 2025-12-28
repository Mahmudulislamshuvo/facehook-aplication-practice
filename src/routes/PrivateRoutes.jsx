import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../components/Navbar";

const PrivateRoutes = () => {
  const { auth } = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-5xl py-8">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default PrivateRoutes;
