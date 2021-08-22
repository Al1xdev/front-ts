import {
  ActionsPostsTypes,
  FetchPosts,
  SetError,
  SetIsLoaded,
  PostRequest,
} from './types';
import { IPosts } from '../../../types/Posts';

export const fetchPosts = (posts: IPosts): FetchPosts => ({
  type: ActionsPostsTypes.FETCH_POSTS,
  payload: { posts },
});

export const setError = (error: string): SetError => ({
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
