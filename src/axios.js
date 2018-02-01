import axios from 'axios';
import { Toast } from 'antd-mobile'
import 'antd-mobile/dist/antd-mobile.css';

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  console.log(config)
  Toast.loading('loading', 2)
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Toast.hide()
  console.log(response)
  // Do something with response data
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axios;
 