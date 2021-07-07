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
        <basic-input v-model="email" copyAll readOnly >
        </basic-input> 
      </a-form-model-item>
    </a-col>
    <a-col :span="formItemSpan">
      <a-form-model-item label="预格式化展示">
        <basic-input v-model="textShow" showNumber type="textarea">
        </basic-input> 
      </a-form-model-item>
    </a-col>
    <a-col :span="formItemSpan">
      <a-form-model-item label="自定义指令作用于原生input上">
        <input v-numberOnly placeholder="Number Only">
      </a-form-model-item>
    </a-col>
    <a-col :span="formItemSpan">
      <a-form-model-item label="原生电话号(有空格)">
        <input type="phone" v-model="dataPhone" maxlength="13">
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
      textShow: '',
      dataPhone: ''
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    }
    },
    directives: {
      numberOnly: {
        bind: function(e) {
          console.log('bind eeeeeeeeeeeee', e);
          e.handler = function() {
            e.value = e.value.replace(/\D+/, '')
          }
          e.addEventListener('input', e.handler)
        },
        unbind: function(e) {
          e.removeEventListener('input', e.handler)
        }
      }
    },
    watch: {
      email(newVal) {
        console.log('newEmaillllllll', newVal);
      },
      dataPhone(newValue, oldValue) {
        if (newValue.length > oldValue.length) { // 文本框中输入
        if (newValue.length === 3 || newValue.length === 8) {
        this.dataPhone += ' '
        }
        } else { // 文本框中删除
        if (newValue.length === 9 || newValue.length === 4) {
        this.dataPhone = this.dataPhone.trim()
        }
        }
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