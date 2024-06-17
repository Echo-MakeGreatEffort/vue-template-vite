import { tokenKey } from '@/config';

export const getToken = () => {
  return localStorage.getItem(tokenKey);
};

export const setToken = (token) => {
  localStorage.setItem(tokenKey, token);
};

export const removeToken = () => {
  localStorage.removeItem(tokenKey);
};

export const auth = async () => {
  const token = getToken();
  if (!token) {
    console.log('🔥 token is empty');
  } else {
    console.log('🔥 token is not empty');
  }
};

export const ssoLogin = () => {
  removeToken();
  //   location.href = 'xxx';
};
