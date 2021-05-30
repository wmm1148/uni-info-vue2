<template>
  <div>
    <a-card class="stu-card" title="Student Information" :headStyle='headStyle'  v-if="$route.matched.length === 2">
      <stu-info-view />
    </a-card>
    <a-card class="stu-card" title="Detail Information" :headStyle='headStyle' v-else>
      <router-view />
    </a-card>
  </div>
</template> 

<script>
export default {
  data () {
    return {
      headStyle: { 'font-weight': 'bold' }
    }
  },
  components: {
    'stu-info-view': () => import('../view/stuInfo-view.vue')
  }
}
</script>
<style scoped>
.stu-card {
  /* display: inline; */
    background: #feffff;
    width: 98%;
    margin: 12px auto;
    /* height: 100%; */
    height: auto;
    text-align: left;
}
.ant-card-body {
  padding: 0 24px 24px 24px;
}
</style>
