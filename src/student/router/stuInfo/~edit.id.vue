<template>
  <div>
    <stu-info-form v-bind="$prop"/>
  </div>
</template>

<script>
export default {
  props:{
    id: {
      type: String,
      default: ''
    }
  },
  components: {
    'stu-info-form': () => import('@/student/view/stuInfo-form.vue')
  },
  created () {
    console.log(this);
  }
}
</script>
