<template>
  <div class="footer">
    <span>Copyright © Lapras Blog {{currentYear}} </span>
    <span>Power by Vue and Koa</span>
  </div>
</template>

<script>
export default {
  name: 'CFooter',
  data: function() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/css/var.scss';
.footer {
  height: $footer-height;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  color: #888;
}
</style>
