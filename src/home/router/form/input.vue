<template>
  <basic-card title="Basic Input" class="">
    <h1 class="part-title">效果演示</h1>
    <a-row :gutter="24">
      <a-col class="ant-col-12">
        <a-card class="cpn-card">
          <span class="cpn-title">字数统计</span>
          <br>
          <span>统计当前输入的汉字、英文、数字的个数</span>
          <a-divider dashed style="margin:12px 0"/>
          <basic-input v-model="valueCount" allowClear count />
        </a-card>
        <a-card class="cpn-card">
          <span class="cpn-title">字数限制</span>
          <br>
          <span>统计并限制当前输入的汉字、英文、数字的个数</span>
          <a-divider dashed style="margin:12px 0"/>
          <basic-input v-model="valueNumberLimit" count :maxLength="9" />
        </a-card>
        <a-card class="cpn-card">
          <span class="cpn-title">预格式化展示——手机号mobile</span>
          <br>
          <span>预格式化只负责格式控制，不负责校验等功能。这里拿手机号举例。</span>
          <a-divider dashed style="margin:12px 0"/>
          <basic-input v-model="valueMobile" type="mobile" placeholder="xxx xxxx xxxx" allowClear />
        </a-card>
      </a-col>
      <a-col class="ant-col-12">
        <a-card class="cpn-card">
          <span class="cpn-title">回显只读功能</span>
          <br>
          <span>只读模式的输入框，不能对内容进行编辑</span>
          <a-divider dashed style="margin:12px 0"/>
          <basic-input v-model="valueReadOnly" readOnly />
        </a-card>
        <a-card class="cpn-card">
          <span class="cpn-title">一键复制功能</span>
          <br>
          <span>一键复制当前输入框中的内容</span>
          <a-divider dashed style="margin:12px 0"/>
          <basic-input v-model="valueCopyAll" copyAll />
        </a-card>
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
import { inputAPI } from '@/common/components.js'

  export default {
  columns: inputAPI,
    components: {
      'basic-card': () => import('../../../../components/display/BasicCard.vue'),
      'basic-input': () => import('/components/form/BasicInput.vue')
    },
    data () {
      return {
        formItemSpan: 12,
        headStyle: { 'font-weight': 'lighter' },
        valueCount: '',
        valueNumberLimit: '',
        valueReadOnly: '回显只读回显只读回显只读回显只读',
        valueCopyAll: '',
        valueMobile: '',
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
.part-title {
  margin: 12px 0;
  font-size: 18px; 
}
.cpn-card {
  margin-bottom: 24px;
  min-height: 180px;
  .cpn-title {
    margin: 12px 0;
    font-size: 16px; 
    font-weight: bold;
  }
}
</style>