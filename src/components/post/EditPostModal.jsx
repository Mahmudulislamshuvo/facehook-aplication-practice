import { useForm } from "react-hook-form";
import { usePost } from "../../hooks/usePost";
import useAxios from "../../hooks/useAxios";
import { actions } from "../../actions";
import AppModal from "../common/Modal";
import ModalNewPost from "./ModalNewPost";

const EditPostModal = ({ post, onClose }) => {
  const { dispatch } = usePost();
  const { api } = useAxios();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      content: post?.content || "",
      image: null,
    },
  });

  const handleEditPost = async (data) => {
    dispatch({ type: actions.post.DATA_FATCHING });

    try {
      const formData = new FormData();
      formData.append("content", data.content);

      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }

      const response = await api.patch(`/posts/${post.id}`, formData);

      if (response.status === 200) {
        dispatch({
          type: actions.post.DATA_EDITED,
          data: response.data,
        });
        onClose();
      }
    } catch (error) {
      console.error(error);
      dispatch({
        type: actions.post.DATA_FAIL,
        error: error.message,
      });
    }
  };

  return (
    <AppModal isOpen={true} onClose={onClose} title="Edit Post">
      <ModalNewPost
        title="Edit Post"
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        handleCreatePost={handleEditPost}
      />
    </AppModal>
  );
};

export default EditPostModal;