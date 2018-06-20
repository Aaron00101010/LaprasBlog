<template>
    <div class="content-wrapper">
      <m-artical-item></m-artical-item>
    </div>
</template>
<script>
import MArticalItem from '@/components/mod/MArticalItem'

export default {
  name: 'PArticalList',
  components: {
    MArticalItem
  },
  created () {

  }
}
</script>
<style lang="scss" scoped>
.content-wrapper{
  width: 1000px;
  margin: 0 auto;
  background:url(http://placehold.it/1000x1000);
}
</style>
