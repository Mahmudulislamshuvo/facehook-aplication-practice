import { Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import PrivateRoutes from "./routes/PrivateRoutes";

const App = () => {
  return (
    <Routes>
      {/* Private Routes */}
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      {/* Opened Routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
