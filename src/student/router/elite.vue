<template>
  <div>
    <elite-view  v-if="$route.matched.length === 2"/>
    <router-view v-else />
    <!-- <h1 v-else>uuuuuuuuuuuuuuu</h1> -->
  </div>
</template> 

<script>
export default {
  components: {
    'elite-view': () => import('../view/elite-view.vue')
  },
}
</script>