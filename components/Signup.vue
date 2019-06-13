<template>
  <div class="signup">
    <span class="title-auth">Create new account</span>

    <el-form class="signup-form" id="signup" ref="signupForm" :model="form" :rules="rule">
      <el-form-item class="account" label="I'm" prop="account">
        <el-radio class="" v-model="form.account" label="student">Student</el-radio>
        <el-radio v-model="form.account" label="teacher">Teacher</el-radio>
        <el-radio v-model="form.account" label="principal">Principal</el-radio>
      </el-form-item>

      <el-form-item label="Email" prop="email">
        <el-input v-model="form.email"></el-input>
      </el-form-item>

      <el-form-item label="Password" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item label="Reenter Password" prop="repassword">
        <el-input type="password" v-model="form.repassword"></el-input>
        <span v-if="errors.repassword.message">{{errors.repassword.message}}</span>
      </el-form-item>
      
      <div class="button-wrapper">
        <el-button @click="signup" class="btn-signup">Signup</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          account: 0,
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
      async signup() {
        this.$refs['signupForm'].validate(async (valid) => {
            if (valid) {
              let response = await this.$axios({
                                url: '',
                                method: 'POST',
                                data: {
                                  email: this.form.email,
                                  password: this.form.password
                                }
                              })
              
              if(response.data) {
                this.$router.push('/')
              }

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
  .signup {
    padding: 2em 0em;
  }

  .signup-form {
    margin-bottom: 2em;
    width: 100%;
  }

  .account .el-form-item__label {
    color: white !important;
  }

  .signup-form .el-form-item__label {
    color: white !important;
  }

  .el-radio__label {
    color: white !important;
  }

  .signup-form {
    margin-top: 4em;
  }

  .button-wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .btn-signup {
    border: 0px;
    background: rgb(84, 130, 255);
    color: white;
  }

  .btn-signup:hover {
    border: 0px;
    background: rgb(33, 72, 179);
    color: white;
  }
</style>