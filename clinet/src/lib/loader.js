import { defer } from 'react-router-dom';
import apiRequest from './apiRequests';

export const singlePageloader = async ({ request, params }) => {
  const res = await apiRequest('/posts/' + params.id);

  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  const query = request.url.split('?')[1];
  const postPromise = await apiRequest('/posts?' + query);
  return defer({ postResponse: postPromise });
};
