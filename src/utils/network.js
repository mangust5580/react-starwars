import axios from 'axios';

import { HTTP, HTTPS } from '@constants/api';

export const changeHTTP = (url) => {
  const result = url ? url.replace(HTTP, HTTPS) : url;

  return result;
};

export const getApiResource = async (url) => {
  try {
    const resp = await axios.get(url);

    if (resp.status <= 200 && resp.status > 300) {
      console.error('Could not fetch.', resp.status);
      return false;
    }

    return await resp.data;
  } catch (error) {
    console.error('Could not fetch.', error.message);
    return false;
  }
};

export const makeConcurrentRequest = async (url) => {
  const resp = await Promise.all(
    url.map((resp) => {
      return axios.get(resp).then((resp) => resp.data);
    }),
  );

  return resp;
};
