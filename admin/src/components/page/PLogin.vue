<template>
  <div class="login-wrapper">
      <el-card class="box-card">
        <h2>用户登录</h2>
        <form action="./2" >
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
          <el-input type="password" v-model="password" placeholder="请输入密码"></el-input>
          <el-col :span='20' :offset='2'>
            <el-button native-type='button' type="primary">登录</el-button>
          </el-col>
        </form>
      </el-card>
  </div>
</template>

<script>
export default{
  name: 'PLogin',
  data () {
    return {
      username: '',
      password: ''
    }
  }
}
</script>
<style>
.box-card{
  width: 400px;
}
.login-wrapper{
  display: flex;
  justify-content: center;
}
.el-row{
  justify-content: center;
}
.el-input{
  margin-bottom: 20px;
}
.el-button{
  width: 100%;
  margin-bottom: 20px;
}
</style>
