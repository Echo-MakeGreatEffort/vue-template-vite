import axios from 'axios';
import { getToken, login } from './authorization';
import { getApiUrl } from '@/utils';
import { ElMessage } from 'element-plus';

const axiosInstance = axios.create({
  baseURL: getApiUrl(),
  timeout: 30000
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = getToken();
    return config;
  },
  (error) => {
    console.log('🔥 request err', error);
    return Promise.reject(error);
  }
);

const successCode = [200];

axiosInstance.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (response.status === 401) {
      login();
    }
    if (response.status !== 200 || !successCode.includes(res.code)) {
      ElMessage({
        type: res.code > 0 ? 'warning' : 'danger',
        message: `${res.msg || '接口异常'}`
      });
    }
    return res;
  },
  (error) => {
    console.log('🔥 response err', error);
    const statusCode = error?.response?.status;
    if (statusCode === 401) {
      login();
      return;
    }
    ElMessage({ type: 'danger', message: `${error.config.url}:${error.message}` });
    return Promise.reject(error);
  }
);

export default axiosInstance;
