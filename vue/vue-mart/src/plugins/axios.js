"use strict";

import Vue from 'vue';
import axios from "axios";
import store from "../store/index"
import { createAPI } from 'cube-ui'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers.token = store.state.token || ""
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    if (response.status == 200 && response.data.code == '0000') {
      return response.data
    } else {
      // const toast = this.$createToast({
      //   time: 2000,
      //   txt: response.data.message || "未知错误！",
      //   type: "error"
      // });
      // toast.show();
      alert(response.data.message)
      return response;
    }
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function (Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    $axios: {
      get() {
        return _axios;
      },
      post() {
        return _axios;
      }
    },
  });
};

Vue.use(Plugin)

export default Plugin;