<template>
  <div>
    <wang-editor-view  v-if="$route.matched.length === 2"/>
    <router-view v-else />
  </div>
</template> 

<script>
export default {
  components: {
    // 'stu-info-view': () => import('../view/wangeditor-view.vue')
    'wang-editor-view': () => import('../view/wangeditor-view.vue')
  },
}
</script>