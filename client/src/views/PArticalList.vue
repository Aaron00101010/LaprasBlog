<template>
  <div class="content-wrapper">
    <div v-if="isLoading" style="padding-top:30px;">
      <content-placeholders v-for="key in [1,2,3,4,5,6,7,8,9,10]" :key="key" :rounded="true">
        <content-placeholders-heading :img="true" />
        <content-placeholders-text :lines="2" />
      </content-placeholders>
    </div>
    <div v-else>
      <m-artical-item v-for="item in articalList" :artical-data="item" :key="item.id"></m-artical-item>
      <div class="page" v-if="pagenation.totalPage!==1">
        <a href="javascript:void(0)" class="prev" @click="$router.push({ name: 'articalList', params: { page: pagenation.currentPage-1 } })" v-if="pagenation.currentPage!==1">
          « 上一页
        </a>
        <a href="javascript:void(0)" @click="$router.push({ name: 'articalList', params: { page: pagenation.currentPage+1 } })" class="next" v-if="pagenation.currentPage!==pagenation.totalPage">下一页 »</a>
      </div>
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
  data() {
    return {
      articalList: [],
      isLoading: false,
      pagenation: {
        totalPage: 1,
        currentPage: this.$route.params.page
      }
    }
  },
  created() {
    this.getArticalList()
  },
  methods: {
    getArticalList(page = 1) {
      this.isLoading = true
      const now = Date.now()
      this.$axios
        .get(`/public/articalList/${this.$route.params.page}`)
        .then(resp => {
          const passTime = Date.now() - now
          if (passTime < 500) {
            setTimeout(() => {
              this.isLoading = false
            }, 500 - passTime)
          } else {
            this.isLoading = false
          }
          if (resp.data.success === true) {
            this.pagenation = resp.data.pagenation
            this.articalList = resp.data.data
          }
        })
    }
  },
  watch: {
    pagenation: function(val) {
      if (val.currentPage > val.totalPage) {
        val.currentPage = 1
        this.$router.push({ name: 'articalList', params: { page: 1 } })
      }
    },
    $route: function(val) {
      this.getArticalList(val.params.page)
    }
  }
}
</script>
<style lang="scss" scoped>
.vue-content-placeholders {
  margin-bottom: 50px;
}
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
