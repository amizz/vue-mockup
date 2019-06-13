import axios from '../lib/axios'

function genId() {
  return 'adasdas'
}

export function getToken() {
  return axios({
    url: 'token',
    method: 'POST',
    data: {
      device_id: genId()
    }
  })
}

export function login(email, password, token) {
  return axios({
    method: 'POST',
    data: {
      email: email,
      password: password
    }
  })
}