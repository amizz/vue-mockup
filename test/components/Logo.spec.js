import { mount } from '@vue/test-utils'
import test from 'ava'
import Logo from '../../components/Logo.vue'
import { Nuxt, Builder } from 'nuxt'
import { resolve } from 'q';

let nuxt = null

test.before(async () => {
  const config = {
    def: false,
    rootDir: resolve(__dirname, '..')
  }

  nuxt = new Nuxt(config)
  await new Builder(nuxt).build()
  await nuxt.server.listen(4000, 'localhost')
}, 30000)

test('mounted logo', t => {
  const logoMounted = mount(Logo)

  t.is(logoMounted.isVueInstance(), true)
  t.is(logoMounted.contains('.VueToNuxtLogo'), true)
})