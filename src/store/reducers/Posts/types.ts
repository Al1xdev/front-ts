import { IPosts } from '../../../types/Posts';

export type PostItem = null | Array<IPosts>;

export interface PostsState {
  posts: PostItem;
  isLoaded: boolean;
  error: string | null;
  isOpened: boolean;
}

export enum ActionsPostsTypes {
  FETCH_POSTS = 'FETCH_POSTS',
  SET_ERROR = 'SET_ERROR',
  IS_LOADED = 'IS_LOADED',
  POST_REQUEST = 'POST_REQUEST',
  DELETE_POST = 'DELETE_POST',
  IS_OPENED = 'IS_OPENED',
  EDIT_POST = 'EDIT_POST',
  CREATE_POST = 'CREATE_POST',
}

export interface FetchPosts {
  type: ActionsPostsTypes.FETCH_POSTS;
  payload: { posts: PostItem };
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

export interface DeletePost {
  type: ActionsPostsTypes.DELETE_POST;
  payload: { id: number };
}

export interface ModalOpen {
  type: ActionsPostsTypes.IS_OPENED;
  payload: { isOpened: boolean };
}

export interface EditPost {
  type: ActionsPostsTypes.EDIT_POST;
  payload: { id: number };
}

export interface CreatePostItem {
  type: ActionsPostsTypes.CREATE_POST;
  payload: { post: IPosts };
}

export type PostsAction =
  | FetchPosts
  | SetError
  | SetIsLoaded
  | PostRequest
  | DeletePost
  | ModalOpen
  | EditPost
  | CreatePostItem;
