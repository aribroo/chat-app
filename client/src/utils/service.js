export const baseUrl = 'http://localhost:6969/api';

export const registerUser = async (body) => {
  const response = await fetch(`${baseUrl}/user/register`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  return response.json();
};

export const loginUser = async (body) => {
  const response = await fetch(`${baseUrl}/user/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });

  return response.json();
};
