<template>
  <div>
    <a-dropdown :trigger="['contextmenu']" @contextmenu.native="contextmenu">
      <a-tree
      :show-line="showLine"
      :show-icon="showIcon"
      :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']"
      @select="onSelect"
      @rightClick="onRightClick"
      >
      <!-- <div>hh</div> -->
        <a-tree-node :key="item.key" :title="item.title" v-for="item in treeData">
          <a-tree-node :key="children.key" :title="children.title"  v-for="children in item.children">
          </a-tree-node>
        </a-tree-node>
      </a-tree>
      <a-menu slot="overlay" v-if="nodeClick && dropClick">
        <a-menu-item :key="item.key" v-for="item in menuData">
          {{ item.title }}
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showLine: true,
      showIcon: false,
      nodeMenu: null, // 右键菜单
      showMenuItem: false,
      nodeClick: false,
      dropClick: false,
    };
  },
  props: {
    treeData: {
      type: Array,
      default: () => {}
    },
    menuData: {
      type: Array,
      default: () => {}
    },
    
  },
  created() {
    console.log('object', this.menuData);
  },
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
    },
    onRightClick({ event, node }) {
      console.log('event', event);
      console.log('node', node);
      //右键时需要显示菜单 —————— 只有叶子节点可以增删改查？
      // ————————设置两种，都可以（麻烦），只有叶子节点可以（先做这个）

      //点击右键显示菜单
      //判断是否是叶子节点————————目前叶子节点，没展开的父节点都满足
      if(node.$children.length == 1) {
        this.nodeClick = true;
        console.log('this.nodeClick', this.nodeClick);
        // this.showMenuItem = true;
      }
    },
    onLoadData(treeNode) {
      return new Promise(resolve => {
        // if (treeNode.dataRef.children) {
        //   resolve();
        //   return;
        // }
        setTimeout(() => {
          treeNode.dataRef.children = [
            { title: 'Child Node', key: `${treeNode.eventKey}-0` },
            { title: 'Child Node', key: `${treeNode.eventKey}-1` },
          ];
          this.treeData = [...this.treeData];
          resolve();
        }, 1000);
      });
    },
    contextmenu(e) {
      console.log('contextmenu-e', e);
      // this.showMenuItem = false;
      this.dropClick = true
      // console.log('this.dropClick', this.dropClick);
    },
  },
};
</script>
