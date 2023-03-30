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
    if(response.data) { 
      if (Array.isArray(response.data)) {
        const responseStrings = response.data.map((item) => JSON.stringify(item));
        return responseStrings.join(",\n");
      } 
      return response.data;
    }
    if (Array.isArray(response)) {
      const responseStrings = response.map((item) => JSON.stringify(item));
      return responseStrings.join(",\n");
    } 
    return response;

  } catch (error) {
    throw error;
  }
}

export default callEndpoint;