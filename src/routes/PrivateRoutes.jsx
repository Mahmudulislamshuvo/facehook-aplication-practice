import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../components/Navbar";
import ProfileProvider from "../provider/ProfileProvider";

const PrivateRoutes = () => {
  const { auth } = useAuth();

  if (!auth.user || !auth.authToken) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <ProfileProvider>
        <Navbar />
        <main className="mx-auto max-w-5xl py-8">
          <div className="container">
            <Outlet />
          </div>
        </main>
      </ProfileProvider>
    </>
  );
};

export default PrivateRoutes;
