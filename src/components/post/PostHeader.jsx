import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import threeDotsIcon from "../../assets/icons/3dots.svg";
import editIcon from "../../assets/icons/edit.svg";
import deleteIcon from "../../assets/icons/delete.svg";
import timeIcon from "../../assets/icons/time.svg";
import { useAvatar } from "../../hooks/useAvatar";
import { getTimeFromNow } from "../../utils/getTimeFromNow";
import useAxios from "../../hooks/useAxios";
import { usePost } from "../../hooks/usePost";
import { actions } from "../../actions";
import { useProfile } from "../../hooks/useProfile";

const PostHeader = ({ post, onEdit }) => {
  const { auth } = useAuth();
  const [toggle, setToggle] = useState(false);
  const { avatarURL } = useAvatar(post);
  const { api } = useAxios();
  const { dispatch } = usePost();

  const { dispatch: profileDispatch } = useProfile();

  const isMe = post?.author?.id === auth?.user?.id;

  const handlePostDelete = async (e, post) => {
    e.stopPropagation();

    const response = await api.delete(`/posts/${post.id}`);

    if (response.status === 200) {
      dispatch({
        type: actions.post.POST_DELETED,
        data: { id: post.id },
      });

      profileDispatch({
        type: actions.profile.POST_DELETED,
        data: { id: post.id },
      });
    }
  };

  return (
    <header className="flex items-center justify-between gap-4">
      {/* Author */}
      <div className="flex items-center gap-3">
        <img
          className="h-10 w-10 rounded-full lg:max-h-14 lg:max-w-14"
          src={avatarURL}
          alt={post.author.name}
        />
        <div>
          <h6 className="text-lg lg:text-xl">{post.author.name}</h6>
          <div className="flex items-center gap-1.5">
            <img src={timeIcon} alt="time" />
            <span className="text-sm text-gray-400 lg:text-base">
              {`${getTimeFromNow(post.createAt)} ago`}
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      {isMe && (
        <div className="relative">
          <button onClick={() => setToggle(!toggle)}>
            <img src={threeDotsIcon} alt="actions" />
          </button>

          {toggle && (
            <div className="action-modal-container">
              <button
                onClick={() => {
                  setToggle(false);
                  onEdit();
                }}
                className="action-menu-item hover:text-lwsGreen"
              >
                <img src={editIcon} alt="Edit" />
                Edit
              </button>

              <button
                onClick={(e) => handlePostDelete(e, post)}
                className="action-menu-item hover:text-red-500"
              >
                <img src={deleteIcon} alt="Delete" />
                Delete
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default PostHeader;
