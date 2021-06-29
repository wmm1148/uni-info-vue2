<template>
  <a-tree :tree-data="treeData" v-bind="$attrs">
    <!-- <template v-for="(_, slot) of $options.omit($options.keys($slots), $scopedSlots)" #[slot]="scope">
      <slot :name="slot" v-bind="scope"></slot>
    </template> -->
    <!-- 插槽继承，$scopedSlots确实可以继承$slots中的具名插槽，但具名插槽没有作用域没有数据，以下面这种形式不起作用，需要再单独写下具名插槽的遍历 -->
    <template v-for="(_, slot) of $options.omit(['actions'], $scopedSlots)" #[slot]="scope">
      <slot :name="slot" v-bind="scope"></slot>
    </template>
    <template v-for="(_, slot) of $slots" :slot="slot">
      <slot :name="slot"></slot>
    </template>
    <template slot="node" slot-scope="node">
      <a-dropdown>
        <span>
          <!-- <template>
            {{ node.title + 'uu' }}
          </template> -->
          <slot name="title">
            {{ node.title + 'uu' }}
          </slot>
          <slot name="actions">
          </slot>
        </span>
        <template #overlay>
          <slot name="menu" :node="currentNode" />
        </template>
      </a-dropdown>
    </template>
  </a-tree>
</template>

<script>
import { omit, keys } from 'ramda'
export default {
  omit,
  keys,
  data() {
    return {
      currentNode: {},
    }
  },
  props: {
    treeData: {
      type: Array,
      default: () => {},
    },
  },
  // computed: {
  //   data() {
  //     this.recursionTree(this.treeData);
  //     return this.treeData
  //   }
  // },
  created() {
    this.recursionTree(this.treeData)

    
    // const R = require('ramda');
    // console.log('r', R.omit(['a', 'd'])({a: 1, b: 2, c: 3, d: 4}));
    // console.log('r', R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}));

    // R.omit(['a', 'd'])({a: 1, b: 2, c: 3, d: 4})
    // console.log('$options', this.$options.propsData.treeData);
  },
  mounted () {
    console.log('$slots', this.$slots)
    console.log('$scopedSlots', this.$scopedSlots)
    console.log(this. $options.omit(this.$options.keys(this.$slots), this.$scopedSlots))
  },
  methods: {
    recursionTree(node) {
      for (let item of node) {
        // console.log('old item', item)
        if(!item.scopedSlots) {  //树在没有上层的时候
          item.scopedSlots = {};
        }
        item.scopedSlots.title = 'node';
        if (item.children) {
          this.recursionTree(item.children)
        }
      }
      return node
    },
  },
}
</script>

<style lang="less" scoped></style>
