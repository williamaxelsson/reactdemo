import axios from 'axios';

async function callEndpoint(method, url, data = null, config = {}) {
  const requestOptions = {
    method: method,
    url: url,
    data: data,
    ...config,
  };

  try {
    const response = await axios(requestOptions);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default callEndpoint;