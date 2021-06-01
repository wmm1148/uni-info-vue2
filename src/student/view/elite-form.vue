<template>
  <div>
    <a-card class="stu-card" title="Add Elite" :headStyle='headStyle'>
      <template #extra>
        <a-icon type="left-square" style="fontSize:1.3em" @click="backClick"/>
      </template>
      <a-transfer
      :data-source="mockData"
      :target-keys="targetKeys"
      :disabled="disabled"
      :show-search="showSearch"
      :filter-option="(inputValue, item) => item.title.indexOf(inputValue) !== -1"
      :show-select-all="false"
      @change="onChange"
      :list-style="{
          width: '100%',
          height: '520px',
        }"
    >
      <template
        slot="children"
        slot-scope="{
          props: { direction, filteredItems, selectedKeys, disabled: listDisabled },
          on: { itemSelectAll, itemSelect },
        }"
      >
        <a-table
          :row-selection="
            getRowSelection({ disabled: listDisabled, selectedKeys, itemSelectAll, itemSelect })
          "
          :columns="direction === 'left' ? $options.columns : $options.columns"
          :data-source="filteredItems"
          size="small"
          :style="{ pointerEvents: listDisabled ? 'none' : null }"
          :custom-row="
            ({ key, disabled: itemDisabled }) => ({
              on: {
                click: () => {
                  if (itemDisabled || listDisabled) return;
                  itemSelect(key, !selectedKeys.includes(key));
                },
              },
            })
          "
        />
      </template>
    </a-transfer>
    <!-- <a-switch
      un-checked-children="disabled"
      checked-children="disabled"
      :checked="disabled"
      style="margin-top: 16px"
      @change="triggerDisable"
    />
    <a-switch
      un-checked-children="showSearch"
      checked-children="showSearch"
      :checked="showSearch"
      style="margin-top: 16px"
      @change="triggerShowSearch"
    /> -->
    </a-card>
  </div>
</template>

<script>
import api from '../api.js'
import difference from 'lodash/difference';

import { eliteTableColumns } from '@/common/student.js'


// const mockData = [];
// for (let i = 0; i < 20; i++) {
//   mockData.push({
//     key: i.toString(),
//     title: `content${i + 1}`,
//     description: `description of content${i + 1}`,
//     disabled: i % 4 === 0,
//   });
// }

// const originTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

export default {
  columns: eliteTableColumns,
  data () {
    return {
      mockData: [],
      targetKeys: [],
      disabled: false,
      showSearch: false,
      headStyle: { 'font-weight': 'bold' },
      leftTableList: [],
      rightTableList: []
    };
  },
  components: {
  },
  created () {
    this.fetchTableList()
  },
  methods: {
    backClick () {
      this.$router.push('/stu/elite/')
    },
    addClick () {
      this.$router.push('/stu/elite/add')
    },
    onChange(nextTargetKeys) {
      this.targetKeys = nextTargetKeys;
    },

    triggerDisable(disabled) {
      this.disabled = disabled;
    },

    triggerShowSearch(showSearch) {
      this.showSearch = showSearch;
    },
    fetchTableList () {
      // const leftTableList = [];
      // api.getEliteStuList().then((res) => {
      //   this.leftTableList = res.list;
      // }).catch((err) => {
      //   console.log(err)
      // })
      // const rightTableList = api.getEliteStuList()
      // console.log('leftTableList', leftTableList);
      // this.mockData = [...leftTableList, rightTableList]
      async () => {
        console.log('hhhhh');
        try {
          await Promise.all([
            api.getEliteStuList().then((res) => {
            this.leftTableList = res.list;
          }).catch((err) => {
            console.log(err)
          }),
            api.getEliteStuList().then((res) => {
            this.leftTableList = res.list;
          }).catch((err) => {
            console.log(err)
          }),
          ]);
          console.log('this.leftTableList', this.leftTableList);
          this.mockData = [...this.leftTableList, ...this.rightTableList];
          console.log('mockdata', this.mockData);
          } finally {
            console.log('object');
          }
      };
    },
    getRowSelection({ disabled, selectedKeys, itemSelectAll, itemSelect }) {
      return {
        getCheckboxProps: item => ({ props: { disabled: disabled || item.disabled } }),
        onSelectAll(selected, selectedRows) {
          const treeSelectedKeys = selectedRows
            .filter(item => !item.disabled)
            .map(({ key }) => key);
          const diffKeys = selected
            ? difference(treeSelectedKeys, selectedKeys)
            : difference(selectedKeys, treeSelectedKeys);
          itemSelectAll(diffKeys, selected);
        },
        onSelect({ key }, selected) {
          itemSelect(key, selected);
        },
        selectedRowKeys: selectedKeys,
      };
    },
  },
}
</script>

<style scoped>
.stu-card {
  /* display: inline; */
    background: #feffff;
    width: 98%;
    margin: 12px auto;
    /* height: 100%; */
    height: auto;
    text-align: left;
}
.ant-card-body {
  padding: 0 24px 24px 24px;
}
</style>