<template>
  <div>
    <a-dropdown :trigger="['contextmenu']">
      <a-tree :tree-data="treeData" show-icon default-expand-all @select="treeClick">
        <a-icon slot="switcherIcon" type="down"/>
        <a-icon slot="smile" type="smile-o" @mouseenter="enter"/>
        <a-icon slot="meh" type="smile-o" />
        <template slot="custom" slot-scope="data">
          <a-icon :type="data.selected ? 'frown' : 'frown-o'" />
        </template>
      </a-tree>
      <a-menu slot="overlay" @click="onClick">
        <a-menu-item key="1">
          1st menu item
        </a-menu-item>
        <a-menu-item key="2">
          2nd menu item
        </a-menu-item>
        <a-menu-item key="3">
          3rd menu item
        </a-menu-item>
      </a-menu>
    </a-dropdown>
    <a-tree show-icon default-expand-all>
      <a-tree-node key="0-0" title="node" @mouseenter.native="enter">
      </a-tree-node>
    </a-tree>
  </div>
</template>

<script>
  const treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      slots: {
        icon: 'smile',
      },
      children: [
        //slots是为了支撑slot的属性，scopedSlots是为了支持slot-scope的属性
        //所以上面支持slot-scope的插槽只可以是custom
        //那么，selected是哪来的？——————这个组件提前封装好的，可以先打印出来看看都有啥
        //像树，icon只支持slot,slot-scope，所以要以这种形式写，但是必须手动一个一个写出来？应该可以循环
        { title: 'leaf1', key: '0-0-0', slots: { icon: 'meh' } },
        { title: 'leaf2', key: '0-0-1', scopedSlots: { icon: 'custom' } },
      ],
    },
  ];
  export default {
    data() {
      return {
        treeData,
        };
    },
    created() {
      console.log('slots', this.$slots);
    },
    mounted () {
      console.log(this.$slots, '$slots')
      console.log(this.$scopedSlots, '$scopedSlots')
    },
    methods: {
      onClick({ key }) {
        console.log(`Click on item ${key}`);
      },
      onSelect(selectedKeys, info) {
        console.log('selected', selectedKeys, info);
      },
      onCheck(checkedKeys, info) {
        console.log('onCheck', checkedKeys, info);
      },
      enter(e) {
        console.log('enter', e);
      },
      onContextMenuClick() {
      },
      treeClick({ event, node }) {
        console.log('event', event);
        console.log('node', node);
      }
    },
  }
</script>

<style lang="less" scoped>

</style>