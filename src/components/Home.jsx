import { postReducer, initialState } from "../reducers/postReducer";
import useAxios from "../hooks/useAxios";
import { useEffect, useEffectEvent, useReducer } from "react";
import PostList from "./post/PostList";
import { actions } from "../actions";
import PostListSkeleton from "./skeleton/PostListSkeleton";
import Error from "./common/Error";

const Home = () => {
  const { api } = useAxios();
  const [state, dispatch] = useReducer(postReducer, initialState);

  const fetchPosts = useEffectEvent(async () => {
    dispatch({ type: actions.post.DATA_FATCHING });

    try {
      const response = await api.get("/posts");
      dispatch({
        type: actions.post.DATA_SUCCESS,
        data: { posts: response.data },
      });
    } catch (error) {
      dispatch({
        type: actions.post.DATA_FAIL,
        error: error.message,
      });
    }
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  if (state.loading) {
    return <PostListSkeleton />;
  }

  if (state.error) {
    return <Error message={state.error} />;
  }

  return (
    <div>
      <PostList posts={state?.posts} />
    </div>
  );
};

export default Home;
