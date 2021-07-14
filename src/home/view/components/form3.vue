<template>
<!-- Input框的封装 -->
<div>
  <a-row :gutter="24">
    <h1 style="font-weight:bold">基本功能</h1>
    <a-form-model>
      <a-col :span="formItemSpan">
        <a-form-model-item label="1. 字数统计">
          <basic-input v-model="value1" count>
          </basic-input>
        </a-form-model-item>
      </a-col>
      <a-col :span="formItemSpan">
        <a-form-model-item label="2. 字数限制">
          <basic-input v-model="value2" :maxLength="9" count>
          </basic-input>
          说明：仍使用原有maxLength属性
        </a-form-model-item>
      </a-col>
      <a-col :span="formItemSpan">
        <a-form-model-item label="3. 字节区分（待完善）">
          <basic-input v-model="value3" :byteLimit="6" byteCount>
          </basic-input>
        </a-form-model-item>
      </a-col>
      <a-col :span="formItemSpan">
        <a-form-model-item label="4. 回显只读模式">
          <basic-input v-model="value4" readOnly>
          </basic-input>
        </a-form-model-item>
      </a-col>
      <a-col :span="formItemSpan">
        <a-form-model-item label="5. 一键复制">
          <basic-input v-model="value5" copyAll>
          </basic-input>
        </a-form-model-item>
      </a-col>
      <!-- <a-col :span="formItemSpan">
        <a-form-model-item label="6. 长数据预览">
          <basic-input v-model="value6" readOnly>
          </basic-input>
        </a-form-model-item>
      </a-col> -->
      <!-- <a-col :span="formItemSpan">
        <a-form-model-item label="7. 预格式化展示">
          <basic-input v-model="value7" readOnly>
          </basic-input>
        </a-form-model-item>
      </a-col> -->
      <!-- <a-col :span="formItemSpan">
        <a-form-model-item label="8. 提示输入内容">
          <basic-input v-model="value8" readOnly>
          </basic-input>
        </a-form-model-item>
      </a-col> -->
    </a-form-model>
  </a-row>
  <br>
  <a-row :gutter="24">
    <h1 style="font-weight:bold">复合使用</h1>
    <a-form-model>
      <a-col :span="formItemSpan">
        <a-form-model-item label="字数统计 & 字数限制">
          <basic-input v-model="textLimit" :byteLimit="6" count :maxLength="2">
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
          <basic-input v-model="textShow" count type="textarea">
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
      <a-col :span="formItemSpan">
        <a-form-model-item label="测试可编辑">
          <p contenteditable="true" spellcheck="true">spellcheck属性是HTML5 规范的一部分，它添加了对输入、textarea 元素和可编辑文本字段的拼写检查。主要针对一些无法识别的词语提供熟悉的红色波形曲线。</p>
        </a-form-model-item>
      </a-col>
      <a-col :span="formItemSpan">
        <a-form-model-item label="inputNumber框的使用">
          <a-input-number
            :default-value="1000"
            :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
            :parser="value => value.replace(/\$\s?|(,*)/g, '')"
            @change="onChange"
            :step="0"
          />
        </a-form-model-item>
      </a-col>
    </a-form-model>
  </a-row>
</div>
  
</template>

<script>
export default {
  data () {
    return {
      formItemSpan: 12,
      headStyle: { 'font-weight': 'bold' },
      captchaValue: '',
      uuid: '12345',
      email: '哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼',
      textLimit: '',
      textShow: '',
      dataPhone: '',
      test: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '回显只读回显只读回显只读回显只读',
      value5: '点击图标复制，数据可修改',
      value6: '',
      value7: '',
      value8: '',
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
    onChange(value) {
      console.log('changed', value);
    },
  }
}
</script>

<style lang="less" scoped>

</style>