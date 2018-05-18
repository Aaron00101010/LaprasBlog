<template>
    <el-container id="editor">
      <el-aside class="artical-list-wrapper" width='200px'>
        <m-editor-artical-list/>
      </el-aside>
      <el-container>
        <el-header class="editor-setting-wrapper" style="height:auto">
            <m-editor-setting />
        </el-header>
        <el-main class="editor-wrapper">
           <mavon-editor />
        </el-main>
      </el-container>
    </el-container>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import MEditorArticalList from '@/components/mod/MEditorArticalList'
import MEditorSetting from '@/components/mod/MEditorSetting'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'PEditor',
  components: {
    mavonEditor,
    MEditorArticalList,
    MEditorSetting
  }
}
</script>
<style lang='scss' scoped>
#editor {
  margin: auto;
  width: 100%;
  height: 100%;
}
.artical-list-wrapper{
  border-right: 1px solid #eee;

}
.editor-setting-wrapper{
  padding:0;
  border-bottom: 1px solid #eee;
  height: auto;
}
.editor-wrapper{
  padding: 0;
  display: flex;
  align-items: stretch;
  &>*{
    width: 100%;
  }
}
</style>
