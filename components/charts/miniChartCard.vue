<template>
  <div>
    <a-card>
      <!-- <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="extra">
        <slot name="extra"></slot>
      </div> -->
      <div class="flex-title">
        <slot name="title"></slot>
        <slot name="extra"></slot>
      </div>
      <slot class="content"></slot>
      <div class="footer">
        <a-divider v-if="footerDivider"/>
        <slot name="footer" ref="footer"></slot>
      </div>
    </a-card>
  </div>
</template>

<script>
  export default {
    props: {
      footerDivider: {
        type: Boolean,
        default: false
      }
    },
    created() {
      console.log('object', this.$refs.footer);
    }
  }
</script>

<style lang="less" scoped>
.ant-card {
  height: 180px;
  // background-color:rgba(233, 231, 231, 0.65);
  position: relative;
  width: 100%;
  /deep/ .ant-card-body {
    padding: 24px;
  }
}
.flex-title {
  display: flex;
  justify-content: space-between;
}
.content {
  top: 50px;
}
.footer {
  // background: black;
  height: 40px;
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