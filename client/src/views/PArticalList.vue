<template>
  <div class="content-wrapper">
    <m-artical-item></m-artical-item>
    <div class="page">
      <a href="" class="prev">« 上一页</a>
      <a href="" class="next">下一页 »</a>
    </div>
  </div>
</template>
<script>
import MArticalItem from '@/components/mod/MArticalItem'

export default {
  name: 'PArticalList',
  components: {
    MArticalItem
  },
  created() {}
}
</script>
<style lang="scss" scoped>
.content-wrapper {
  margin: 0 auto;
}
.page {
  width: 100%;
  line-height: 20px;
  position: relative;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
  overflow: hidden;
  font-size: 14px;
  a {
    color: seagreen;
    &:hover {
      text-decoration: underline;
    }
  }
  .prev {
    float: left;
  }
  .next {
    float: right;
  }
}
</style>
