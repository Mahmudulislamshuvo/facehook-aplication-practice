import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Navbar from "../components/Navbar";
import ProfileProvider from "../provider/ProfileProvider";
import PostProvider from "../provider/PostProvider";

const PrivateRoutes = () => {
  const { auth } = useAuth();

  if (!auth.user || !auth.authToken) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <PostProvider>
        <ProfileProvider>
          <Navbar />
          <main className="mx-auto max-w-5xl py-8">
            <div className="container">
              <Outlet />
            </div>
          </main>
        </ProfileProvider>
      </PostProvider>
    </>
  );
};

export default PrivateRoutes;
