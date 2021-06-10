<template>
  <div>
    <div id="main" style="width: 200px;height:40px;"></div>
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
          var myChart = echarts.init(document.getElementById('main'));

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
            // backgroundColor: '#2c343c',
            //设置文本颜色，也可以在label.textStyle进行设置
            //但是这里并没有起作用
            // textStyle: {
            //   color: 'rgba(255, 255, 2, 1)'
            // },
            // lineStyle: {
            //   color: 'rgba(255, 255, 255, 0.3)'
            // },
            // visualMap: {
            //   // 不显示 visualMap 组件，只用于明暗度的映射
            //   show: false,
            //   // 映射的最小值为 80
            //   min: 80,
            //   // 映射的最大值为 600
            //   max: 600,
            //   inRange: {
            //       // 明暗度的范围是 0 到 1
            //       colorLightness: [0, 1]
            //   }
            // }
          };
          // 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);
        // })
      }
    }
    
  }
</script>

<style lang="less" scoped>

</style>