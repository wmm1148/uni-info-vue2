<template>
  <a-tree :tree-data="treeData" v-bind="$attrs">
    <template v-for="(_, slot) of $scopedSlots" #[slot]="scope">
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
        <slot name="menu"/>
      </template>
    </a-dropdown>
    </template>
  </a-tree>
</template>

<script>
  export default {
    data() {
      return {
        };
    },
    props: {
      treeData: {
        type: Array,
        default: () => {}
      }
    },
    created() {
    },
    mounted () {
      console.log('$scopedSlots', this.$scopedSlots)
    },
    methods: {
    },
  }
</script>

<style lang="less" scoped>

</style>