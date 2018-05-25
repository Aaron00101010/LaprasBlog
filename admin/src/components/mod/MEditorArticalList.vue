<template>
  <div>
    <div class="add-artical">
      <el-button type="warning">新建文章</el-button>
    </div>
    <ul class="list">
      <li class="list-item" @click="articalDetail(item.id)" v-for="item in articalList" :key="item.id">
        <p class="artical-title">{{item.title}}</p>
        <p class="artical-date">{{item.createTime}}</p>
        <p class="artical-preview">{{item.preview}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'MEditorArticalList',
  data () {
    return {
      articalList: []
    }
  },
  methods: {
    articalDetail (id) {
      this.$axios.get(`/api/articalDetail/${id}`).then(response => {
        let res = response.data
        if (res.success) {
          this.$store.commit('artical/updateCurrentArtical', res.data)
        } else {
          this.$message(res.error)
        }
      })
    }
  },
  beforeCreate () {
    this.$axios.get('/api/articalList').then(response => {
      let data = response.data
      if (data.success) {
        this.articalList = data.data
      } else {
        this.$message(data.error)
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  .list {
    border-right: 1px solid #eee;
  }
  .list-item {
    padding: 5px 10px;
    transition: background-color 0.15s;
    cursor: pointer;
    &:hover {
      background-color: #eee;
    }
  }
  .add-artical {
    padding: 10px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: center;
  }
  .artical-title {
    font-weight: bold;
    font-size: 16px;
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
