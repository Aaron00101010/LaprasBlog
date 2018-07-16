<template>
  <div class="artical-item">
    <div class="top-part">
      <a href="">{{title}}</a>
      <span>{{new Date(date).toDateString()}}</span>
    </div>
    <div class="perview" v-html="parsedMarkdown"></div>
    <div class="read-more">
      <a href="read-more">继续阅读 »</a>
    </div>
  </div>
</template>
<script>
import { marked } from '@/utils/parse-markdown'
const itemData = {
  id: 1,
  title: '哈哈哈哈哈哈啊哈哈',
  date: '2017-02-03',
  update: '2017-03-06',
  preview:
    "## 123 \n ![](http://placehold.it/100x100) \n ```js \n const model = require('../models/artical'); \n const {escapeObj,unescapeObj} = require('../utils/escape') \n class ArticalControllers { async getArticalList(ctx) { await model.getArticalList().then(value => { value.forEach(item=>unescapeObj(item)) ctx.body = { success: true, data: value }; }); } async getArticalDetail(ctx) { await model.getArticalDetail(ctx.params.id).then(value => { if (value.length === 0) { ctx.body = { success: false, err ```"
}

export default {
  name: 'artical-item',
  data() {
    return itemData
  },
  computed: {
    parsedMarkdown() {
      return marked(this.preview)
    }
  }
}
</script>
<style lang="scss" scoped>
.artical-item {
  padding: 30px 0;
  border-bottom: 1px solid #ddd;
  word-break: break-all;
}
.top-part {
  a {
    color: #333;
    transition: color 0.3s;
    font-size: 2em;
    font-weight: 300;
    line-height: 35px;
    &:hover {
      color: seagreen;
    }
  }
  span {
    position: relative;
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
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

