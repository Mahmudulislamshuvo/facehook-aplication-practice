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

    default:
      return state;
  }
};

export { initialState, profileReducer };
