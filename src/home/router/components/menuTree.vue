<template>
  <div class="layout" >
    <basic-card title="Hover">
      <hover-menu-tree
      :treeData="treeData"
      default-expand-all 
      >
      <!-- <a-icon slot="switcherIcon" type="down"/>
      <a-icon slot="smile" type="smile-o"/>
      <a-icon slot="meh" type="smile-o" />
      <template slot="custom" slot-scope="data">
        <a-icon :type="data.selected ? 'frown' : 'frown-o'" />
      </template> -->
      <a-menu slot="menu">
        <a-menu-item>
          <a href="javascript:;">1st menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">44 menu item</a>
        </a-menu-item>
      </a-menu>
      </hover-menu-tree>
    </basic-card>
    <basic-card class="basic-card" title="Icon">
      <menu-tree>
      </menu-tree>
    </basic-card>
    <basic-card title="Dropdown">
      <menu-tree2
      :treeData="treeData2"
      :menuData="menuData"
      :treeMap="treeMap"
      :menuMap="menuMap"
      >
      </menu-tree2>
    </basic-card>
    <basic-card title="Dropdown V2">
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
const treeData = [
    {
      title: 'parent 1',
      key: '0-0',
      scopedSlots: {
        title: 'node',
      },
      children: [
        //slots是为了支撑slot的属性，scopedSlots是为了支持slot-scope的属性
        //所以上面支持slot-scope的插槽只可以是custom
        //那么，selected是哪来的？——————>这个组件提前封装好的，可以先打印出来看看都有啥
        //像树，icon只支持slot,slot-scope，所以要以这种形式写，但是必须手动一个一个写出来？应该可以循环
        //'node'用的是title的插槽位置，已经是单个结点的一部分了
        { title: 'leaf1', key: '0-0-0', scopedSlots: { title: 'node' }},
        { title: 'leaf2', key: '0-0-1', scopedSlots: { title: 'node' } },
      ],
    },
  ];
export default {
  components: {
    'basic-card': () => import('/components/common/BasicCard.vue'),
    'menu-tree': () => import('/components/common/MenuTree.vue'),
    'menu-tree2': () => import('/components/common/MenuTree2.vue'),
    'menu-tree3': () => import('/components/common/MenuTree3.vue'),
    'hover-menu-tree': () => import('/components/common/HoverMenuTree.vue')
  },
  data() {
    return {
      treeData,
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
  padding: 0 12px;
}
.basic-card {
  width: 48;
}
</style>
