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
      <el-dropdown>
        <span class="el-dropdown-link">
          操作<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>保存</el-dropdown-item>
          <el-dropdown-item>发布</el-dropdown-item>
          <el-dropdown-item>隐藏</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>
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
  padding: 10px 20px 10px 10px;
}
.tag-selector {
  width: 100%;
}
.operate-btns {
  align-self: flex-end;
}
.el-dropdown-link {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.el-dropdown-menu {
  margin-top: -5px;
}
</style>
