<template>
  <div class="artical-item">
    <div class="top-part">
      <a href="javascript:void(0)" @click="$router.push(`/artical/${articalData.id}`)">{{articalData.title}}</a>
      <span v-if="articalData.publishTime!=='null'">{{new Date(articalData.publishTime).toDateString()}}</span>
    </div>
    <div class="perview" v-html="parsedMarkdown"></div>
    <div class="read-more">
      <a href="javascript:void(0)" @click="$router.push(`/artical/${articalData.id}`)">继续阅读 »</a>
    </div>
  </div>
</template>
<script>
import { marked } from '@/utils/parse-markdown'

export default {
  name: 'artical-item',
  props: ['articalData'],
  computed: {
    parsedMarkdown() {
      return marked(this.articalData.preview)
    }
  }
}
</script>
<style lang="scss" scoped>
.artical-item {
  padding: 30px 0;
  border-bottom: 1px solid #ddd;
  word-break: break-all;
  text-align: justify;
}
.top-part {
  overflow: hidden;
  a {
    color: #333;
    transition: transform 0.3s;
    font-size: 2em;
    font-weight: 300;
    line-height: 35px;
    display: block;
    float: left;
    color: seagreen;
    &:hover {
      transform: translateX(3px);
      text-decoration: none;
    }
  }
  span {
    float: right;
    color: #666;
    font-size: 1em;
    line-height: 2;
    width: auto;
    vertical-align: bottom;
  }
  margin-bottom: 25px;
}
.perview {
  font-size: 16px;
  line-height: 1.8;
  overflow-wrap: break-word;
  -webkit-font-smoothing: antialiased;
  text-align: justify;
  overflow: auto;
}
.read-more {
  margin-top: 15px;
  a {
    color: seagreen;
  }
}
</style>

