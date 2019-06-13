<template>
  <div class="login">
    <span class="title-auth">My account</span>

    <el-form class="login-form" id="login" ref="loginForm" :model="form" :rules="rule">
      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>

      <div class="button-wrapper">
        <el-button @click="login" class="btn-login">Login</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
          repassword: ''
        },
        errors: {
          repassword: {
            type: '',
            message: null
          }
        },
        rule: {
          email: [
            { required: true, message: 'Please enter email address', trigger: 'blur'},
            { type: 'email', required: true, message: 'Please enter valid email address', trigger: 'blur'}
          ],
          password: [
            { required: true, message: 'Please enter password', trigger: 'blur'}
          ]
        },
      }
    },
    methods: {
      login() {
        this.$refs['loginForm'].validate((valid) => {
            if (valid) {
              this.$router.push('/dashboard');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        if(this.form.repassword.length < 8) {
          this.errors.repassword.message = "Please enter password min 8 char."
        }
      }
    },
    watch: {
      'form.repassword': (val) => {
        console.log(this.errors);
        // if(val > 8) {
        //   this.errors.repassword.message = null;
        // } else {
        //   this.errors.repassword.message = "Please enter password min 8 char."
        // }
      }
    }
  }
</script>

<style>
  .login {
    padding: 2em 0em;
  }

  .login-form {
    margin-bottom: 2em;
    width: 100%;
  }

  .account .el-form-item__label {
    color: white !important;
  }

  .login-form .el-form-item__label {
    color: white !important;
  }

  .el-radio__label {
    color: white !important;
  }

  .login-form {
    margin-top: 4em;
  }

  .button-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .btn-login {
    border: 0px;
    background: rgb(84, 130, 255);
    color: white;
  }

  .btn-login:hover {
    border: 0px;
    background: rgb(33, 72, 179);
    color: white;
  }
</style>