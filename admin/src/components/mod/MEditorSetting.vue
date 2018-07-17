<template>
  <div class="setting-wrapper">
    <el-row type="flex" justify='space-between'>
      <el-col :span="18">
        <el-col :span="7">
          <el-input placeholder="请输入文章标题" v-model="title">
             <template slot="prepend">标题</template>
          </el-input>
        </el-col>
        <el-col :span="7" :offset="1">
          <el-select class="tag-selector" v-model="tagList" multiple filterable allow-create default-first-option placeholder="请选择文章标签">
            <el-option v-for="item in elTags.options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-col>
      </el-col>
      <el-dropdown @command='handleCommand'>
        <span class="el-dropdown-link">
          操作
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command='saveArtical'>保存</el-dropdown-item>
          <el-dropdown-item command='publish'>发布</el-dropdown-item>
          <el-dropdown-item command='unpublish'>隐藏</el-dropdown-item>
          <el-dropdown-item command='delete'>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'MEditorSetting',
  data: function () {
    return {}
  },
  computed: {
    ...mapState('artical', ['currentArtical']),
    elTags: function () {
      return {
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
        ]
      }
    },
    title: {
      get () {
        return this.currentArtical.title
      },
      set (value) {
        this.$store.commit('artical/updateCurrentArtical', {
          title: value
        })
      }
    },
    tagList: {
      get () {
        return this.currentArtical.tags === ''
          ? []
          : this.currentArtical.tags.split('|')
      },
      set (value) {
        value.filter(item => item !== '')
        this.$store.commit('artical/updateCurrentArtical', {
          tags: value.length === 0 ? '' : value.join('|')
        })
      }
    }
  },
  methods: {
    handleCommand (command) {
      if (command === 'saveArtical') {
        this.$axios({
          url: '/api/updateArtical',
          method: 'post',
          data: this.currentArtical
        }).then(resp => {
          var res = resp.data
          if (res.success) {
            this.$message('保存成功！')
            this.$store.commit('artical/updateArticalList')
          } else {
            this.$message(res.error)
          }
        })
      } else if (command === 'publish') {
        this.$axios({
          url: '/api/publishArtical',
          method: 'post',
          data: {id: this.currentArtical.id}
        }).then(resp => {
          var res = resp.data
          if (res.success) {
            this.$message('发布成功！')
            this.$store.commit('artical/updateArticalList')
          } else {
            this.$message(res.error)
          }
        })
      } else if (command === 'unpublish') {
        this.$axios({
          url: '/api/unpublishArtical',
          method: 'post',
          data: {id: this.currentArtical.id}
        }).then(resp => {
          var res = resp.data
          if (res.success) {
            this.$message('隐藏成功！')
            this.$store.commit('artical/updateArticalList')
          } else {
            this.$message(res.error)
          }
        })
      } else if (command === 'delete') {
        this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log(this)
          this.$axios({
            url: '/api/deleteArtical',
            method: 'post',
            data: {id: this.currentArtical.id}
          }).then(resp => {
            var res = resp.data
            if (res.success) {
              this.$message('删除成功！')
              this.$store.commit('artical/updateArticalList')
              this.$store.commit('artical/setLastArticalID', void 0)
            } else {
              this.$message(res.error)
            }
          })
        })
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
