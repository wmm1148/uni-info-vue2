<template>
  <div>
    <div id="main" style="width: 600px;height:400px;"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts';
  export default {
    name: 'MiniPie',
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
            series : [{
              name: '访问来源',
              type: 'pie',
              radius: '55%',
              roseType: 'angle', //显示成南丁格尔图。
              data:[
                {value:235, name:'视频广告', itemStyle: { color: '#c23531' }},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
              ],
              itemStyle: {
                //可以设置扇形颜色
                // color: '#c23531',
                // 阴影的大小
                shadowBlur: 200,
                // 阴影水平方向上的偏移
                shadowOffsetX: 0,
                // 阴影垂直方向上的偏移
                shadowOffsetY: 0,
                // 阴影颜色
                shadowColor: 'rgba(0, 0, 0, 0.5)',
                //hover 时候的高亮样式
                emphasis: {
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },
        }
            ],
            // backgroundColor: '#2c343c',
            //设置文本颜色，也可以在label.textStyle进行设置
            //但是这里并没有起作用
            textStyle: {
              color: 'rgba(255, 255, 2, 1)'
            },
            lineStyle: {
              color: 'rgba(255, 255, 255, 0.3)'
            },
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