<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import PHomePage from '@/components/page/PHomePage'
export default {
  name: 'App',
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  components: {
    PHomePage
  }
}
</script>

<style lang='scss'>
@import '@/css/common.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
