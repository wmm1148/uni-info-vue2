<template>
  <div class="layout">
    <basic-card class="basic-card" title="MenuTree Icon">
      <menu-tree>
      </menu-tree>
    </basic-card>
    <basic-card title="MenuTree Dropdown">
      <menu-tree2
      :treeData="treeData2"
      :menuData="menuData"
      :treeMap="treeMap"
      :menuMap="menuMap"
      >
      </menu-tree2>
    </basic-card>
    <basic-card title="MenuTree Dropdown V2">
      <menu-tree3
      :treeData="treeData3"
      :treeMap="treeMap"
      >
      <a-menu
      slot="menu"
      slot-scope="{currentIsLeaf, addNodes, removeNodes, removeAllNodes, updateNodes}">
        <a-menu-item @click="addMenuClick(addNodes)">
          新增
        </a-menu-item>
        <a-menu-item @click="removeAllMenuClick(removeAllNodes)"  v-if="!currentIsLeaf">
          删除（包含子结点）
        </a-menu-item>
        <a-menu-item @click="removeMenuClick(removeNodes)" v-if="currentIsLeaf">
          删除（仅叶子结点）
        </a-menu-item>
        <a-menu-item  @click="updateMenuClick(updateNodes)">
          修改
        </a-menu-item>
      </a-menu>
      </menu-tree3>
    </basic-card>
  </div>
</template>


<script>
export default {
  components: {
    'basic-card': () => import('/components/common/BasicCard.vue'),
    'menu-tree': () => import('/components/common/MenuTree.vue'),
    'menu-tree2': () => import('/components/common/MenuTree2.vue'),
    'menu-tree3': () => import('/components/common/MenuTree3.vue')
  },
  data() {
    return {
      treeData2: [
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
            { name: 'leaf1', id: '1-0', slots: { icon: 'meh' } },
            { name: 'leaf2', id: '1-1', scopedSlots: { icon: 'custom' } },
            { name: 'leaf3', id: '1-2', scopedSlots: { icon: 'custom' } },
            { name: 'leaf4', id: '1-3', scopedSlots: { icon: 'custom' } },
          ],
        },
        {
          name: 'parent 3',
          id: '2'
        },
      ],
      treeData3: [
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
            { name: 'leaf1', id: '1-0', slots: { icon: 'meh' } },
            { name: 'leaf2', id: '1-1', scopedSlots: { icon: 'custom' } },
            { name: 'leaf3', id: '1-2', scopedSlots: { icon: 'custom' } },
            { name: 'leaf4', id: '1-3', scopedSlots: { icon: 'custom' } },
          ],
        },
        {
          name: 'parent 3',
          id: '2'
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
  },
  methods: {
    addMenuClick(addNodes) {
      //新增时需要获取当前结点信息——作用域插槽传过来
      const node = {name: 'parent 3', id: '2'};
      addNodes(node);
      //传来父结点，在其children中添加一条，children也是数组
      // this.currentNodeParent.push(node);
    },
    removeMenuClick(removeNodes) {
      removeNodes();
    },
    removeAllMenuClick(removeAllNodes) {
      removeAllNodes();
    },
    updateMenuClick(updateNodes) {
      const node = {name: 'parent 44', id: ''};
      updateNodes(node);
    }
  },
  created() {
    console.log('treeData', this.treeData);
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
