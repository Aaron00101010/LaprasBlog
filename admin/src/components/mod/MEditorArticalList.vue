<template>
  <div>
    <div class="add-artical">
      <el-button type="warning">新建文章</el-button>
    </div>
    <ul class="list">
      <li class="list-item" v-for="item in articalList" :key="item.id">
        <p class="artical-title">{{item.title}}</p>
        <p class="artical-date">date:{{item.date}}</p>
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
      articalList: [
        {
          id: 10,
          title: '关于的看法垃圾的',
          date: '2017-06-08 11:00:23',
          preview:
              '阿第克法拉第考虑是否就爱看十点零分短发的首付贷款首付骄傲劳动节快乐'
        },
        {
          id: 11,
          title: 'rua',
          date: '2017-06-08 11:00:23',
          preview:
              '阿第克法拉第考虑是否就爱看十点零分短发的首付贷款首付骄傲劳动节快乐'
        }
      ]
    }
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
  }
</style>
