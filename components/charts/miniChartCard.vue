<template>
  <div>
    <a-card>
      <template #extra>
        <slot name="extra"></slot>
      </template>
      <template #title>
        <slot name="title"></slot>
      </template>
      <slot></slot>
      <p>Card content</p>
      <template #actions>
        <slot name="actions"></slot>
      </template>
      
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
}
</style>