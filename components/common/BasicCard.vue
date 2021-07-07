<template>
  <!-- <div class="layout"> -->
    <a-card class="card-layout" :title="title" :headStyle='headStyle'>
      <template #extra>
        <a-icon type="plus-square" style="fontSize:1.3em"/>
      </template>
      <slot></slot>
    </a-card>
  <!-- </div> -->
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
  width: 100%;
  text-align: left;
  /* height: 600px; */
  margin: 12px;
  height: auto;
}
.ant-card-body {
  padding: 0 24px 24px 24px;
}
</style>