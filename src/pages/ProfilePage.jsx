import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";
import { actions } from "../actions";
import Profile from "../components/Profile";

const ProfilePage = () => {
  const { state, dispatch } = useProfile();

  const { auth } = useAuth();
  const { api } = useAxios();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FATCHING });

    const fetchUserProfile = async () => {
      try {
        const response = await api.get(`/profile/${auth.user.id}`);

        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_SUCCESS,
            data: response.data,
          });
        }
      } catch (error) {
        dispatch({
          type: actions.profile.DATA_FAIL,
          error: error.message,
        });
      }
    };

    fetchUserProfile();
  }, []);

  if (state?.loading) {
    return <div>Loading...</div>;
  }

  return <Profile />;
};

export default ProfilePage;
