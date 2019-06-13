export default ({$axios}) => {
  $axios.defaults.baseURL = process.env.BASE_URL

  $axios.interceptors.request.use(
    config => {
      if(process.browser) config.headers.authorization = localStorage.getItem('token')
      config.headers['x-powered-by'] = process.env.X_POWERED_BY
      config.headers['client-service'] = process.env.CLIENT_SERVICE
      config.headers['accept'] = process.env.ACCEPT
      config.headers['user-agent'] =process.env.USER_AGENT
      
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
  
  $axios.interceptors.response.use(
    config => {
      return config
    },
    function(error) {
      return Promise.reject(error)
    }
  )
}