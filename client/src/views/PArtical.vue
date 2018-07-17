<template>
  <div class="markdown-detail">
    <div v-if="isLoading">
      <content-placeholders :rounded="true">
        <content-placeholders-heading :img="true" />
        <content-placeholders-text :lines="5" />
        <content-placeholders-img />
        <content-placeholders-heading/>
        <content-placeholders-text :lines="5" />
        <content-placeholders-heading :img="true" />
        <content-placeholders-text :lines="5" />
        <content-placeholders-img />
        <content-placeholders-heading/>
        <content-placeholders-text :lines="5" />
      </content-placeholders>
    </div>
    <div v-else>
      <div class="title">{{title}}</div>
      <div class="content" v-html="parseContent"></div>
      <div class="comment" id="disqus_thread">
      </div>
    </div>
  </div>
</template>
<script>
import { marked } from '@/utils/parse-markdown'
export default {
  data() {
    return {
      id: this.$route.params.id,
      title: '',
      content: '',
      isLoading: false
    }
  },
  computed: {
    parseContent() {
      return `<div class="markdown-wrapper">${marked(this.content)}</div>`
    }
  },
  created() {
    this.getArticalInfo()
  },
  methods: {
    getArticalInfo() {
      this.isLoading = true
      const now = Date.now()
      this.$axios(`/public/artical/${this.id}`).then(resp => {
        const res = resp.data
        const passTime = Date.now() - now
        if (passTime < 500) {
          setTimeout(() => {
            this.isLoading = false
          }, 500 - passTime)
        } else {
          this.isLoading = false
        }
        if (resp.data.success) {
          this.title = res.data.title
          this.content = res.data.content

          window.disqus_config = function() {
            this.page.url = window.location.href + '!#' + res.data.id
            this.page.identifier = 'blog-' + res.data.id
            this.page.title = res.data.title
          }

          var d = document,
            s = d.createElement('script')
          s.src = 'https://aaron00101010-2.disqus.com/embed.js'
          s.setAttribute('data-timestamp', +new Date())
          ;(d.head || d.body).appendChild(s)
          s.onerror = () =>
            d.querySelector('#disqus_thread').innerHTML('无法连接至diqus.com')
        } else {
          this.content = res.error
        }
      })
    }
  },
  updated() {
    const id = this.id
    const title = this.title
    window.DISQUS &&
      window.DISQUS.reset({
        reload: true,
        config: function() {
          this.page.url = window.location.href + '!#' + id
          this.page.identifier = 'blog-' + id
          this.page.title = title
        }
      })
  },
  watch: {
    $route: function(val) {
      this.id = val.params.id
      this.title = ''
      this.content = ''
      this.getArticalInfo()
    }
  }
}
</script>
<style lang="scss" scoped>
.markdown-detail {
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

