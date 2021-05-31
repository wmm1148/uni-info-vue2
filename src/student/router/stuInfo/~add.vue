<template>
  <div>
    <stu-info-form />
  </div>
</template>

<script>
export default {
  components: {
    'stu-info-form': () => import('@/student/view/stuInfo-form.vue')
  },
  created () {
    console.log(this);
  }
}
</script>
