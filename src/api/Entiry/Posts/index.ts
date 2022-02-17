import axios, { AxiosResponse } from 'axios';

import { BASE_URL, HEADER_CONFIG } from '../../../config';
import { IPosts } from '../../../types/Posts';

type postResponse = AxiosResponse<Array<IPosts>>;

export const getPosts = async (): Promise<postResponse> => {
  const response: postResponse = await axios.get(`${BASE_URL}?_limit=10`, {
    headers: HEADER_CONFIG,
  });
  return response;
};

export const deletePost = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`, {
    headers: HEADER_CONFIG,
  });
};

export const createPost = async (postData: IPosts): Promise<void> => {
  await axios.post(BASE_URL, postData, {
    headers: HEADER_CONFIG,
  });
};

export const editPost = async (postData: IPosts): Promise<void> => {
  await axios.put(`${BASE_URL}/${postData.id}`, postData, {
    headers: HEADER_CONFIG,
  });
};
