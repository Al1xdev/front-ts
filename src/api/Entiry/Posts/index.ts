import axios from 'axios';

import { BASE_URL, HEADER_CONFIG } from '../../../config';
import { IPosts } from './types';

export const getPosts = async (): Promise<IPosts> => {
  const response = await axios.get<IPosts>(BASE_URL, {
    headers: HEADER_CONFIG,
  });
  return response.data;
};
