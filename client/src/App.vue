<template>
  <div id="app">
    <div class="page-container">
      <c-menu></c-menu>
      <div class="page-content">
        <router-view></router-view>
      </div>
    </div>
    <c-footer></c-footer> 
  </div>
</template> 

<script>
  import CMenu from './components/common/CMenu'
  import CFooter from './components/common/CFooter'

  export default {
    name: 'App',
    components: {
      CMenu,
      CFooter
    },
    data() {
      return {
        transitionName: ''
      }
    }
  }
</script>
<style lang='scss' scoped>
  @import "@/css/var.scss";
  @import "@/css/animation.scss";
  #app {
      height: 100%;
  }
  .page-container {
      height: 100%;
      margin-bottom: -$footer-height;
      &::after {
          content: "";
          display: block;
          height: $footer-height;
      }
  }
  .page-content {
      margin: 0 auto;
      max-width: $page-max-width;
      margin: 20px 15px;
      position: relative;
  }
</style>
