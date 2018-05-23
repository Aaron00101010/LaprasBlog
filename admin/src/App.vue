<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  components: {}
}
</script>

<style lang='scss'>
  @import '@/css/common.scss';
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }
</style>
