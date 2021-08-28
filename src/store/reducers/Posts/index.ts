import { PostsState, ActionsPostsTypes, PostsAction } from './types';

const initialState: PostsState = {
  posts: null,
  isLoaded: false,
  error: null,
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
    default:
      return state;
  }
};
