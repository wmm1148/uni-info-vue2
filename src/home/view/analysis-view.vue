<template>
  <div style="padding: 10px 20px;">
    <a-row :gutter="16" style="padding: 10px 0;">
      <a-col :span="6">
        <mini-chart-card>
          <template #title>
            <!-- kkk -->
          </template>
          <!-- <template #extra>
            hhhuss
          </template> -->
          <p>hhhhhhhhhhhhhhhhhhh</p>
          <!-- <template #actions>
            Daily Visit: 1234
          </template> -->
        </mini-chart-card>
      </a-col>
      <a-col :span="6">
        <mini-chart-card>
        </mini-chart-card>
      </a-col>
      <a-col :span="6">
        <mini-chart-card></mini-chart-card>
      </a-col>
      <a-col :span="6">
        <mini-chart-card></mini-chart-card>
      </a-col>
    </a-row>
    <a-row style="padding: 10px 0;">
      <a-card>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </a-card>
    </a-row>
    <a-row :gutter="16" style="padding: 10px 0">
      <a-col :span="12">
        <a-card style="height: 450px">
          <mini-pie></mini-pie>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card style="height: 450px">
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </a-card>
      </a-col>
    </a-row>
    <a-row style="padding: 10px 0;">
      <a-card>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </a-card>
    </a-row>
  </div>
</template>


<script>
// import { MiniPie } from '/components/charts/miniPie.vue'
export default {
  components: {
    'mini-chart-card': () => import('/components/charts/miniChartCard.vue'),
    'mini-pie': () => import('/components/charts/miniPie.vue')
  }
}
</script>

<style scoped>
</style>
