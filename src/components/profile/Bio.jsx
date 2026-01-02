import { useState } from "react";
import editIcon from "../../assets/icons/edit.svg";
import { useProfile } from "../../hooks/useProfile";
import useAxios from "../../hooks/useAxios";
import { actions } from "../../actions";

const Bio = () => {
  const { api } = useAxios();
  const { state, dispatch } = useProfile();
  const [bio, setBio] = useState(state?.user?.bio);
  const [editBioMode, setEditBioMode] = useState(false);

  const updateBiohandler = async () => {
    dispatch({ type: actions.profile.DATA_FATCHING });

    try {
      const response = await api.patch(`/profile/${state.user.id}`, { bio });

      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data,
        });
        setEditBioMode(false);
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FAIL,
        error: error.message,
      });
    }
  };

  return (
    <>
      <div className="mt-4 flex items-start gap-2 lg:mt-6">
        <div className="flex-1">
          {!editBioMode ? (
            <p className="leading-[188%] text-gray-400 lg:text-lg">
              {state.user.bio ? state.user.bio : "No bio available."}
            </p>
          ) : (
            <textarea
              className="w-full rounded-md bg-gray-800 p-2 text-gray-200 lg:text-lg"
              rows={4}
              cols={55}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          )}
        </div>

        {/* Edit Bio button */}
        {!editBioMode ? (
          <button
            onClick={() => setEditBioMode(true)}
            className="flex-center h-7 w-7 rounded-full"
          >
            <img src={editIcon} alt="Edit bio" />
          </button>
        ) : (
          // ✅ Save
          <button
            onClick={updateBiohandler}
            className="flex-center h-7 w-7 rounded-full pt-5"
          >
            ✅ Save
          </button>
        )}
      </div>
    </>
  );
};

export default Bio;
