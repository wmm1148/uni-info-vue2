<template>
  <a-card v-bind="$attrs" class="card-layout" :title="title" :headStyle='headStyle'>
    <slot></slot>
  </a-card>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
      }
    },
    data() {
      return {
        headStyle: { 'font-weight': 'bold' },
      }
    }
  }
</script>

<style scoped>
.card-layout {
  background: #feffff;
  text-align: left;
  margin: 12px;
}
.ant-card-body {
  padding: 0 24px 24px 24px;
}
</style>