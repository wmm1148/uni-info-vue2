<template>
  <div class="layout">
    <basic-card class="basic-card" title="MenuTree Icon">
      <menu-tree>

      </menu-tree>
    </basic-card>
    <basic-card title="MenuTree Dropdown">
      <menu-tree2
      :treeData="treeData"
      :menuData="menuData"
      >

      </menu-tree2>
    </basic-card>
  </div>
</template>


<script>
export default {
  components: {
    'basic-card': () => import('/components/common/BasicCard.vue'),
    'menu-tree': () => import('/components/common/MenuTree.vue'),
    'menu-tree2': () => import('/components/common/MenuTree2.vue')
  },
  data() {
    return {
      treeData: [
        {
          title: 'parent 1',
          key: '0-0',
          slots: {
            icon: 'smile',
          },
          children: [
            { title: 'leaf', key: '0-0-0', slots: { icon: 'meh' } },
            { title: 'leaf', key: '0-0-1', scopedSlots: { icon: 'custom' } },
          ],
        },
        {
          title: 'parent 2',
          key: '0-1',
          slots: {
            icon: 'smile',
          },
          children: [
            { title: 'leaf', key: '0-1-0', slots: { icon: 'meh' } },
            { title: 'leaf', key: '0-1-1', scopedSlots: { icon: 'custom' } },
            { title: 'leaf', key: '0-1-2', scopedSlots: { icon: 'custom' } },
            { title: 'leaf', key: '0-1-3', scopedSlots: { icon: 'custom' } },
          ],
        },
      ],
      menuData: [
        {
          key: '1',
          title: 'menu1',
        },
        {
          key: '2',
          title: 'menu2',
        },
        {
          key: '3',
          title: 'menu3',
        },
      ]
    }
  }
};
</script>

<style scoped>
.layout {
  display: flex;
}
.basic-card {
  width: 48;
}
</style>
