import Vue from 'vue'
import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'x-powered-by': 'Syabas-Air-Selangor',
    'client-service': 'Syabas-Portal-Service',
    accept: 'application/vnd.airselangor.portal.api+json;channel=apiv2',
    'User-Agent': 'PostmanRuntime/Terato/AIS'
  }
})

instance.interceptors.request.use(
  config => {
    config.headers.authorization = window.localStorage.getItem('token')
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  config => {
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

Vue.use(instance)

export default instance
