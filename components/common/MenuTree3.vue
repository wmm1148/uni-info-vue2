<template>
<!-- 树型数据由外部提供，菜单暴露出去，由外部数据自行设置 -->
  <a-dropdown :trigger="['contextmenu']" @click.native="dropdownClick" :visible="showMenuItem">
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
    @select="onSelect"
    @rightClick="onRightClick"
    :treeData="treeData"
    blockNode
    @contextmenu.native="contextmenu"
    >
    </a-tree>
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
  },
  created() {
    console.log('treeData', this.treeData);
  },
  methods: {
    onSelect(selectedKeys, info) {
      this.showMenuItem = false;
      console.log('selected', selectedKeys, info);
    },
    onRightClick({ event, node }) {
      console.log('event', event);
      console.log('node', node);
      this.showMenuItem = true;
      this.currentNode = node.$options.propsData;
      this.currentNodeParent = node.$parent.dataRef;
      this.currentNodeChildren = this.currentNode.dataRef.children;
      this.currentIsLeaf = this.currentNodeChildren ? false : true;
    },
    dropdownClick () {
      console.log('hhhhh');
      // this.showMenuItem = false
    },
    contextmenu(e) {
      console.log('e', e);
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
    }
    
  },
};
</script>
