import axios from 'axios';

export const getAllUser = ({
  query = {},
  config = { loading: false }
} = {}) => {
  return axios.request({
    params: query,
    url: '/api/user/all',
    method: 'get',
    ...config
  });
};

export const patchAllUser = ({
  data = {},
  config = { loading: false }
} = {}) => {
  return axios.request({
    data,
    url: '/api/user/all',
    method: 'patch',
    ...config
  });
};
