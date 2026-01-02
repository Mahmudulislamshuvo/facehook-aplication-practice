import { useState } from "react";
import PostCommentList from "./PostCommentList";
import { useAuth } from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const PostComments = ({ post }) => {
  const { auth } = useAuth();
  const { api } = useAxios();
  const [toggleComments, setToggleComments] = useState(false);
  const [allComments, setAllComments] = useState(post?.comments || []);
  const [commentValue, setCommentValue] = useState("");

  const handleNewComment = async (e) => {
    const keyCode = e.keyCode;

    if (keyCode === 13) {
      if (!commentValue.trim()) return;

      try {
        const response = await api.patch(`/posts/${post.id}/comment`, {
          comment: commentValue,
        });

        if (response.status === 200) {
          setAllComments([...response.data.comments]);
          setCommentValue("");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="flex-center mb-3 gap-2 lg:gap-4">
        <img
          className="max-w-7 max-h-7 rounded-full lg:max-h-8.5 lg:max-w-8.5"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/${auth?.user?.avatar}`}
          alt="avatar"
        />

        <div className="flex-1">
          <input
            type="text"
            className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-9.5"
            name="post"
            id="post"
            value={commentValue}
            onChange={(e) => setCommentValue(e.target.value)}
            placeholder="What's on your mind?"
            onKeyDown={(e) => handleNewComment(e)}
          />
        </div>
      </div>
      <div className="mt-4">
        <button
          className="text-gray-300 max-md:text-sm"
          onClick={() => setToggleComments(!toggleComments)}
        >
          All Comment ▾
        </button>
      </div>
      {toggleComments && <PostCommentList comments={allComments} />}
    </div>
  );
};

export default PostComments;
