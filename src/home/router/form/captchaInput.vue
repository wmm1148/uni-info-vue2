<template>
  <basic-card title="CaptchaInput" class="">
    <h1 class="part-title">效果演示</h1>
    <a-row :gutter="24">
      <a-col class="ant-col-12">
        <a-card class="cpn-card">
          <span class="cpn-title">title</span>
          <br>
          <span>description</span>
          <a-divider dashed style="margin:12px 0"/>
        </a-card>
      </a-col>
      <a-col class="ant-col-12">
        
      </a-col>
    </a-row>
    <h1 class="part-title">API</h1>
    <a-table
    row-key="id"
    :data-source="list"
    :pagination="false"
    >
    <a-table-column
      v-for="(col) in $options.columns"
      :key="col.dataIndex"
      :data-index="col.dataIndex">
      <template #title>
        {{ col.title }}
      </template>
    </a-table-column>

    </a-table>
    <h1 class="part-title">文档地址</h1>
    <span>基于Vue+Antd的Input输入框组件封装:  </span>
    <a>https://juejin.cn/post/6990598715782201357</a>
  </basic-card>
</template>

<script>
import api from '../../api.js'
import { APITitle } from '@/common/components.js'

  export default {
  columns: APITitle,
    components: {
      'basic-card': () => import('/components/display/BasicCard.vue'),
    },
    data () {
      return {
        formItemSpan: 12,
        headStyle: { 'font-weight': 'lighter' },
        list: [],
      }
    },
    created() {
      this.fetch();
    },
    methods: {
      fetch() {
        api.getInputAPIData().then((res) => {
          this.list = res.list
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
@border-radius-base: 4px;
.part-title {
  margin: 12px 0;
  font-size: 18px; 
}
.cpn-card {
  margin-bottom: 24px;
  min-height: 180px;
  border-radius: @border-radius-base;
  .cpn-title {
    margin: 12px 0;
    font-size: 16px; 
    font-weight: bold;
  }
}
</style>