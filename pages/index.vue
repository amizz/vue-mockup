<template>
  <section class="container">
    <div>
      <logo/>
      <div class="title">
        <h1>Question Creation Tool</h1>
      </div>
      <div class="button">
        <el-button type="primary" @click="goToAuth()">Login / Signup</el-button>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods: {
    goToAuth() {
      this.$router.push('/auth')
    }
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-image: url('../assets/bg-1.jpg');
  background-position: center;
  background-size: cover;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  margin: 0.5em 0;

}

.title h1 {
  font-size: 0.3em;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.btn-auth {
  background: black;
}
</style>
