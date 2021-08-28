import {
  ActionsPostsTypes,
  FetchPosts,
  SetError,
  SetIsLoaded,
  PostRequest,
  PostItem,
  DeletePost,
} from './types';

export const fetchPosts = (posts: PostItem): FetchPosts => ({
  type: ActionsPostsTypes.FETCH_POSTS,
  payload: { posts },
});

export const setError = (error: string | null): SetError => ({
  type: ActionsPostsTypes.SET_ERROR,
  payload: { error },
});

export const setIsLoaded = (isLoaded: boolean): SetIsLoaded => ({
  type: ActionsPostsTypes.IS_LOADED,
  payload: { isLoaded },
});

export const postRequest = (): PostRequest => ({
  type: ActionsPostsTypes.POST_REQUEST,
});

export const deletePost = (id: number): DeletePost => ({
  type: ActionsPostsTypes.DELETE_POST,
  payload: { id },
});
