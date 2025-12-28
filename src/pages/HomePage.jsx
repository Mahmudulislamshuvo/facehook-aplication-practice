import Navbar from "../components/Navbar";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  console.log(auth);

  return (
    <>
      <Navbar />
    </>
  );
};

export default HomePage;
