import test from 'ava'
import { getToken } from '../../services/auth'

test('[success] Token received', async t => {
  try {
    let response = await getToken()
    t.truthy(response.data.data.token)
  } catch (error) {
    console.error(error)
  }
})

test('[error] Token not received', async t => {
  try {
    let response = await getToken()
    t.falsy(response.data.data.token)
  } catch (error) {
    console.error(error)
  }
})