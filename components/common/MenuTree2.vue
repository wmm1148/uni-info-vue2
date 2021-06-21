<template>
<!-- 树型数据和菜单数据均由外部提供 -->
  <a-dropdown :trigger="['contextmenu']" @click.native="dropdownClick" :visible="showMenuItem">
    <a-tree
    :show-line="showLine"
    :show-icon="showIcon"
    :default-expanded-keys="['0-0-0']"
    @select="onSelect"
    @rightClick="onRightClick"
    :treeData="treeData | filterTreeData(treeMap, recursionTree, level)"
    blockNode
    @contextmenu.native="contextmenu"
    >
    </a-tree>
    <a-menu slot="overlay">
      <a-menu-item :key="item.key" v-for="item in showMenuData">
        {{ item.title }}
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  data() {
    return {
      showLine: true,
      showIcon: false,
      showMenuItem: false,
      level: 0,
      showMenuData: [],
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
    treeMap: {
      type: Object,
      default: () => {}
    },
    menuMap: {
      type: Object,
      default: () => {}
    },
  },
  filters: {
    filterTreeData(treeData, treeMap, recursionTree, level) {
      recursionTree(treeData, treeMap, level);
      return treeData;
    }
  },
  created() {
  },
  methods: {
    //过滤器可以传参函数，将递归写到函数里，过滤器使用
    recursionTree(node, treeMap, level) {
      const { title, key } = treeMap;
      for(let item of node) {
        item.title = item[title];
        item.key = item[key];
        item.level = level + 1;
        if(item.children) {
          this.recursionTree(item.children, treeMap, item.level)
        }
      }
      return node
    },
    onSelect(selectedKeys, info) {
      // this.showMenuItem = false;
      console.log('selected', selectedKeys, info);
    },
    onRightClick({ event, node }) {
      console.log('event', event);
      console.log('node', node);
      this.showMenuData = [];
      const nodeLevel = node.$options.propsData.dataRef.level; //点击级别
      //遍历出 给定级别 和 点击级别 相等的
      //相等，则展示showMenuData中，id和map.menu中相同的
      //如果没有相等的
      for(let key1 in this.menuMap){  //这个key是menuMap提供的level,为什么不是index呢
        if(Number(key1) === nodeLevel) { //级别相同了
          const showIds = this.menuMap[key1]; //showIds是一个对象,存放这一级需要展示的menu-key
          for(let key2 in showIds) { //i是index
            this.showMenuData.push(this.menuData[showIds[key2] - 1])
          }
        }
      }
      this.showMenuData = this.showMenuData.length === 0 ?  this.menuData : this.showMenuData
      this.showMenuItem = true;
    },
    dropdownClick () {
      console.log('hhhhh');
      // this.showMenuItem = false
    },
    contextmenu(e) {
      console.log('e', e);
    }
  },
};
</script>
