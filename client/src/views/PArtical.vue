<template>
  <div class="markdown-detail">
    <div class="title">{{title}}</div>
    <div class="content" v-html="parseContent"></div>
    <div class="comment" id="disqus_thread">
    </div>
  </div>
</template>
<script>
import { marked } from '@/utils/parse-markdown'
export default {
  data() {
    return {
      id: this.$route.params.id,
      title: '[译]JSON Web Token Intro',
      content:
        "## setTimeout  \n 的咖啡机阿斯达克放假啊士大夫 \n 握手**事件循环** \n >123咖啡机奥克兰打飞机咯积分卡书法家阿斯顿 \n ![](http://placehold.it/1000x1000) \n `javascript` \n \n ```js \n const model = require('../models/artical'); \n const {escapeObj,unescapeObj} = require('../utils/escape') \n class ArticalControllers { async getArticalList(ctx) { await model.getArticalList().then(value => { value.forEach(item=>unescapeObj(item)) ctx.body = { success: true, data: value }; }); } async getArticalDetail(ctx) { await model.getArticalDetail(ctx.params.id).then(value => { if (value.length === 0) { ctx.body = { success: false, err ``` \n ## setInterverl"
    }
  },
  computed: {
    parseContent() {
      return `<div class="markdown-wrapper">${marked(this.content)}</div>`
    }
  },
  created() {
    // this.$axios.get(`/api/articalDetail/1`).then(response => {
    //   let res = response.data
    //   if (res.success) {
    //     var data = res.data
    //     data.content = data.content === 'null' ? '' : data.content
    //     this.content = data.content
    //   }
    // })
  },
  mounted() {
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
    const id = this.id
    const title = this.title
    window.disqus_config = function() {
      this.page.url = 'blog-' + id // Replace PAGE_URL with your page's canonical URL variable
      this.page.identifier = 'blog-' + id // Replace PAGE_IDENTIFIER with your page's unique identifier variable
      this.page.title = title
      console.log(this)
    }

    var d = document,
      s = d.createElement('script')
    s.src = 'https://aaron00101010-2.disqus.com/embed.js'
    s.setAttribute('data-timestamp', +new Date())
    ;(d.head || d.body).appendChild(s)
    s.onerror = () =>
      d.querySelector('#disqus_thread').innerHTML('无法连接至diqus.com')
  }
}
</script>
<style lang="scss" scoped>
.markdown-detail {
  width: 750px;
  margin: 30px auto;
  .title {
    color: seagreen;
    transition: color 0.3s;
    font-size: 2em;
    font-weight: 300;
    line-height: 2;
  }
  .comment {
    margin-top: 50px;
  }
}
</style>

