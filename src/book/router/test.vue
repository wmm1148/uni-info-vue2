<template>
  <div>
    <!-- <stu-info-view  v-if="$route.matched.length === 2"/>
    <router-view v-else /> -->
    <wang-editor />
  </div>
</template> 

<script>
export default {
  components: {
    // 'stu-info-view': () => import('../view/wangeditor-view.vue')
    // 'stu-info-view': () => import('../view/wangeditor-view.vue')
    'wang-editor': () => import('/components/common/wangeditor.vue')
  },
}
</script>