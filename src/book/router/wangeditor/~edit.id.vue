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
    'stu-info-form': () => import('@/book/view/wangeditor-form.vue')
  },
  created () {
    console.log(this);
  }
}
</script>
