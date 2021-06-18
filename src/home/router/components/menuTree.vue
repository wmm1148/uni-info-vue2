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
      :treeMap="treeMap"
      :menuMap="menuMap"
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
          id: '0',
          name: 'parent 1',
          children: [
            { name: 'pp1', 
              id: '0-0', 
              slots: { icon: 'meh' }, 
              children: [
              { name: 'leaf', id: '0-0-0', slots: { icon: 'meh' } },
            ]},
            { name: 'leaf', id: '0-1', scopedSlots: { icon: 'custom' } },
          ],
        },
        {
          name: 'parent 2',
          id: '1',
          children: [
            { name: 'leaf', id: '1-0', slots: { icon: 'meh' } },
            { name: 'leaf', id: '1-1', scopedSlots: { icon: 'custom' } },
            { name: 'leaf', id: '1-2', scopedSlots: { icon: 'custom' } },
            { name: 'leaf', id: '1-3', scopedSlots: { icon: 'custom' } },
          ],
        },
      ],
      menuData: [
        {
          key: 1,
          title: 'menu1',
        },
        {
          key: 2,
          title: 'menu2',
        },
        {
          key: 3,
          title: 'menu3',
        },
        {
          key: 4,
          title: 'menu4',
        },
      ],
      treeMap: {
        title: 'name',
        key: 'id'
      },
      menuMap: {  //树形结构层级 ：显示的菜单Ids  没有提到的层级则不赋予任何权限（或给予所有权限）
        2: [1,2,4],
        3: [2]
      }
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
