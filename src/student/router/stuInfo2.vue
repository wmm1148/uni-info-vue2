<template>
  <a-card class="stu-card" title="Student Information222222222" :headStyle='headStyle'>
    <h2>
      hhhhhhhhhhhhhhh
    </h2>
  </a-card>
</template>

<script>
export default {
  data () {
    return {
      headStyle: { 'font-weight': 'bold' }
    }
  },
  components: {
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
