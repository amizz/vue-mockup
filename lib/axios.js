import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'x-powered-by': process.env.X_POWERED_BY,
    'client-service': process.env.CLIENT_SERVICE,
    'accept': process.env.ACCEPT,
    'User-Agent': process.env.USER_AGENT,
  }
})

instance.interceptors.request.use(
  config => {
    if(process.browser) config.headers.authorization = localStorage.getItem('token')
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

export default instance
