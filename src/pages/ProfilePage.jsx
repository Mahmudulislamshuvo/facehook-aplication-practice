import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const { auth } = useAuth();
  const { api } = useAxios();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await api.get(`/profile/${auth.user.id}`);
        setUser(response?.data?.user);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return <div>{user?.firstName}</div>;
};

export default ProfilePage;
