<template>
  <div>
    <!-- <stu-info-view  v-if="$route.matched.length === 2"/>
    <router-view v-else /> -->
    <!-- <wang-editor /> -->
    <ChartLine ref="chart_line_one"/>  
  </div>
</template> 

<script>
export default {
  components: {
    // 'stu-info-view': () => import('../view/wangeditor-view.vue')
    // 'stu-info-view': () => import('../view/wangeditor-view.vue')
    // 'wang-editor': () => import('/components/common/wangeditor.vue')
    'ChartLine': () => import('/components/display/chartLine.vue')
  },
  data(){
        return{
          name:'张雪',
          xData: ['2020-02', '2020-03', '2020-04', '2020-05'],
          yData: [30, 132, 80, 134],
        }
    },
    mounted () {
      const {name,xData,yData} = this
      console.log(this.$refs)
      // this.$refs.chart_line_one.initChart(name,xData,yData)
      this.$refs.initChart(name,xData,yData)
    },
}
</script>