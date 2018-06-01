<template>
  <keep-alive>
    <el-container id="editor">
      <el-aside class="artical-list-wrapper" width='200px'>
        <m-editor-artical-list/>
      </el-aside>
      <el-container>
        <el-header class="editor-setting-wrapper" style="height:auto">
          <m-editor-setting />
        </el-header>
        <el-main class="editor-wrapper">
          <mavon-editor v-model='content' code-style='atom-one-dark' :toolbars='toolbars' />
        </el-main>
      </el-container>
    </el-container>
  </keep-alive>
</template>
<script>
import { mapState } from 'vuex'
import { mavonEditor } from 'mavon-editor'
import MEditorArticalList from '@/components/mod/MEditorArticalList'
import MEditorSetting from '@/components/mod/MEditorSetting'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'PEditor',
  data () {
    return {
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: false, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        navigation: true, // 导航目录
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        subfield: true, // 单双栏模式
        preview: true // 预览
      }
    }
  },
  components: {
    mavonEditor,
    MEditorArticalList,
    MEditorSetting
  },
  computed: {
    ...mapState('artical', ['currentArtical']),
    content: {
      get () {
        return this.currentArtical.content
      },
      set (content) {
        this.$store.commit('artical/updateCurrentArtical', {
          content
        })
      }
    }
  }
}
</script>
<style lang='scss' scoped>
  #editor {
    margin: auto;
    width: 100%;
    height: 100%;
  }
  .artical-list-wrapper {
    border-right: 1px solid #eee;
  }
  .editor-setting-wrapper {
    padding: 0;
    border-bottom: 1px solid #eee;
    height: auto;
  }
  .editor-wrapper {
    padding: 0;
    display: flex;
    align-items: stretch;
    & > * {
      width: 100%;
    }
  }
</style>
