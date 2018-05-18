<template>
  <div class="setting-wrapper">
    <el-row type="flex" justify='space-between'>
      <el-col :span="18">
        <el-col :span="7">
          <el-input placeholder="请输入文章标题" v-model="title"></el-input>
        </el-col>
        <el-col :span="12" :offset="1">
          <el-select class="tag-selector" v-model="tags.tagList" multiple filterable allow-create default-first-option placeholder="请选择文章标签">
            <el-option v-for="item in tags.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-col>
      </el-col>
      <div class="operate-btns">
        <el-button type="danger">保存</el-button>
        <el-button type="primary">发布</el-button>
        <el-button type="success">隐藏</el-button>
      </div>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'MEditorSetting',
  data () {
    return {
      title: '',
      tags: {
        options: [
          {
            value: 'HTML',
            label: 'HTML'
          },
          {
            value: 'CSS',
            label: 'CSS'
          },
          {
            value: 'JavaScript',
            label: 'JavaScript'
          }
        ],
        tagList: []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .setting-wrapper {
    padding: 10px;
  }
  .tag-selector {
    width: 100%;
  }
  .operate-btns {
    align-self: flex-end;
  }
</style>
