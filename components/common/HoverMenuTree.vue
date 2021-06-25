<template>
  <a-tree :tree-data="treeData" v-bind="$attrs" @mouseenter="enter">
    <template v-for="(_, slot) of $options.omit(['title', 'icon'], $scopedSlots)" #[slot]="scope">
      <slot :name="slot" v-bind="scope"></slot>
    </template>
    <template
    slot="node"
    slot-scope="node">
    <a-dropdown>
      <div>
        <slot name="title">
          {{ node.title + 888}}
        </slot>
      </div>
      <template #overlay>
        <slot name="menu" :node="currentNode"/>
      </template>
    </a-dropdown>
    </template>
  </a-tree>
</template>

<script>
import { omit } from 'ramda';
  export default {
    omit,
    data() {
      return {
        currentNode: {},
        };
    },
    props: {
      treeData: {
        type: Array,
        default: () => {}
      }
    },
    // computed: {
    //   data() {
    //     this.recursionTree(this.treeData);
    //     return this.treeData
    //   }
    // },
    created() {
      this.recursionTree(this.treeData);
      console.log('$options', this.$options);
      const R = require('ramda');
      // console.log('r', R.omit(['a', 'd'])({a: 1, b: 2, c: 3, d: 4}));
      console.log('r', R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}));


      // R.omit(['a', 'd'])({a: 1, b: 2, c: 3, d: 4})
      // console.log('$options', this.$options.propsData.treeData);
    },
    mounted () {
      console.log('$scopedSlots', this.$scopedSlots)
    },
    methods: {
      recursionTree(node) {
        for(let item of node) {
          console.log('old item', item);
          // item.scopedSlots.title = 'node';
          // console.log('item', item);
          if(item.children) {
            this.recursionTree(item.children)
          }
        }
        return node
    },
      enter({ node}) {
      // console.log('enter node', node);
      this.currentNode = node.$options.propsData.dataRef;
      // console.log('this.currentNode', this.currentNode);
    },
    },
  }
</script>

<style lang="less" scoped>

</style>