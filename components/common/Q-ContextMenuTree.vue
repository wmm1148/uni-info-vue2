<template>
  <a-dropdown
    ref="dropdown"
    :trigger="['contextmenu']"
    placement="bottomLeft"
  >
    <slot
      slot="overlay"
      name="menu"
      :record="{ ...record }"
      :vnode="vnode"
      :on="{ click: menuSelected }"
    >
    </slot>
    <a-tree
      :tree-data="treeData"
      block-node
      class="context-menu-tree"
      v-bind="$options.omit(['block-node', 'tree-data', 'replace-fields'], $attrs)"
      v-on="$options.omit([], $listeners)"
      @click.native="nativeClick"
      @contextmenu.native="nativeClick"
      @rightClick="rightClick"
    >
      <template
        slot="node"
        slot-scope="node"
      >
        <div class="tree-node-context-menu-wrapper">
          <div class="tree-node-title">
            <slot
              v-if="$scopedSlots.title"
              name="title"
              :record="$options.omit(['slots', 'scopedSlots'], node.dataRef)"
              :vnode="node"
            >
            </slot>
            <template v-else>
              {{ node.title }}
            </template>
          </div>
        </div>
      </template>
      <template
        v-for="(_, slot) of $options.omit(['title', 'action'], $scopedSlots)"
        #[slot]="scope"
      >
        <slot
          :name="slot"
          v-bind="scope"
        />
      </template>
    </a-tree>
  </a-dropdown>
</template>

<script>
import { omit } from 'ramda';
import { treeEach } from '@util/tree-helper.js';

// // 使用 '@util/tree-helper.js' 替换
// const treeEach = (fn, tree, parent) => {
//   tree.forEach((item, index) => {
//     item.parent = parent ? { ...parent } : null;
//     fn(item, index, parent, tree);
//     if (item.children && item.children.length) {
//       treeEach(fn, item.children, omit(['children'], item));
//     }
//   });
// };

//用对象来存是否右键点击是为了视图不及时更新吗???
//应该是可能认为会需要很多变量，所以用的对象
const compState = {
  rightClicked: false,
};

export default {
  omit,
  props: {
    dataSource: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data () {
    return {
      record: null,
      vnode: null,
    };
  },
  computed: {
    //这里对treeData进行了处理，添加了作用域插槽，遍历了树
    treeData () {
      const dataSource = [...this.dataSource];
      treeEach((item) => {
        item.scopedSlots = { title: 'node' };
      }, dataSource);
      return dataSource;
    },
  },
  methods: {
    rightClick ({ event: e, node }) {
      //阻止默认事件的发生
      e.preventDefault();
      
      //如果结点存在
      if (node && node.dataRef) {
        //继承结点相关信息
        this.record = this.$options.omit(['slots', 'scopedSlots'], node.dataRef || {});
        this.vnode = node;
      } else {
        //如果结点不存在就存空
        this.record = null;
        this.vnode = null;
      }
      //标记点击右键为true
      compState.rightClicked = true;

      //为什么？？？？习惯？？？
      return false;
    },
    nativeClick (e) {
      //直接点击或者点击树的其他地方
      e.preventDefault();
      e.stopPropagation();

      //如果是菜单 并且 不是右键结点
      //this.$refs.dropdown 打印出来应该是undifined，if出来的难道不应该是false吗？？？？？
      if (this.$refs.dropdown && !compState.rightClicked) {
        //美观
        const { dropdown } = this.$refs;

        this.$nextTick(() => {
          //如果菜单有孩子？？  并且菜单的第一个孩子存在？？
          if (dropdown.$children && dropdown.$children[0]) {
            //我怎么知道这个不显示的就是菜单？？而不是所有子组件，为什么子组件是菜单？？？不是树？？？
            dropdown.$children[0].sVisible = false;
          }
        });
      }

      this.$nextTick(() => {
        //如果是菜单 但不是右键
        if (!compState.rightClicked) {
          this.record = null;
          this.vnode = null;
        }
        compState.rightClicked = false;
      });
      return false;
    },
    menuSelected () {
      this.record = null;
      this.vnode = null;
    },
  },
};
</script>

<style lang="less" scoped>
  @tree-node-padding: 0px;
  .context-menu-tree {
    user-select: none;
    background: white;
    /deep/ li {
      padding-top: @tree-node-padding;
      padding-bottom: @tree-node-padding;
      &:first-child {
        padding-top: 2 * @tree-node-padding;
      }
    }
    /deep/ li .ant-tree-node-content-wrapper {
      & > .ant-tree-title {
        border-radius: 2px;
        cursor: pointer;
        transition: all .3s;
        & > .tree-node-context-menu-wrapper {
          display: flex;
          & > .tree-node-title {
            flex-grow: 1;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-break: break-all;
          }
        }
      }
    }
  }
</style>
