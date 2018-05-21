<template>
  <div class="login-wrapper">
    <el-card class="box-card">
      <h2 class="login-tit">用户登录</h2>
      <form action="./2">
        <el-input v-model="userName" placeholder="请输入用户名"></el-input>
        <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
        <el-col :span="20" :offset="2">
          <router-link :to="{name:'home'}">
            <el-button @click="login" native-type="button" type="primary">登录</el-button>
          </router-link>
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
        .post('/login', {
          userName: this.userName,
          password: this.password
        })
        .then(val => {
          if (val.success) {
            this.$router.push({ name: 'editor' })
          } else {
            console.log(val.error)
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
