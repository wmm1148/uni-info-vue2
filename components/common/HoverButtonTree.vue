<template>
<!-- 按钮悬浮在title上面的悬浮菜单树 -->
  <a-tree :tree-data="treeData" v-bind="$attrs" @mouseenter="enter" @mouseleave="leave">
    <template v-for="(_, slot) of $scopedSlots" #[slot]="scope">
      <slot :name="slot" v-bind="scope"></slot>
    </template>
    <template v-for="(_, slot) of $slots" :slot="slot">
      <slot :name="slot"></slot>
    </template>
    <template slot="node" slot-scope="node">
      <div class="nodeStyle">
        <span class="actionStyle">
          <slot name="actions" v-if="node.key === currentNode.key & showBtns" :node="currentNode" :isLeaf="currentIsLeaf">
          </slot>
        </span>
        <span class="titleStyle">
          <slot name="title" :node="node">
            {{ node.title }}
          </slot>
        </span>
      </div>
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
    // console.log('$options', this.$options)
    // console.log('$scopedSlots.title', this.$scopedSlots.title)
  },
  mounted () {
    // console.log('$slots', this.$slots)
    // console.log('$scopedSlots', this.$scopedSlots)
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
  width: 100%;
  height: 100%;
  overflow: hidden;
  .actionStyle {
    float: right;
    // display: flex;
  }
}
.nodeStyle:hover {
  .titleStyle {
    opacity: 0.4;
  }
}
</style>
