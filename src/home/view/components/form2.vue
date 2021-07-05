<template>
<!-- 采用方式二写验证码的封装 -->
<a-row :gutter="24">
  <a-form-model>
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
        </captcha-input2>
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
        </captcha-input2>
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
      formItemSpan: 13,
      headStyle: { 'font-weight': 'bold' },
      captchaValue: '',
      uuid: '12345',
      email: '哦吼吼',
      longText: '',
      textLimit: '',
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
      },
      email(newVal) {
        console.log('newEmaillllllll', newVal);
      }
    },
  components: {
    'captcha-input2': () => import('/components/form/captchaInput2.vue'),
    // 'basic-input': () => import('/components/form/basicInput.vue')
  },
  created() {
    // $(document).ready(function(){
    //   $('.input').on('input focus keyup',
    //       function(){
    //     var strs   = getByteLen($(this).val());
    //     remain = strs.length;
    //     var content_msg = remain+'字';
    //     $(this).next().html(content_msg);			
    //       }
    //   );
    // });
    // //获取除标点符号之外的字数
    // function getByteLen(val) {
    //   strs = val.replace(/[\ |\~|\`|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\-|\_|\+|\=|\||\\|\[|\]|\{|\}|\;|\:|\"|\'|\,|\<|\.|\>|\/|\?|\，|\。|\？|\：|\；|\‘|\’|\”|\“|\、|\·|\！|\（|\）|\》|\《|\『|\』]/g,""); 
    //   //let recxType = /^[0-9A-Za-z\u4e00-\u9fa5]{15,}$/;
    //   return strs; 
    // }
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
    },
    
  }
}
</script>

<style lang="less" scoped>

</style>