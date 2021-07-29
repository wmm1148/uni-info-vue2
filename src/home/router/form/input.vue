<template>
  <basic-card title="Basic Input" class="">
    <h1>效果演示</h1>
    <!-- 
    <a-row :gutter="24">
      <a-col :span="formItemSpan">
        
      </a-col>
      <a-col :span="formItemSpan">
        
      </a-col>
    </a-row> -->
    <a-row :gutter="12">
      <a-col class="ant-col-12">
        <a-card class="cpn-card">
          <span class="cpn-title">字数统计</span>
          <br>
          <span>统计input框中输入的汉字、英文、数字的个数</span>
          <a-divider dashed style="margin:12px 0"/>
          <basic-input v-model="valueCount" count>
          </basic-input>
        </a-card>
        <a-card class="cpn-card">
          <span class="cpn-title">字数限制</span>
          <br>
          <span>限制input框中输入的汉字、英文、数字的个数</span>
          <a-divider dashed style="margin:12px 0"/>
          <basic-input v-model="valueNumberLimit" count :maxLength="9">
          </basic-input>
        </a-card>
        <div>
        </div>
      </a-col>
      <a-col class="ant-col-12">
        <a-card class="cpn-card">
          <span class="cpn-title">回显只读功能</span>
          <br>
          <span>回显只读功能</span>
          <a-divider dashed style="margin:12px 0"/>
          <basic-input v-model="valueReadOnly" readOnly>
          </basic-input>
        </a-card>
        <a-card class="cpn-card">
          <span class="cpn-title">一键复制功能</span>
          <br>
          <span>一键复制功能</span>
          <a-divider dashed style="margin:12px 0"/>
          <basic-input v-model="valueCopyAll" copyAll>
          </basic-input>
        </a-card>
      </a-col>
    </a-row>
    <br>
    <h1>API</h1>
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
    <br>
    <h1>文档地址</h1>
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
.test {
  height: 300px;
  margin: 12px;
}
.cpn-card {
  margin-bottom: 12px;
  min-height: 180px;
  .cpn-title {
    font-size: 16px; 
    font-weight: bold;
  }
}
</style>