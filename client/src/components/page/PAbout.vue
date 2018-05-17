<template>
  <div class="about">
    <h2>About</h2>
    <div>
      时间如露水，然而，然而
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PAbout'
  }
</script> 

<style lang="scss" scoped>
  @import '@/css/mixin.scss';
  .about {
    @include cardShadow();
    padding: 20px;
    background: #fff;
    margin-bottom: 10px;
  }
</style>

