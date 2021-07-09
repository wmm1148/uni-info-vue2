<template>
<!-- Input框的封装 -->
<a-row :gutter="24">
  <a-form-model>
    <a-col :span="formItemSpan">
      <a-form-model-item label="字数统计 & 字数限制">
        <basic-input v-model="textLimit" :byteLimit="6" showNumber :maxLength="2">
        </basic-input>
      </a-form-model-item>
    </a-col>
    <a-col :span="formItemSpan">
      <a-form-model-item label="字节限制">
        <basic-input v-model="byteLimit" :lengthLimit="5" showNumber allowClear :maxLength="2">
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
      <a-form-model-item label="预格式化展示——电话号">
        <basic-input v-model="dataPhone" type="mobile">
        </basic-input> 
      </a-form-model-item>
    </a-col>
    <a-col :span="formItemSpan">
      <a-form-model-item label="预格式化展示">
        <basic-input v-model="textShow" showNumber type="textarea">
        </basic-input> 
      </a-form-model-item>
    </a-col>
    <!-- <a-col :span="formItemSpan">
      <a-form-model-item label="自定义指令作用于原生input上">
        <input v-numberOnly placeholder="Number Only">
      </a-form-model-item>
    </a-col> -->
    <a-col :span="formItemSpan">
      <a-form-model-item label="字节个数 作用于原生input上">
        <!-- <a-input :value="test" @change.native="ontest"/> -->
        <!-- <input type="text" id="nickname" class="nickname" :value="test" onkeyup="WidthCheck(this,10)"/> -->
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
      dataPhone: '',
      test: '',
      byteLimit: ''
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
  components: {
    'basic-input': () => import('/components/form/basicInput.vue')
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>

</style>