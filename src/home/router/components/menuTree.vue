<template>
  <div class="layout">
    <basic-card title="Hover & Icon(Right)" class="hoverIconStyle">
      <hover-button-tree :treeData="treeData" default-expand-all showIcon blockNode>
        <!-- <template #title>
          777777
        </template> -->
        <template #actions="{ isLeaf }">
          <a-icon type="edit" v-if="isLeaf"/>
          <a-icon type="minus-circle" v-if="isLeaf"/>
          <a-icon type="edit" v-if="isLeaf"/>
          <a-icon type="delete" v-if="isLeaf"/>
          <a-icon type="minus-circle" v-if="isLeaf"/>
          <a-icon type="edit" v-if="isLeaf"/>
          <a-icon type="delete" v-if="isLeaf"/>
          <a-icon type="minus-circle" v-if="isLeaf"/>
          <a-icon type="edit" />
          <a-icon type="delete" />
          <a-icon type="minus-circle" />
          <a-icon type="edit" />
          <a-icon type="delete" />
          <a-icon type="minus-circle" />
          <a-icon type="edit" />
          <a-icon type="delete" />
          <a-icon type="minus-circle" />
          <a-icon type="edit" />
          <a-icon type="delete" />
          <a-icon type="minus-circle" />
          <!-- <a-tooltip placement="bottomRight">
            <template slot="title">
              <a-icon type="edit" v-if="isLeaf"/>
              <a-icon type="delete" v-if="isLeaf"/>
              <a-icon type="carry-out" v-if="isLeaf"/>
              <a-icon type="edit" v-if="isLeaf"/>
              <a-icon type="delete" v-if="isLeaf"/>
              <a-icon type="carry-out" v-if="isLeaf"/>
              <a-icon type="edit" v-if="isLeaf"/>
              <a-icon type="delete" v-if="isLeaf"/>
              <a-icon type="carry-out" v-if="isLeaf"/>
              <a-icon type="edit" />
              <a-icon type="delete" />
              <a-icon type="carry-out" />
              <a-icon type="edit" />
              <a-icon type="delete" />
              <a-icon type="carry-out" />
              <a-icon type="edit" />
              <a-icon type="delete" />
              <a-icon type="carry-out" />
              <a-icon type="edit" />
              <a-icon type="delete" />
              <a-icon type="carry-out" />
              <a-icon type="edit" />
              <a-icon type="delete" />
              <a-icon type="carry-out" />
              <a-icon type="edit" />
              <a-icon type="delete" />
              <a-icon type="carry-out" />
            </template>
            <a-icon type="double-right" @click="showAll"/>
          </a-tooltip> -->
          <!-- <a-icon type="edit" />
          <a-icon type="delete" />
          <a-icon type="carry-out" />
          <a-icon type="edit" />
          <a-icon type="delete" />
          <a-icon type="carry-out" />
          <a-icon type="edit" />
          <a-icon type="delete" />
          <a-icon type="carry-out" /> -->
          <!-- <a-popconfirm placement="bottomRight">
            <a-icon type="double-right" @click="showAll"/>
          </a-popconfirm> -->
          <!-- <a-icon type="edit" />
          <a-icon type="edit" /> -->
          <!-- <a-popover placement="bottomRight" trigger="click">
            <template slot="content" class="popoverStyle">
              <a-icon type="edit" v-if="isLeaf"/>
              <a-icon type="delete" v-if="isLeaf"/>
              <a-icon type="carry-out" v-if="isLeaf"/>
              <a-icon type="edit" v-if="isLeaf"/>
              <a-icon type="delete" v-if="isLeaf"/>
              <a-icon type="carry-out" v-if="isLeaf"/>
              <a-icon type="edit" v-if="isLeaf"/>
              <a-icon type="delete" v-if="isLeaf"/>
              <a-icon type="carry-out" v-if="isLeaf"/>
              <a-icon type="edit" />
              <a-icon type="delete" />
              <a-icon type="carry-out" />
              <a-icon type="edit" />
              <a-icon type="delete" />
              <a-icon type="carry-out" />
              <a-icon type="edit" />
              <a-icon type="delete" />
              <a-icon type="carry-out" />
              <a-icon type="edit" />
              <a-icon type="delete" />
              <a-icon type="carry-out" />
              <a-icon type="edit" />
              <a-icon type="delete" />
              <a-icon type="carry-out" />
              <a-icon type="edit" />
              <a-icon type="delete" />
              <a-icon type="carry-out" />
            </template>
            <a-icon type="double-right" @click="showAll"/>
          </a-popover> -->
        </template>
        <!-- <template #moreActions="{ isLeaf }">
          <a-icon type="edit" v-if="isLeaf"/>
          <a-icon type="delete" v-if="isLeaf"/>
          <a-icon type="edit" />
          <a-icon type="delete" />
          <a-icon type="carry-out" />
          <a-icon type="edit" />
          <a-icon type="delete" />
          <a-icon type="carry-out" />
          <a-icon type="edit" />
          <a-icon type="delete" />
          <a-icon type="carry-out" />
        </template> -->
        <!-- <template #showMore>
        </template> -->
      </hover-button-tree>
    </basic-card>
    <basic-card title="Hover & Dropdown">
      <hover-menu-tree :treeData="treeData" default-expand-all showIcon>
        <a-icon slot="switcherIcon" type="down" />
        <a-icon slot="smile" type="smile-o" />
        <a-icon slot="meh" type="smile-o" />
        <!-- <template #title>
          777777
        </template> -->
        <template #actions>
          <a-icon type="pic-center" />
        </template>
        <template #showMore>
        </template>

        <template slot="custom" slot-scope="data">
          <a-icon :type="data.selected ? 'frown' : 'frown-o'" />
        </template>
        <a-menu slot="menu" @click="handleMenuClick" slot-scope="{ node }">
          <a-menu-item v-show="node.children">
            <a>1st is not a leaf</a>
          </a-menu-item>
          <a-menu-item>
            <a>2nd</a>
          </a-menu-item>
          <a-menu-item>
            <a>333 </a>
          </a-menu-item>
          <a-menu-item v-show="!node.children">
            <a>444 isLeaf</a>
          </a-menu-item>
        </a-menu>
      </hover-menu-tree>
    </basic-card>
    <basic-card class="basic-card" title="Icon">
      <menu-tree> </menu-tree>
    </basic-card>
    <basic-card title="RightClick & Dropdown">
      <menu-tree2
        :treeData="treeData2"
        :menuData="menuData"
        :treeMap="treeMap"
        :menuMap="menuMap"
      >
      </menu-tree2>
    </basic-card>
    <basic-card title="RightClick & DropdownV2">
      <menu-tree3 :treeData="treeData3" :treeMap="treeMap">
        <a-menu
          slot="menu"
          slot-scope="{
            currentIsLeaf,
            addNodes,
            removeNodes,
            removeAllNodes,
            updateNodes,
          }"
        >
          <a-menu-item @click="addMenuClick(addNodes)">
            新增
          </a-menu-item>
          <a-menu-item
            @click="removeAllMenuClick(removeAllNodes)"
            v-if="!currentIsLeaf"
          >
            删除（包含子结点）
          </a-menu-item>
          <a-menu-item
            @click="removeMenuClick(removeNodes)"
            v-if="currentIsLeaf"
          >
            删除（仅叶子结点）
          </a-menu-item>
          <a-menu-item @click="updateMenuClick(updateNodes)">
            修改
          </a-menu-item>
        </a-menu>
      </menu-tree3>
    </basic-card>
  </div>
</template>

<script>
import BasicCard from '../../../../components/common/BasicCard.vue'
const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    slots: { icon: 'meh' },
    children: [
      {
        title: 'leafwwwwwww',
        key: '0-0-0',
        slots: { icon: 'smile' },
      },
      {
        title: 'leafffff2',
        key: '0-0-1',
        scopedSlots: { icon: 'custom'},
      },
    ],
  },
];
const treeDataTest = [
  {
    title: 'parent 1',
    key: '0-0',
    slots: {
      icon: 'smile',
    },
    children: [
      { title: 'leaf', key: '0-0-0', slots: { icon: 'meh' } },
      { key: '0-0-1', slots: { title: 'uu'}, scopedSlots: { icon: 'custom' } },
    ],
  },
];
export default {
  components: {
    'basic-card': () => import('/components/common/BasicCard.vue'),
    'menu-tree': () => import('/components/common/MenuTree.vue'),
    'menu-tree2': () => import('/components/common/MenuTree2.vue'),
    'menu-tree3': () => import('/components/common/MenuTree3.vue'),
    'hover-menu-tree': () => import('/components/common/HoverMenuTree.vue'),
    'hover-button-tree': () => import('/components/common/HoverButtonTree.vue'),
  },
  data() {
    BasicCard
    return {
      treeData,
      treeDataTest,
      treeData2: [
        {
          id: '0',
          name: 'parent 1',
          children: [
            {
              name: 'pp1',
              id: '0-0',
              slots: { icon: 'meh' },
              children: [{ name: 'leaf', id: '0-0-0', slots: { icon: 'meh' } }],
            },
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
          id: '2',
        },
      ],
      treeData3: [
        {
          id: '0',
          name: 'parent 1',
          children: [
            {
              name: 'pp1',
              id: '0-0',
              slots: { icon: 'meh' },
              children: [{ name: 'leaf', id: '0-0-0', slots: { icon: 'meh' } }],
            },
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
          id: '2',
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
        key: 'id',
      },
      menuMap: {
        //树形结构层级 ：显示的菜单Ids  没有提到的层级则不赋予任何权限（或给予所有权限）
        2: [1, 2, 4],
        3: [2],
      },
    }
  },
  methods: {
    addMenuClick(addNodes) {
      //新增时需要获取当前结点信息——作用域插槽传过来
      const node = { name: 'parent 3', id: '2' }
      addNodes(node)
      //传来父结点，在其children中添加一条，children也是数组
      // this.currentNodeParent.push(node);
    },
    removeMenuClick(removeNodes) {
      removeNodes()
    },
    removeAllMenuClick(removeAllNodes) {
      removeAllNodes()
    },
    updateMenuClick(updateNodes) {
      const node = { name: 'parent 44', id: '' }
      updateNodes(node)
    },
    handleMenuClick(e) {
      console.log('e', e)
    },
    showAll() {
      console.log('object');
    }
  },
  created() {
    console.log('treeData', this.treeData)
  },
}
</script>

<style scoped>
.layout {
  /* display: flex; */
  padding: 0 6px;
}
/* .basic-card {
  width: 48;
} */
.hoverIconStyle {
  width:350px;
}
.popoverStyle {
  width: 20px;
}
</style>
