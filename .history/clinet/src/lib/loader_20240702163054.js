import { defer } from 'react-router-dom';
import apiRequest from './apiRequests';

export const singlePageloader = async ({ request, params }) => {
  const res = await apiRequest('/posts/' + params.id);

  return res.data;
};

export const listPageLoader = async ({ request, params }) => {
  const postPromise = request.url.split('?')[1];
  const res = await apiRequest('/posts?' + query);
  return defer({ postResponse: postPromise });
};
