import { PostsState, ActionsPostsTypes, PostsAction } from './types';

const initialState: PostsState = {
  posts: null,
  isLoaded: false,
  error: null,
  isOpened: false,
  post: null,
};

export const postsReducer = (
  state: PostsState = initialState,
  action: PostsAction,
): PostsState => {
  switch (action.type) {
    case ActionsPostsTypes.POST_REQUEST:
      return { ...state };
    case ActionsPostsTypes.FETCH_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
      };
    case ActionsPostsTypes.IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload.isLoaded,
      };
    case ActionsPostsTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case ActionsPostsTypes.IS_OPENED:
      return { ...state, isOpened: action.payload.isOpened };
    case ActionsPostsTypes.SET_POST:
      return { ...state, post: action.payload.post };
    case ActionsPostsTypes.CLEAR_FIELDS:
      return { ...state, post: action.payload };
    default:
      return state;
  }
};
