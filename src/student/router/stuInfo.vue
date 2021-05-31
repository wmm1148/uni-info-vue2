<template>
  <div>
    <stu-info-view  v-if="$route.matched.length === 2"/>
    <router-view v-else />
  </div>
</template> 

<script>
export default {
  components: {
    'stu-info-view': () => import('../view/stuInfo-view.vue')
  },
}
</script>