import { actions } from "../actions";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state, action) => {
  switch (action.type) {
    case actions.post.DATA_FATCHING:
      return { ...state, loading: true };

    case actions.post.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.data.posts,
      };

    case actions.post.DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default: {
      return state;
    }
  }
};

export { initialState, postReducer };
