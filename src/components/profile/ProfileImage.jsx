import { useProfile } from "../../hooks/useProfile";
import editIcon from "../../assets/icons/edit.svg";
import { useRef } from "react";
import useAxios from "../../hooks/useAxios";

const ProfileImage = () => {
  const { state, dispatch } = useProfile();
  const ImageButtonRef = useRef(null);
  const { api } = useAxios();

  const updateEditImage = (e) => {
    e.preventDefault();
    ImageButtonRef.current.addEventListener("change", updatedImageDisplay);
    ImageButtonRef.current.click();
  };

  const updatedImageDisplay = async () => {
    const formData = new FormData();

    for (const file of ImageButtonRef.current.files) {
      formData.append("avatar", file);
    }

    try {
      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state.user.id
        }/avatar`,
        formData
      );

      if (response.status === 200) {
        dispatch({
          type: "PROFILE_IMG_UPLOADED",
          data: response.data,
        });
      }

      console.log(response);
    } catch (error) {
      dispatch({
        type: "PROFILE_DATA_FAIL",
        error: error.message,
      });
    }
  };

  return (
    <>
      <div className="relative mb-8 max-h-45 max-w-45 rounded-full lg:mb-11 lg:max-h-54.5 lg:max-w-54.5">
        <img
          className="rounded-full w-40 h-40 lg:w-56 lg:h-56 object-cover"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/${state.user.avatar}`}
          alt={`${state.user.firstName} ${state.user.lastName}`}
        />

        <form>
          <button
            type="submit"
            onClick={updateEditImage}
            className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
          >
            <img src={editIcon} alt="Edit" />
          </button>
          <input id="file" type="file" hidden ref={ImageButtonRef} />
        </form>
      </div>
    </>
  );
};

export default ProfileImage;
