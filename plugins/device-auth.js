import { getToken } from '../services/auth'

export default async ({store, redirect, $axios}) => {
  let token = await getToken()
  console.log(token)
}