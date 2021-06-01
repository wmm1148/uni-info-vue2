<template>
  <div>
    <elite-form />
  </div>
</template>

<script>
export default {
  components: {
    'elite-form': () => import('@/student/view/elite-form.vue')
  },
  created () {
    console.log(this);
  }
}
</script>
