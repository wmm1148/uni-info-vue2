<template>
  <div>
    <analysis />
  </div>
</template>

<script>
  export default {
    components: {
      'analysis': () => import('../view/analysis-view.vue')
    },
  }
</script>

<style lang="less" scoped>

</style>