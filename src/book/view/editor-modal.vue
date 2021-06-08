<template>
  <div>
    <a-modal 
    :visible="visible" 
    title="Edit Book Information"
    width="900px"
    @ok="handleOk"
    @cancel="handleCancel"
    >
      <wang-editor></wang-editor>
    </a-modal>
  </div>
</template>

<script>
  export default {
    components: {
    'wang-editor': () => import('/components/common/wangeditor.vue')
    },
    props: {
    visible: {
      type: Boolean,
      default: false,
    }
    },
    data() {
      return {
      }
    },
    created() {

    },
    methods: {
      handleOk() {

      },
      handleCancel() {
      this.$emit('update:visible', false);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>