const BASE_URL = import.meta.env.VITE_API_URL ;

const API = {
  get: (url) => {
    return fetch(`${BASE_URL}${url}`, {
      headers: getHeaders()
    }).then(handleResponse);
  },

  post: (url, data) => {
    return fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(data)
    }).then(handleResponse);
  },

  put: (url, data) => {
    return fetch(`${BASE_URL}${url}`, {
      method: 'PUT',
      headers: getHeaders(),
      body: JSON.stringify(data)
    }).then(handleResponse);
  },

  delete: (url) => {
    return fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: getHeaders()
    }).then(handleResponse);
  }
};

const getHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };
};

const handleResponse = async (res) => {
  const data = await res.json();
  if (!res.ok) {
    const error = new Error(data.message || 'Something went wrong');
    error.response = { data };
    throw error;
  }
  return { data };
};

export default API;