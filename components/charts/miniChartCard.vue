<template>
  <div>
    <a-card>
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="extra">
        <slot name="extra"></slot>
      </div>
      <slot></slot>
      <div class="footer">
        <a-divider />
        <slot name="footer"></slot>
      </div>
    </a-card>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.ant-card {
  height: 180px;
  // background-color:rgba(233, 231, 231, 0.65);
  position: relative;
  width: 100%;
}
.extra {
  // background: black;
  height: 50px;
  line-height: 50px;
  // height: 30%;
  position:absolute;
  right: 0;
  top: 0;
  width: 14%;
  text-align: center;
  vertical-align: middle;
  margin: auto;
}
.footer {
  // background: black;
  height: 50px;
  position:absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  // top: 450px;
  // z-index: 9;
}
.ant-divider {
    color: rgba(0, 0, 0, 0.10);
}
.ant-divider-horizontal {
  margin: auto;
  margin-bottom: 10px;
  text-align: center;
  width: 90%;
  min-width: 90%;
}
</style>