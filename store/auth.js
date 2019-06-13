export const state = () => ({
  token: null,
  user: {}
})

export const mutations = {
  SET_TOKEN(state, val) {
    state.token = val
    if(process.browser) localStorage.setItem('token', val) 
  }
}

export const actions = () => ({
  async getToken() {
  }
})

export const getter = () => ({
  tokenProcess() {
    return token;
  }
})