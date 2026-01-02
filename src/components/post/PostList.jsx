import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  if (!posts || posts.length === 0) return null;

  return (
    <>
      {[...posts]
        .sort((a, b) => new Date(b.createAt) - new Date(a.createAt))
        .map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
    </>
  );
};

export default PostList;
