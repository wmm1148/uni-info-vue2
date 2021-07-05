<template>
<!-- Input框的封装 -->
<a-row :gutter="24">
  <a-form-model>
    <a-col :span="formItemSpan">
      <a-form-model-item label="字数统计 & 字数限制">
        <basic-input v-model="textLimit" :lengthLimit="5" showNumber allowClear>
        </basic-input>
      </a-form-model-item>
    </a-col>
    <a-col :span="formItemSpan">
      <a-form-model-item label="回显只读模式 & 一键复制 & 长数据预览">
        <basic-input v-model="email" copyAll readOnly>
        </basic-input> 
      </a-form-model-item>
    </a-col>
    <a-col :span="formItemSpan">
      <a-form-model-item label="预格式化展示">
        <basic-input v-model="textShow" showNumber type="textarea">
        </basic-input> 
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
      email: '哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼',
      textLimit: '',
      textShow: ''
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    }
    },
    watch: {
      email(newVal) {
        console.log('newEmaillllllll', newVal);
      }
    },
  components: {
    'basic-input': () => import('/components/form/basicInput.vue')
  },
  created() {
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