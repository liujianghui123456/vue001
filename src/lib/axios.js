import axios from "axios"
import {
  storage
} from "./storage.js"
import qs from 'qs'
// axios.defaults.baseURL = "http://www.pig-2.com:8081";
// axios.defaults.baseURL = 'http://192.168.12.210/';
axios.defaults.headers.common['S_ID'] = "15369236131466997";
if (storage.get('token')) {
  axios.defaults.headers.common['Authorization'] = storage.get('token');
}
const axiosPlugin = function (options) { return axios.post('/api/fetch', qs.stringify(options)) };
const ajax = {
  index: {
    getIndex: function () {
      return axiosPlugin({ method: 'get', version: 'v1', api: 'goods/index' })
    },
    getGood: function (goodId) {
      return axiosPlugin({ method: 'get', version: 'v1', api: 'goods/' + goodId })
    },
    getGoodPJ: function (goodId) {
      return axiosPlugin({ method: 'get', version: 'v1', api: 'comment/information/' + goodId })
    },
    getGoodList: function (params) {
      return axiosPlugin({ method: 'get', version: 'v1', api: 'goods/list', data: params })
    }
  },
  good: {
    favorGood: function (id) {
      return axiosPlugin({ method: 'post', version: 'v1', api: 'avor/goods/' + id });
    },
    unfavorGood: function (id) {
      return axiosPlugin({ method: 'post', version: 'v1', api: 'unfavor/goods/' + id });
    },
    addToCart: function (id, data) {
      return axiosPlugin({ method: 'post', version: 'v1', api: 'cart/' + id, data: data });
    },
    getCart: function () {
      return axiosPlugin({ method: 'get', version: 'v1', api: 'cart' });
    },
    preorder: function (id, data) {
      return axiosPlugin({ method: 'post', version: 'v1', api: 'preorder/goods/' + id, data: data });
    }
  },
  user: {
    login: function (params) {
      return axiosPlugin({ method: 'post', version: 'v1', api: 'users/login', data: params })
    },
    getListAddr: function () {
      return axiosPlugin({ method: 'get', version: 'v1', api: 'address/list' })
    },
    defaultAddr: function (addrId) {
      return axiosPlugin({ method: 'post', version: 'v1', api: 'address/default/' + addrId })
    },
    getAddrById: function (addrId) {
      return axiosPlugin({ method: 'get', version: 'v1', api: 'address/' + addrId });
    },
    getProvince: function () {
      return axiosPlugin({ method: 'get', version: 'v1', api: 'region/province' });
    },
    getCityByProv: function (prov) {
      return axiosPlugin({ method: 'get', version: 'v1', api: 'region/city/' + prov });
    },
    getRegionByCity: function (city) {
      return axiosPlugin({ method: 'get', version: 'v1', api: 'region/region/' + city });
    },
    newAddrsss: function (data, addrId) {
      if (addrId) {
        return axiosPlugin({ method: 'post', version: 'v1', api: 'address/' + addrId, data: data });
      } else {
        return axiosPlugin({ method: 'post', version: 'v1', api: 'address', data: data });
      }
    },
    getCollection: function () {
      return axiosPlugin({ method: 'get', version: 'v1', api: 'favors/goods' })
    }
  },
  order: {
    getOrders: function (status) {
      return axiosPlugin({ method: 'get', version: 'v1', api: 'order/list' })
    }
  }

};
export {
  ajax
}
