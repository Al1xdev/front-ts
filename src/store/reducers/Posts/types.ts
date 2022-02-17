import { IPosts } from '../../../types/Posts';

export type PostItem = null | Array<IPosts>;

export interface PostsState {
  posts: PostItem;
  isLoaded: boolean;
  error: string | null;
  isOpened: boolean;
  post: null | IPosts;
  isEdit: boolean;
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
  SET_POST = 'SET_POST',
  CLEAR_FIELDS = 'CLEAR_FIELDS',
  OPEN_MODAL_EDIT = 'OPEN_MODAL_EDIT',
  IS_EDIT = 'IS_EDIT',
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
  payload: { post: IPosts };
}

export interface CreatePostItem {
  type: ActionsPostsTypes.CREATE_POST;
  payload: { post: IPosts };
}

export interface SetPost {
  type: ActionsPostsTypes.SET_POST;
  payload: { post: IPosts };
}

export interface ClearFields {
  type: ActionsPostsTypes.CLEAR_FIELDS;
  payload: null;
}

export interface IsEditing {
  type: ActionsPostsTypes.OPEN_MODAL_EDIT;
  payload: { post: IPosts };
}

export interface IsEdit {
  type: ActionsPostsTypes.IS_EDIT;
  payload: { isEdited: boolean };
}

export type PostsAction =
  | FetchPosts
  | SetError
  | SetIsLoaded
  | PostRequest
  | DeletePost
  | ModalOpen
  | EditPost
  | CreatePostItem
  | SetPost
  | ClearFields
  | IsEditing
  | IsEdit;
