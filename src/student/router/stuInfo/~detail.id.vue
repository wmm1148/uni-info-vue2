<template>
  <div>
    <stu-info-profile v-bind="$props"></stu-info-profile>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  components: {
    'stu-info-profile': () => import('@/student/view/stuInfo-profile.vue')
  },
  created () {
    console.log(this);
  }
}
</script>
