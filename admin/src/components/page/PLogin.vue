<template>
  <div class="login-wrapper">
    <el-card class="box-card">
      <h2 class="login-tit">登录</h2>
      <form>
        <el-input v-model="userName" placeholder="请输入用户名"></el-input>
        <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
        <el-col :span="20" :offset="2">
          <el-button @click.prevent="login" native-type="button" type="primary">登录</el-button>
        </el-col>
      </form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'PLogin',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$axios
        .post('/public/login', {
          userName: this.userName,
          password: this.password
        })
        .then(response => {
          let res = response.data
          if (res.success) {
            this.$store.commit('user/login')
            this.$router.push({ name: 'editor' })
            localStorage.setItem('elpsycongroo', res.token)
          } else {
            this.$message({
              message: res.error,
              type: 'warning'
            })
          }
        })
    }
  }
}
</script>
<style lang='scss' scoped>
  .box-card {
    width: 400px;
    margin-top: 120px;
    text-align: center;
  }
  .login-wrapper {
    display: flex;
    justify-content: center;
    animation-name: html_page;
    animation-duration: 600ms;
    animation-timing-function: ease-in-out;
  }
  @keyframes html_page {
    0% {
      transform-origin: 50% 50%;
      transform: rotate3d(0, 1, 0, 720deg) rotateZ(45deg) scale(0);
    }

    100% {
      transform: rotate3d(0, 1, 0, 0) rotateZ(0) scale(1);
    }
  }
  .login-tit {
    margin-bottom: 20px;
    line-height: 1;
  }
  .el-row {
    justify-content: center;
  }
  .el-input {
    margin-bottom: 20px;
  }
  .el-button {
    width: 100%;
    margin-bottom: 20px;
  }
</style>
