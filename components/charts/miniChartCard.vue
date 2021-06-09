<template>
  <div>
    <a-card>
      <!-- <template #extra>
        <slot name="extra"></slot>
      </template> -->
      <!-- <template #title>
        <slot name="title"></slot>
      </template> -->
      <div class="titleee">
      <slot name="title"></slot>
      </div>
      <template #actions>
        <!-- <slot name="actions"></slot> -->
        actions
      </template>
      <p>Card content</p>
      <p>Card content</p>

    </a-card>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="less" scoped>
.ant-card {
  height: 280px;
}
</style>