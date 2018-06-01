<template>
  <div class="artical-list-wrapper">
    <div class="add-artical">
      <el-button type="primary" @click="addArtical">新建文章</el-button>
    </div>
    <ul class="list scroll-style">
      <li class="list-item" :class='{active:activeIndex===item.id}' @click="articalDetail(item.id);activeIndex=item.id" v-for="item in articalList" :key="item.id">
        <p class="artical-title">{{item.title}}</p>
        <div class="artical-date-wrapper">
          <p class="artical-date">{{item.createTime}}</p>
          <span class="artical-status" :class="{active:item.isPublish==='true'}">{{item.isPublish==='true'?'已发布':'未发布'}}</span>
        </div>
        <p class="artical-preview">{{item.preview}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import dayjs from 'dayjs'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'MEditorArticalList',
  data () {
    return {
      articalList: [],
      activeIndex: void 0
    }
  },
  methods: {
    articalDetail (id) {
      this.$axios.get(`/api/articalDetail/${id}`).then(response => {
        let res = response.data
        if (res.success) {
          var data = res.data
          data.content = data.content === 'null' ? '' : data.content
          this.$store.commit('artical/updateCurrentArtical', res.data)
          this.$store.commit('artical/setLastArticalID', id)
        } else {
          this.$message(res.error)
        }
      })
    },
    addArtical () {
      this.$axios
        .post('/api/addArtical')
        .then(response => {
          let res = response.data
          if (res.success) {
            return 'refreshList'
          } else {
            this.$message(res.error)
          }
        })
        .then(val => {
          if (val === 'refreshList') {
            this.getArticalList()
          }
        })
    },
    getArticalList () {
      return this.$axios
        .get('/api/articalList')
        .then(response => {
          let data = response.data
          if (data.success) {
            var arr = data.data
            arr.forEach(item => {
              item.createTime = dayjs(item.createTime).format(
                'YYYY/MM/DD HH:mm:ss'
              )
              for (let key in item) {
                if (item[key] === 'null') item[key] = ''
              }
            })
            this.articalList = arr
            var storeID = this.$store.state.artical.lastArticalID
            this.activeIndex = storeID || this.articalList[0].id
            this.articalDetail(this.activeIndex)
          } else {
            this.$message(data.error)
          }
        })
        .catch(val => this.$message(val))
    },
    ...mapMutations('artical', ['resetRefreshArticalListFlag'])
  },
  computed: {
    ...mapState('artical', {
      refreshFlag: state => state.refreshArticalListFlag
    })
  },
  watch: {
    refreshFlag: function (val) {
      if (val === true) {
        this.getArticalList().then(() => {
          this.resetRefreshArticalListFlag()
        })
      }
    }
  },
  created () {
    this.getArticalList()
  }
}
</script>
<style lang="scss" scoped>
  .artical-list-wrapper {
    height: 100vh;
    border-right: none;
  }
  .list {
    overflow: auto;
    height: calc(100vh - 60px);
  }
  .scroll-style::-webkit-scrollbar {
    width: 6px;
    margin-right: -1px;
    background-color: #e5e5e5;
  }
  .scroll-style::-webkit-scrollbar-thumb {
    background-color: #b7b7b7;
    border-radius: 3px;
  }
  .scroll-style::-webkit-scrollbar-thumb:hover {
    background-color: #a1a1a1;
  }
  .scroll-style::-webkit-scrollbar-thumb:active {
    background-color: #a1a1a1;
  }
  .scroll-style::-webkit-scrollbar-track {
    -webkit-box-shadow: 0 0 0px #808080 inset;
  }
  .list-item {
    padding: 5px 10px;
    transition: background-color 0.15s;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
    &.active {
      background-color: #eee;
    }
  }

  .add-artical {
    padding: 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: center;
    height: 60px;
  }
  .artical-title {
    font-weight: bold;
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .artical-date-wrapper {
    display: flex;
    justify-content: space-between;
    line-height: 24px;
  }
  .artical-status {
    font-size: 12px;
    color: #f56c6c;
    &.active {
      color: #67c23a;
    }
  }
  .artical-subtitle {
    color: #777;
    font-weight: light;
    font-size: 14px;
  }
  .artical-date {
    font-size: 12px;
    color: #999;
    line-height: 2;
  }
  .artical-preview {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }
</style>
