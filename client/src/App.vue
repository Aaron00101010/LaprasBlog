<template>
  <div id="app">
    <div class="page-container">
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
  data () {
    return {
      transitionName: ''
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
