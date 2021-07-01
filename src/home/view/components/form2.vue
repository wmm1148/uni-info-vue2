<template>
<a-row :gutter="24">
  <a-form-model>
    <a-col :span="formItemSpan">
      <a-form-model-item label="Name">
        <a-input allowClear/>
      </a-form-model-item>
    </a-col>
    <a-col :span="formItemSpan">
      <a-form-model-item label="Captcha By Way2 ——— large">
        <captcha-input2
          :url="`/post/captcha?uuid=${uuid}`"
          v-model="captchaValue"
          method="post"
          size="large"
          allowClear
          placeholder="Input Captchaaaaaaaaaaaddddddddaaaa"
          disabled
          >
          <template #prefix>
            <a-icon type="safety"></a-icon>
          </template>
          <template #indicator>
            <!-- <a-icon type="safety"></a-icon> -->
            <svg t="1625041326084" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5967" width="200" height="200"><path d="M513.652405 117.787423c-16.209027 0-29.350001 13.139017-29.350001 29.35v733.751974c0 16.210984 13.140974 29.350001 29.350001 29.35s29.350001-13.139017 29.350001-29.35V147.137423c0-16.209027-13.140974-29.350001-29.350001-29.35zM352.769398 248.829306h-0.039133c-0.397203-15.86074-13.352294-28.604511-29.310868-28.604511s-28.913664 12.741814-29.310867 28.604511h-0.025437v0.48134c-0.001957 0.08805-0.013697 0.174143-0.013696 0.26415s0.01174 0.1761 0.013696 0.26415V778.459851c0 16.210984 13.140974 29.350001 29.350001 29.350001s29.350001-13.139017 29.350001-29.350001c0-0.090007-0.013697-0.1761-0.013697-0.266107V248.829306zM733.22563 248.829306h-0.039133c-0.397203-15.86074-13.352294-28.604511-29.310868-28.604511s-28.913664 12.741814-29.310867 28.604511h-0.025437v0.48134c-0.001957 0.08805-0.013697 0.174143-0.013696 0.26415s0.01174 0.1761 0.013696 0.26415V778.459851c0 16.210984 13.140974 29.350001 29.350001 29.350001s29.350001-13.139017 29.350001-29.350001c0-0.090007-0.013697-0.1761-0.013697-0.266107V248.829306zM133.090513 337.436958c-16.209027 0-29.350001 13.139017-29.350001 29.35v294.145707c0 16.210984 13.140974 29.350001 29.350001 29.350001s29.350001-13.139017 29.350001-29.350001v-294.145707c0-16.210984-13.140974-29.350001-29.350001-29.35zM894.092984 337.436958c-16.20707 0-29.350001 13.139017-29.350001 29.35v294.145707c0 16.210984 13.14293 29.350001 29.350001 29.350001 16.210984 0 29.350001-13.139017 29.35-29.350001v-294.145707c0-16.210984-13.139017-29.350001-29.35-29.35z" fill="#525252" p-id="5968"></path></svg>
          </template>
        </captcha-input2>
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
      <a-form-model-item label="Captcha By Way2 ——— default">
        <captcha-input2
          :url="`/post/captcha?uuid=${uuid}`"
          v-model="captchaValue"
          method="post"
          allowClear
          >
          <template #prefix>
            <a-icon type="safety"></a-icon>
          </template>
          <template #indicator>
            <svg t="1625041405804" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6099" width="200" height="200"><path d="M441.376 139.36a70.624 70.624 0 1 0 141.216 0 70.624 70.624 0 1 0-141.248 0zM167.488 256A68.576 68.576 0 0 0 304.64 256a68.576 68.576 0 0 0-137.152 0z m-104.384 257.888a62.432 62.432 0 0 0 124.864 0 62.432 62.432 0 0 0-124.864 0z m110.528 281.408a54.24 54.24 0 0 0 108.48 0 54.24 54.24 0 0 0-108.48 0z m293.344 117.536a47.2 47.2 0 0 0 94.4 0 47.2 47.2 0 0 0-94.4 0z m303.904-108.288a33.824 33.824 0 1 0 67.648 0 33.824 33.824 0 1 0-67.648 0z m140.704-291.936a23.968 23.968 0 1 0 47.936 0 23.968 23.968 0 1 0-47.936 0z m-72-251.424a17.12 17.12 0 1 0 34.24 0 17.12 17.12 0 1 0-34.24 0z" p-id="6100"></path></svg>
          </template>
        </captcha-input2>
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
      <a-form-model-item label="Captcha By Way2 ——— small">
        <captcha-input2
          :url="`/post/captcha?uuid=${uuid}`"
          v-model="captchaValue"
          method="post"
          size="small"
          allowClear
          >
          <template #prefix>
            <a-icon type="safety"></a-icon>
          </template>
          <template #indicator>
            <a-icon type="loading" style="font-size: 12px" spin />
          </template>
        </captcha-input2>
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
      <a-form-model-item label="Captcha By Way2 ——— Captcha Only">
        <captcha-input2
          :url="`/post/captcha?uuid=${uuid}`"
          v-model="captchaValue"
          method="post"
          size="small"
          CaptchaOnly
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