<template>
  <a-row :gutter="24">
    <a-form-model>
      <a-col :span="formItemSpan">
        <a-form-model-item label="Name">
          <a-input />
        </a-form-model-item>
      </a-col>
      <a-col :span="formItemSpan">
        <a-form-model-item label="Captcha By Way3 ——— large">
          <captcha-input
            :url="`/post/captcha?uuid=${uuid}`"
            v-model="captchaValue"
            placeholder="Input Captchaaaaaaaaaaaaaaaa"
            allowClear
            alt="hold on"
            size="large"
            method="post"
            >
            <template #prefix>
              <a-icon type="safety"></a-icon>
            </template>
            <template #suffix>
              <a-icon type="safety"></a-icon>
            </template>
            <template #indicator>
            <!-- <a-icon type="safety"></a-icon> -->
            <svg t="1625041326084" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5967" width="200" height="200"><path d="M513.652405 117.787423c-16.209027 0-29.350001 13.139017-29.350001 29.35v733.751974c0 16.210984 13.140974 29.350001 29.350001 29.35s29.350001-13.139017 29.350001-29.35V147.137423c0-16.209027-13.140974-29.350001-29.350001-29.35zM352.769398 248.829306h-0.039133c-0.397203-15.86074-13.352294-28.604511-29.310868-28.604511s-28.913664 12.741814-29.310867 28.604511h-0.025437v0.48134c-0.001957 0.08805-0.013697 0.174143-0.013696 0.26415s0.01174 0.1761 0.013696 0.26415V778.459851c0 16.210984 13.140974 29.350001 29.350001 29.350001s29.350001-13.139017 29.350001-29.350001c0-0.090007-0.013697-0.1761-0.013697-0.266107V248.829306zM733.22563 248.829306h-0.039133c-0.397203-15.86074-13.352294-28.604511-29.310868-28.604511s-28.913664 12.741814-29.310867 28.604511h-0.025437v0.48134c-0.001957 0.08805-0.013697 0.174143-0.013696 0.26415s0.01174 0.1761 0.013696 0.26415V778.459851c0 16.210984 13.140974 29.350001 29.350001 29.350001s29.350001-13.139017 29.350001-29.350001c0-0.090007-0.013697-0.1761-0.013697-0.266107V248.829306zM133.090513 337.436958c-16.209027 0-29.350001 13.139017-29.350001 29.35v294.145707c0 16.210984 13.140974 29.350001 29.350001 29.350001s29.350001-13.139017 29.350001-29.350001v-294.145707c0-16.210984-13.140974-29.350001-29.350001-29.35zM894.092984 337.436958c-16.20707 0-29.350001 13.139017-29.350001 29.35v294.145707c0 16.210984 13.14293 29.350001 29.350001 29.350001 16.210984 0 29.350001-13.139017 29.35-29.350001v-294.145707c0-16.210984-13.139017-29.350001-29.35-29.35z" fill="#525252" p-id="5968"></path></svg>
          </template>
            </captcha-input>
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
        <a-form-model-item label="Captcha By Way3 ——— default">
          <captcha-input
            :url="`/post/captcha?uuid=${uuid}`"
            v-model="captchaValue"
            placeholder="Input Captchaaaaaaaaaaaaaaaa"
            allowClear
            alt="hold on"
            size="default"
            method="post"
            >
            <template #prefix>
              <a-icon type="safety"></a-icon>
            </template>
            <template #suffix>
              <a-icon type="safety"></a-icon>
            </template>
            </captcha-input>
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
        <a-form-model-item label="Captcha By Way3 ——— small">
          <captcha-input
            :url="`/post/captcha?uuid=${uuid}`"
            v-model="captchaValue"
            placeholder="Input Captchaaaaaaaaaaaaaaaa"
            allowClear
            alt="hold on"
            size="small"
            method="post"
            >
            <template #prefix>
              <a-icon type="safety"></a-icon>
            </template>
            <template #suffix>
              <a-icon type="safety"></a-icon>
            </template>
            </captcha-input>
        </a-form-model-item>
      </a-col>
      <a-col :span="formItemSpan">
        <a-form-model-item label="Status">
          <a-input size="small" placeholder="Input Captchaaddddddddddddddddddddddddddddddddddaaaaaaaaaaaaaa">
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
        <a-form-model-item label="Captcha Only">
          <captcha-input
            :url="`/post/captcha?uuid=${uuid}`"
            v-model="captchaValue"
            placeholder="Input Captchaaaaaaaaaaaaaaaa"
            allowClear
            alt="hold on"
            size="default"
            method="post"
            deleteInput
            >
            <template #prefix>
              <a-icon type="safety"></a-icon>
            </template>
            <template #suffix>
              <a-icon type="safety"></a-icon>
            </template>
            </captcha-input>
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
  components: {
    'captcha-input': () => import('/components/form/captchaInput.vue')
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