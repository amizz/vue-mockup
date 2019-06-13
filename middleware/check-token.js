import { getToken } from '../services/auth'

export default async ({store, redirect, $axios}) => {
  if(store.state.auth.token == null) {
    redirect('/')
  }

  let token = await getToken()
  console.log(token)
}