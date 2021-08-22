import { IPosts } from '../../../types/Posts';

export interface PostsState {
  posts: IPosts[];
  isLoaded: boolean;
  error: string | null;
}

export enum ActionsPostsTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  SET_ERROR = 'SET_ERROR',
  IS_LOADED = 'IS_LOADED',
  POST_REQUEST = 'POST_REQUEST',
}

export interface FetchPosts {
  type: ActionsPostsTypes.FETCH_POSTS;
  payload: { posts: IPosts };
}

export interface SetError {
  type: ActionsPostsTypes.SET_ERROR;
  payload: { error: string | null };
}

export interface SetIsLoaded {
  type: ActionsPostsTypes.IS_LOADED;
  payload: { isLoaded: boolean };
}

export interface PostRequest {
  type: ActionsPostsTypes.POST_REQUEST;
}

export type PostsAction = FetchPosts | SetError | SetIsLoaded | PostRequest;
