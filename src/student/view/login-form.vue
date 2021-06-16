<template>
  <div>
    <a-modal 
    :visible="visible" 
    title="Edit Stu Information"
    width="700px"
    @ok="handleOk"
    @cancel="handleCancel"
    >
      <a-row :gutter="24">
        <a-form-model>
          <a-col :span="formItemSpan">
            <a-form-model-item label="Name">
              <a-input />
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
              <a-input />
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
            <a-form-model-item label="Captcha">
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
                <!-- <template #suffix>
                  <a-icon type="safety"></a-icon>
                </template> -->
                </captcha-input>
            </a-form-model-item>
          </a-col>
        </a-form-model>
      </a-row>
    </a-modal>
    
  </div>
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
    'captcha-input': () => import('/components/form/captchaInput.vue'),
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

<style scoped>
.stu-card {
  /* display: inline; */
    background: #feffff;
    width: 98%;
    margin: 12px auto;
    /* height: 100%; */
    height: auto;
    text-align: left;
}
.ant-card-body {
  padding: 0 24px 24px 24px;
}
</style>