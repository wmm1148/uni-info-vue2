<template>
  <div>
    <div id="miniArea" class="charts-layout"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  export default {
    name: 'MiniArea',
    mounted() {
      //这种方式渲染会有问题
      this.initChart();
    },
    methods: {
      initChart() {
        // (document).ready(function(){
          var myChart = echarts.init(document.getElementById('miniArea'));

          // 指定图表的配置项和数据
          var option = {
            xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            areaStyle: {}
            }],
          };
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
        // })
      }
    }
    
  }
</script>

<style lang="less" scoped>
.charts-layout {
  width: 300px;
  height:80px;
}
</style>