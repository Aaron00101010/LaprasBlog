<template>
  <div id="app">
    <div class="page-container">
      <div class="page-content">
        <div class="header">
          <h3>Aaron's Blog</h3>
          <span>KEEP CLAM,It's not BUG,It's a FEATURE.</span>
        </div>
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
<style lang="scss" scoped>
#app,
.page-container {
  min-height: 100vh;
  margin-bottom: -50px;
}
.page-container {
  &:after {
    content: '';
    display: block;
    height: 50px;
  }
}
#app {
  width: 750px;
  max-width: 90%;
  margin: 0 auto;
}
.header {
  margin-bottom: 25px;
  h3 {
    font-size: 32px;
    line-height: 2.5;
    font-weight: 600;
    display: inline-block;
    color: #333;
    padding-right: 1em;
  }
  span {
    color: #777;
    font-size: 14px;
    display: inline-block;
    vertical-align: middle;
    line-height: 1;
  }
}
</style>
