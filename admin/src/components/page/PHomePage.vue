<template>
  <el-container class='container'>
    <el-aside class="sidebar" width="60px">
      <router-link :to="{name:'editor'}">
        <div class="menu-item">📄</div>
      </router-link>
      <router-link :to="{name:'home'}">
        <div class="menu-item">📦</div>
      </router-link>
    </el-aside>
    <el-main class="content">
      <router-view/>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'PHomePage'
}
</script>

<style lang='scss' scoped>
  .menu-item {
    padding: 10px 0;
    &:hover {
      background-color: #eee;
    }
  }
  .container{
    display: flex;
    align-items: stretch;
    height:100%;
  }
  .sidebar {
    border-right: 1px solid #eee;
    font-size: 20px;
    text-align: center;
    padding: 20px 0;
  }
  .content{
    padding: 0;
  }
</style>
