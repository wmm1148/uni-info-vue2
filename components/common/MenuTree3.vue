<template>
<!-- 树型数据由外部提供，菜单暴露出去，由外部数据自行设置 ———————最终版-->
  <a-dropdown
  ref="dropdown"
  :trigger="['contextmenu']"
  >
    <template #overlay>
      <slot
      name="menu" 
      :currentNode="currentNode" 
      :currentNodeParent="currentNodeParent" 
      :addNodes="addNodes"
      :removeNodes="removeNodes"
      :updateNodes="updateNodes"
      :removeAllNodes="removeAllNodes"
      :currentIsLeaf="currentIsLeaf"
      >
      </slot>
    </template>
    <a-tree
    :show-line="showLine"
    :show-icon="showIcon"
    defaultExpandAll
    :selectedKeys.sync="selectedKeys"
    @select="onSelect"
    @rightClick="onRightClick"
    :treeData="treeData | filterTreeData(treeMap, recursionTree, level)"
    @click.native="nativeClick"
    @contextmenu.native="nativeClick"
    >
    </a-tree>
  </a-dropdown>
</template>

<script>

export default {
  data() {
    return {
      selectedKeys: [],
      showLine: true,
      showIcon: false,
      showMenuItem: false,
      level: 0,
      currentNode: {},
      currentNodeParent: {},
      currentNodeChildren: [],
      currentIsLeaf: false,
    };
  },
  props: {
    treeData: {
      type: Array,
      default: () => {}
    },
    treeMap: {
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
      this.showMenuItem = false;
      
      console.log('selectedKeys', this.selectedKeys);
      console.log('selected', selectedKeys, info);
    },
    onRightClick({ event, node }) {
      //阻止默认事件的发生
      event.preventDefault();
      // console.log('event', event);
      // console.log('node', node);
      event.preventDefault();
      this.showMenuItem = true;
      this.currentNode = node.$options.propsData;
      this.currentNodeParent = node.$parent.dataRef;
      this.currentNodeChildren = this.currentNode.dataRef.children;
      this.currentIsLeaf = this.currentNodeChildren ? false : true;
      this.selectedKeys = [this.currentNode.dataRef.key];
      console.log('this.selectedKeys', this.selectedKeys);
    },
    nativeClick(e) {  //左键或右键点击树的其他部分
      e.preventDefault();  //取消默认事件  默认事件是什么？？
      e.stopPropagation();  //取消继续传播
      console.log('this.showMenuItem', this.showMenuItem);
      console.log('this.$refs', this.$refs);
      //如果是菜单 并且 不是右键结点
      if (this.$refs.dropdown && !this.showMenuItem) {
        //美观
        const { dropdown } = this.$refs;
        this.$nextTick(() => {
          //如果菜单有孩子？？  并且菜单的第一个孩子存在？？
          if (dropdown.$children && dropdown.$children[0]) {
            //让它的孩子不显示
            dropdown.$children[0].sVisible = false;
          }
        });
      }

      // this.$nextTick(() => {
        this.showMenuItem = false;
      // });
    },
    addNodes(node) {
      //node内容从父组件获取，直接插到对应位置，只有没有children的可以删除
      //需要进行判断，如果是第一层，则直接添加
      if(this.currentNode.dataRef.level === 1) {
        this.treeData.push(node)
      }
      else
      this.currentNodeParent.children.push(node);
      this.showMenuItem = false;
    },
    updateNodes(node) {
      //更新结点要看结点是否有孩子，有的话把孩子也拿过来
      console.log('this.currentNode.dataRef', this.currentNode.dataRef);
      node.children = this.currentNode.dataRef.children ? this.currentNode.dataRef.children : null;
      node.id = this.currentNode.dataRef.id;
      if(this.currentNode.dataRef.level === 1) {
        let index = -1;
        for(let leaf of this.treeData) {
          index = index + 1;
          console.log('leaf.id', leaf.id);
          if(leaf.id === this.currentNode.dataRef.id) {
            this.treeData.splice(index, 1, node)
          }
        }
      }
      else {
        const brothers = this.currentNodeParent.children;
        let index = -1;
        for(let leaf of brothers) {
          index = index + 1;
          console.log('leaf.id', leaf.id);
          if(leaf.id === this.currentNode.dataRef.id) {
            brothers.splice(index, 1, node)
          }
        }
      }
      this.showMenuItem = false;
      
    },

    //删除叶子结点还是带着子节点可以用一个变量控制
    //逻辑上，只有叶子结点可以看到这个菜单，能都实现删除都是封装好的，那这个权限也应该封装好
    removeNodes() {
      if(this.currentNode.dataRef.level === 1) {
        if(!this.currentNodeChildren) {
          let index = -1;
          for(let leaf of this.treeData) {
            index = index + 1;
            if(leaf.id === this.currentNode.dataRef.id) {
              this.treeData.splice(index, 1)
            }
          }
        }
        else {
          console.log('wrong!!! It is not a leaf node');
        }
      }
      else {
        const brothers = this.currentNodeParent.children;
        if(!this.currentNodeChildren) {
          let index = -1;
          for(let leaf of brothers) {
            index = index + 1;
            console.log('leaf.id', leaf.id);
            if(leaf.id === this.currentNode.dataRef.id) {
              brothers.splice(index, 1)
            }
          }
        }
        else {
          console.log('wrong!!! It is not a leaf node');
        }
      }
      this.showMenuItem = false;

    },
    removeAllNodes() {
      if(this.currentNode.dataRef.level === 1) {
        let index = -1;
        for(let leaf of this.treeData) {
          index = index + 1;
          console.log('leaf.id', leaf.id);
          if(leaf.id === this.currentNode.dataRef.id) {
            this.treeData.splice(index, 1)
          }
        }
      }
      else {
        const brothers = this.currentNodeParent.children;
        let index = -1;
        for(let leaf of brothers) {
          index = index + 1;
          console.log('leaf.id', leaf.id);
          if(leaf.id === this.currentNode.dataRef.id) {
            brothers.splice(index, 1)
          }
        }
      }
      this.showMenuItem = false;
    },
    
  },
};
</script>
