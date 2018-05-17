<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
export default {
  name: 'PHomePage'
}
</script>

<style scoped>
  .el-container{
    height:100%;
  }
  .el-aside{
    border-right:1px solid #000;
  }
</style>
