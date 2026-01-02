import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import AppModal from "../common/Modal";
import ModalNewPost from "./ModalNewPost";
import { useProfile } from "../../hooks/useProfile";
import { useForm } from "react-hook-form";
import { usePost } from "../../hooks/usePost";
import { actions } from "../../actions";
import useAxios from "../../hooks/useAxios";

const NewPost = () => {
  const { auth } = useAuth();
  const [open, setOpen] = useState(false);
  const { state: profile } = useProfile();
  const { dispatch } = usePost();
  const { api } = useAxios();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      content: "",
      image: null,
    },
  });

  const handleCreatePost = async (data) => {
    dispatch({ type: actions.post.DATA_FATCHING });

    try {
      const formData = new FormData();
      formData.append("content", data.content);

      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }

      const response = await api.post("/posts", formData);

      if (response.status === 200) {
        dispatch({
          type: actions.post.NEW_POST_ADDED,
          data: response.data,
        });
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: actions.post.DATA_FAIL,
        error: error.message,
      });
    }

    reset({
      content: "",
      image: null,
    });
    setOpen(false);
  };

  const userProfileImage = profile?.user?.avatar ?? auth?.user?.avatar;

  return (
    <div className="card">
      <div className="flex-center mb-3 gap-2 lg:gap-4">
        <img
          className="max-w-10 max-h-10 rounded-full lg:max-h-14.5 lg:max-w-14.5"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/${userProfileImage}`}
          alt="avatar"
        />

        <div className="flex-1">
          <textarea
            className="h-16 w-full rounded-md bg-lighterDark p-3 focus:outline-none sm:h-20 sm:p-6"
            onClick={() => setOpen(true)}
            readOnly
            placeholder="What's on your mind?"
          />
        </div>
      </div>

      <AppModal isOpen={open} onClose={() => setOpen(false)}>
        <ModalNewPost
          title="Create A New Post"
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          handleCreatePost={handleCreatePost}
        />

        <button
          onClick={() => setOpen(false)}
          className="mt-4 rounded bg-red-500 px-4 py-2 text-white"
        >
          Close
        </button>
      </AppModal>
    </div>
  );
};

export default NewPost;
