import apiRequest from './apiRequests';

export const singlePageloader = async ({ request, params }) => {
  const res = await apiRequest('/posts/' + params.id);

  return res.data;
};
