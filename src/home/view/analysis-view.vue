<template>
  <div style="padding: 10px 20px;">
    <a-row :gutter="16" style="padding: 10px 0;">
      <a-col :span="6">
        <mini-chart-card
        :footerDivider="true"
        >
          <template #title>
            Visit
          </template>
          <template #extra>
            <a-icon type="info-circle" />
          </template>
          <mini-area></mini-area>
          <template #footer>
            Daily Visit: 1234
          </template>
        </mini-chart-card>
      </a-col>
      <a-col :span="6">
        <mini-chart-card
        :footerDivider="true"
        >
          <template #title>
            TEST
          </template>
          <template #extra>
            <a-icon type="info-circle" />
          </template>
          <test></test>
          <template #footer>
            TEST: TEST
          </template>
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
          <!-- <mini-area></mini-area> -->
          <!-- <mini-pie></mini-pie> -->
          <h1>yyyyyyyyyyyyyyyyyyyyy</h1>
        </a-card>
      </a-col>
    </a-row>
    <a-row style="padding: 10px 0;">
      <a-card>
        <!-- <mini-pie></mini-pie> -->
      </a-card>
    </a-row>
  </div>
</template>


<script>
// import { MiniPie } from '/components/charts/miniPie.vue'
export default {
  components: {
    'mini-chart-card': () => import('/components/charts/miniChartCard.vue'),
    'mini-pie': () => import('/components/charts/miniPie.vue'),
    'mini-area': () => import('/components/charts/miniArea.vue'),
    'test': () => import('/components/charts/test.vue'),
  }
}
</script>

<style scoped>
</style>
