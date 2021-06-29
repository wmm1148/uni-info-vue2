<template>
  <div>
    <a-tree
    :show-line="showLine"
    :show-icon="showIcon"
    :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']"
    @select="onSelect"
    @rightClick="onRightClick"
    >
      <a-icon slot="icon" type="carry-out" />
      <a-tree-node key="0-0">
        <a-icon slot="icon" type="carry-out" />
        <span slot="title" style="color: #1890ff">parent 1</span>
        <a-tree-node key="0-0-0" title="parent 1-0">
          <a-icon slot="icon" type="carry-out" />
          <a-tree-node key="0-0-0-0" title="leaf">
            <a-icon slot="icon" type="carry-out" />
          </a-tree-node>
          <a-tree-node key="0-0-0-1" title="leaf">
            <a-icon slot="icon" type="carry-out" />
          </a-tree-node>
          <a-tree-node key="0-0-0-2" title="leaf">
            <a-icon slot="icon" type="carry-out" />
          </a-tree-node>
        </a-tree-node>
        <a-tree-node key="0-0-1" title="parent 1-1">
          <a-icon slot="icon" type="carry-out" />
          <a-tree-node key="0-0-1-0" title="leaf">
            <a-icon slot="icon" type="carry-out" />
          </a-tree-node>
        </a-tree-node>
        <a-tree-node key="0-0-2" title="parent 1-2">
          <a-icon slot="icon" type="carry-out" />
          <a-tree-node key="0-0-2-0" title="leaf">
            <a-icon slot="icon" type="carry-out" />
          </a-tree-node>
          <a-tree-node key="0-0-2-1" title="leaf">
            <a-icon slot="icon" type="carry-out" />
            <a-icon slot="switcherIcon" type="form" />
          </a-tree-node>
        </a-tree-node>
      </a-tree-node>
    </a-tree>
    <div :style="tmpStyle" v-if="nodeMenu" @click="divClick">
      <div class="menu-item">
        <a-tooltip placement="bottom" title="新增">
          <a-icon type="plus-circle-o" />
        </a-tooltip>
      </div>
      <div class="menu-item">
        <a-tooltip placement="bottom" title="修改">
          <a-icon type="edit" />
        </a-tooltip>
      </div>
      <div class="menu-item">
        <a-tooltip placement="bottom" title="删除">
          <a-icon type="minus-circle-o" />
        </a-tooltip>
      </div>
      <div class="menu-item">
        <a-tooltip placement="bottom" title="新增">
          <a-icon type="plus-circle-o" />
        </a-tooltip>
      </div>
      <div class="menu-item">
        <a-tooltip placement="bottom" title="修改">
          <a-icon type="edit" />
        </a-tooltip>
      </div>
      <div class="menu-item">
        <a-tooltip placement="bottom" title="删除">
          <a-icon type="minus-circle-o" />
        </a-tooltip>
      </div>
      <div class="menu-item">
        <a-tooltip placement="bottom" title="新增">
          <a-icon type="plus-circle-o" />
        </a-tooltip>
      </div>
      <div class="menu-item">
        <a-tooltip placement="bottom" title="修改">
          <a-icon type="edit" />
        </a-tooltip>
      </div>
      <div class="menu-item">
        <a-tooltip placement="bottom" title="删除">
          <a-icon type="minus-circle-o" />
        </a-tooltip>
      </div>
      <div class="menu-item">
        <a-tooltip placement="bottom" title="新增">
          <a-icon type="plus-circle-o" />
        </a-tooltip>
      </div>
      <div class="menu-item">
        <a-tooltip placement="bottom" title="修改">
          <a-icon type="edit" />
        </a-tooltip>
      </div>
      <div class="menu-item">
        <a-tooltip placement="bottom" title="删除">
          <a-icon type="minus-circle-o" />
        </a-tooltip>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showLine: true,
      showIcon: false,
      headStyle: { 'font-weight': 'bold' },
      nodeMenu: null, // 右键菜单
      tmpStyle: '',
    };
  },
  methods: {
    onSelect(selectedKeys, info) {
      console.log('selected', selectedKeys, info);
      this.queryParam = {
        orgId: selectedKeys[0]
      };
      // 写自己的业务逻辑
      // this.$refs.table.refresh(true);
    },
    onRightClick ({ event, node }) {
      //event.offsetX:鼠标相对于事件源的位置
      //event.currentTarget.offsetLeft 事件源左侧的长度，这里是icon的24
      //clientX - offsetX + clientWidth + 和button的间距 = button的x
      //clientY - offsetY = button的y
      console.log('event', event);
      console.log('node', node);
      // console.log('event.offsetX', event.offsetX);
      console.log('event.clientY', event.clientY);
      console.log('event.offsetY', event.offsetY);
      // console.log('event.currentTarget.clientWidth', event.currentTarget.clientWidth);
      // console.log('event.currentTarget.clientHeight', event.currentTarget.clientHeight);
      // console.log('event.currentTarget.offsetLeft', event.currentTarget.offsetLeft);
      // console.log('event.currentTarget.offsetTop', event.currentTarget.offsetTop);

      const x = event.clientX + event.currentTarget.clientWidth - event.offsetX;
      const y = event.clientY - event.offsetY;
      // console.log('x', x);
      console.log('y', y);

      // console.log(node._props.dataRef.parentOrgId);

      //点击显示按钮，同时也需要传一些数据，是哪个按钮等
      this.nodeMenu = {
        pageX: x,
        clientY: y,
        id: node._props.eventKey,
        title: node._props.title,
      };
      this.tmpStyle = {
        position: 'absolute',
        maxHeight: 40,
        textAlign: 'center',
        left: '120px',
        top: `${y - 72}px`,
        // clientY: y,
        display: 'flex',
        flexDirection: 'row',
        // border: '1px solid #1890ff'
      };
    },
    divClick(e) {
      console.log('div click', e);
    }
  },
};
</script>
