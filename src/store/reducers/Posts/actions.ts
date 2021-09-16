import { IPosts } from '../../../types/Posts';
import {
  ActionsPostsTypes,
  FetchPosts,
  SetError,
  SetIsLoaded,
  PostRequest,
  PostItem,
  DeletePost,
  ModalOpen,
  EditPost,
  CreatePostItem,
  SetPost,
  ClearFields,
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

export const modalOpen = (isOpened: boolean): ModalOpen => ({
  type: ActionsPostsTypes.IS_OPENED,
  payload: { isOpened },
});

export const createPostItem = (post: IPosts): CreatePostItem => ({
  type: ActionsPostsTypes.CREATE_POST,
  payload: { post },
});

export const editPost = (id: number): EditPost => ({
  type: ActionsPostsTypes.EDIT_POST,
  payload: { id },
});

export const setPost = (post: IPosts): SetPost => ({
  type: ActionsPostsTypes.SET_POST,
  payload: { post },
});

export const clearFields = (): ClearFields => ({
  type: ActionsPostsTypes.CLEAR_FIELDS,
  payload: null,
});
