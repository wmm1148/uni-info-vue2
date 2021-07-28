<template>
  <basic-card title="Input">
    <div class="test">
      <basic-input>

      </basic-input>
    </div>
  </basic-card>
</template>

<script>
  export default {
    components: {
      'basic-card': () => import('../../../../components/display/BasicCard.vue'),
      'basic-input': () => import('/components/form/BasicInput.vue')
    },
  }
</script>

<style lang="less" scoped>
.test {
  width: 300px;
  height: 300px;
  // background-color: gray;
}
</style>