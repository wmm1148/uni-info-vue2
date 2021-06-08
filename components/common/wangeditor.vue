<template>
  <div class="editor-wrapper">
    <div id="div1" class="editor-content">
    </div>
  </div>
</template>

<script>
import E from 'wangeditor'

  export default {
    mounted() {
      this.createEditor();
    },
    methods: {
      createEditor() {
        // const editor = new E('#div1')
        const editor = new E( document.getElementById('div1') )
        editor.config.height = 400;
        editor.config.showFullScreen = false;


        editor.create()
      }
    },
  }
</script>

<style lang="less" scoped>
.editor-wrapper {
}
.editor-content {
  // width: 800px;
}
</style>