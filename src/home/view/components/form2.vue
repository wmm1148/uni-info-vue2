<template>
<a-row :gutter="24">
  <a-form-model>
    <a-col :span="formItemSpan">
      <a-form-model-item label="Name">
        <a-input allowClear/>
      </a-form-model-item>
    </a-col>
    <a-col :span="formItemSpan">
      <a-form-model-item label="Age">
        <a-input>
          <template #prefix>
            <a-icon type="safety"></a-icon>
          </template>
          <template #suffix>
            <a-icon type="safety"></a-icon>
          </template>
        </a-input> 
      </a-form-model-item>
    </a-col>
    <a-col :span="formItemSpan">
      <a-form-model-item label="Gender">
        <a-input allowClear/>
      </a-form-model-item>
    </a-col>
    <a-col :span="formItemSpan">
      <a-form-model-item label="Major">
        <a-input size="large">
          <template #prefix>
            <a-icon type="safety"></a-icon>
          </template>
          <template #suffix>
            <a-icon type="safety"></a-icon>
          </template>
        </a-input> 
      </a-form-model-item>
    </a-col>
    <a-col :span="formItemSpan">
      <a-form-model-item label="Status">
        <a-input 
        size="small" 
        placeholder="Input Captchaaddddddddddddddddddddddddddddddddddaaaaaaaaaaaaaa"
        allowClear>
          <template #prefix>
            <a-icon type="safety"></a-icon>
          </template>
          <!-- <template #suffix>
            <a-icon type="safety"></a-icon>
          </template> -->
        </a-input> 
      </a-form-model-item>
    </a-col>
    <a-col :span="formItemSpan">
      <a-form-model-item label="Captcha By Way2">
        <captcha-input2
          :url="`/post/captcha?uuid=${uuid}`"
          v-model="captchaValue"
          method="post"
          size="large"
          allowClear
          >
          <template #prefix>
            <a-icon type="safety"></a-icon>
          </template>
          </captcha-input2>
      </a-form-model-item>
    </a-col>
  </a-form-model>
</a-row>
</template>

<script>
export default {
  data () {
    return {
      formItemSpan: 12,
      headStyle: { 'font-weight': 'bold' },
      captchaValue: '',
      uuid: '12345'
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    }
    },
    watch: {
      captchaValue(newVal) {
        console.log('newVallllllllllllllllllll', newVal);
      }
    },
  components: {
    'captcha-input2': () => import('/components/form/captchaInput2.vue')
  },
  methods: {
    backClick () {
      this.$router.push('/stu/stuInfo/')
    },
    addClick () {
      this.$router.push('/stu/stuInfo/add')
    },
    handleOk() {
      console.log('captchaValue', this.captchaValue);
    },
      handleCancel() {
      this.$emit('update:visible', false);
      }
  },
}
</script>

<style lang="less" scoped>

</style>