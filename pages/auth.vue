<template>
  <div class="auth-page">
    <el-row style="height:100%;">
      <el-col :md="8" :xs="18" class="auth-container">
        <div class="auth-box">
          <Login v-if="isLogin" :class="{'visible-fade': isLogin, 'hidden-fade': !isLogin}"></Login>
          <Signup v-if="!isLogin" class="in-transition"></Signup>

          <div class="option">
            <span v-if="!isLogin" @click="isLogin = true">I want to login</span>
            <span v-if="isLogin" @click="isLogin= false">Signup please</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import mobileDetector from '../assets/detect-mobile';
  import Login from '../components/Login';
  import Signup from '../components/Signup';

  export default {
    components: {
      Login,
      Signup
    },
    created() {
      if (process.browser) {
        // alert(mobileDetector(window.navigator.userAgent))
      }
    },
    async asyncData() {
      return {
        isLogin: false
      }
    }
  }
</script>

<style>
  .auth-page {
    padding: 3em;
    height: 100vh;
  }

  .auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .auth-box {
    width: 100%;
    color: white;
    background: rgb(0, 68, 255);
    padding: 2em;
    min-height: 2em;
    border-radius: 20px;

    box-shadow: 0px 0px 10px 0px rgb(0, 68, 255);
  }

  .option {
    padding: 1em;
    text-align: center;
    border-top: 1px solid white;
  }

  .visible-fade {
    visibility: visible;
    opacity: 1;
    transition: opacity 2s linear;
  }

  .hidden-fade {
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s 2s, opacity 2s linear;
  }
</style>