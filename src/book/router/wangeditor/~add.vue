<template>
  <div>
    <wang-editor-form />
  </div>
</template>

<script>
export default {
  components: {
    'wang-editor-form': () => import('@/book/view/wangeditor-form.vue')
  },
  created () {
    console.log(this);
  }
}
</script>
