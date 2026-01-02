import { actions } from "../actions";

const initialState = {
  user: null,
  posts: [],
  loading: false,
  error: null,
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case actions.profile.DATA_FATCHING:
      return { ...state, loading: true };

    case actions.profile.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        //     setUser(response?.data?.user); evabe state e diyesilam tai ekhane o same vabe
        user: action.data.user,
        posts: action.data.posts,
      };

    case actions.profile.DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case actions.profile.USER_DATA_EDITED:
      return {
        ...state,
        loading: false,
        user: action.data,
      };

    case actions.profile.IMG_UPLOADED:
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          avatar: action.data.avatar,
        },
      };

    case actions.profile.POST_EDITED:
      return {
        ...state,
        loading: false,
        posts: state.posts.map((post) =>
          post.id === action.data.id ? action.data : post
        ),
      };

    default:
      return state;
  }
};

export { initialState, profileReducer };
