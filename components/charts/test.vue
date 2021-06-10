<template>
  <div>
    <div id="test" class="charts-layout"></div>
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
          var myChart = echarts.init(document.getElementById('test'));

          // 指定图表的配置项和数据
          var option = {
            dataset: {
              // dimensions: ['week', 'value'],
              source: [
                ['week', 'value'],
                  ['Mon', 820],
                  ['Tue', 932],
                  ['Wed', 932],
                  ['Thu', 932],
                  ['Fri', 932],
                  ['Sat', 932],
                  ['Sun', 932]
              ]
            },
            xAxis: { type: 'category' },
            yAxis: { type: 'value' },
            series: [{
              encode: {
                x: 'week',
                y: 'value'
              },
              type: 'line',
              areaStyle: {}
            }],
          }
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
        // })
      }
    }
    
  }
</script>

<style lang="less" scoped>
.charts-layout {
  width: 400px;
  height:80px;
}
</style>