import apiRequest from '../../clinet/src/lib/apiRequest';

export const singlePageloader = async ({ request, params }) => {
  const res = await apiRequest('/posts/' + params.id);

  return res.data;
};
