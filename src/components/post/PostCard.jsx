import { useState } from "react";
import PostAction from "./PostAction";
import PostBody from "./PostBody";
import PostComments from "./PostComment";
import PostHeader from "./PostHeader";
import EditPostModal from "./EditPostModal";

const PostCard = ({ post }) => {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader post={post} onEdit={() => setShowEditModal(true)} />
      <PostBody poster={post?.image} content={post?.content} />
      <PostAction post={post} commentCount={post?.comments?.length} />
      <PostComments post={post} />

      <EditPostModal
        post={post}
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
      />
    </article>
  );
};

export default PostCard;
