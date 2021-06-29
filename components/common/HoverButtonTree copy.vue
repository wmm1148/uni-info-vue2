<template>
<!-- 采用其他方法进行尝试的悬浮菜单树————Popover和换下一行的标签 -->
  <a-tree :tree-data="treeData" v-bind="$attrs" @mouseenter="enter" @mouseleave="leave">
    <template v-for="(_, slot) of $scopedSlots" #[slot]="scope">
      <slot :name="slot" v-bind="scope"></slot>
    </template>
    <template v-for="(_, slot) of $slots" :slot="slot">
      <slot :name="slot"></slot>
    </template>
    <template slot="node" slot-scope="node">
      <span class="nodeStyle">
        <!-- <template>
          {{ node.title + 'uu' }}
        </template> -->
        <span>
          <slot name="title" >
            {{ node.title + 'uu' }}
          </slot>
        </span>
        <span class="actionStyle">
          <slot name="showMore" v-if="node.key === currentNode.key & showBtns & showMoreBtns">
            <a-icon type="double-left" @click="clickBack"/>
          </slot>
          <slot name="actions" v-if="node.key === currentNode.key & showBtns & !showMoreBtns" :node="currentNode" :isLeaf="currentIsLeaf">
          </slot>
          <slot name="moreActions" v-if="node.key === currentNode.key & showBtns & showMoreBtns" :node="currentNode" :isLeaf="currentIsLeaf">
          </slot>
          <slot name="showMore" v-if="node.key === currentNode.key & showBtns">
            <a-icon type="double-right" @click="showMore"/>
          </slot>
          <!-- <a-icon type="double-right" @click="showAll"/> -->
        </span>
        <!-- <span class="actionStyle">
          <slot name="showAll"></slot>
        </span> -->
      </span>
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
      showBtns: false,
      showMoreBtns: false,
      currentIsLeaf: false,
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
    console.log('$options', this.$options)
    console.log('$scopedSlots.title', this.$scopedSlots.title)

    
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
        console.log('old item', item)
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
    enter({ node }) {
      console.log('enter node', node);
      this.currentNode = node.$options.propsData.dataRef
      this.showBtns = true;
      console.log('this.currentNode', this.currentNode);
      // this.currentNodeParent = node.$parent.dataRef;
      this.currentNodeChildren = this.currentNode.children;
      this.currentIsLeaf = this.currentNodeChildren ? false : true;
      
    },
    leave() {
      this.showBtns = false;
      this.showMoreBtns = false
    },
    showMore() {
      this.showMoreBtns = true
    },
    clickBack() {
      this.showMoreBtns = false
    }
  },
}
</script>

<style lang="less" scoped>
.nodeStyle {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  // background-color: white;
  // padding: 10px;
  // padding-bottom: 50px;
  overflow: hidden;
  .actionStyle {
  // overflow-x: scroll;
  // -webkit-scrollbar {display:none}
  }
}

</style>
