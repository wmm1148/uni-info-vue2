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
          <p>说明：仍使用原有maxLength属性。</p>
        </a-form-model-item>
      </a-col>
      <a-col :span="formItemSpan">
        <a-form-model-item label="3. 字节区分（待完善）">
          <basic-input v-model="value3" :byteLimit="6" byteCount>
          </basic-input>
        </a-form-model-item>
      </a-col>
      <a-col :span="formItemSpan">
        <a-form-model-item label="4. 回显只读功能">
          <basic-input v-model="value4" readOnly>
          </basic-input>
        </a-form-model-item>
      </a-col>
      <a-col :span="formItemSpan">
        <a-form-model-item label="5. 一键复制功能">
          <basic-input v-model="value5" copyAll>
          </basic-input>
        </a-form-model-item>
      </a-col>
      <a-col :span="formItemSpan">
        <a-form-model-item label="6. 长数据预览功能（舍弃）">
          <a-tooltip>
            <template #title >
              {{ value6 }}
            </template>
            <basic-input v-model="value6" readOnly>
            </basic-input>
            <p>说明：目前想到的解决方案是加tooltip，但认为这是个可以分出来的功能，没必要封装在input内；如果有其他解决方案可以再考虑封装在组件内部。</p>
          </a-tooltip>
        </a-form-model-item>
      </a-col>
      <a-col :span="formItemSpan">
        <a-form-model-item label="7. 预格式化展示————手机号mobile">
          <basic-input v-model="value71" type="mobile" placeholder="xxx xxxx xxxx" allowClear>
          </basic-input>
          <p>说明：预格式化只负责格式控制，不负责校验等功能。这里拿手机号举例，具体格式将在下面展示。</p>
        </a-form-model-item>
      </a-col>
      <a-col :span="formItemSpan">
        <a-form-model-item label="8. 提示输入内容（舍弃）">
          <a-input ref="userNameInput" v-model="value8" placeholder="Basic usage">
          <a-icon slot="prefix" type="lock" />
          <a-tooltip slot="suffix" title="Tips:The password must be 15-30 characters long" trigger="click">
            <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
          </a-tooltip>
        </a-input>
        </a-form-model-item>
      </a-col>
    </a-form-model>
  </a-row>
  <br>
  <a-row :gutter="24">
    <h1 style="font-weight:bold">预格式化展示</h1>
    <a-form-model>
      <a-col :span="formItemSpan">
        <a-form-model-item label="7-2. 预格式化展示————电话号tel">
          <basic-input v-model="value72" type="tel">
          </basic-input>
          <p>说明：预格式化只负责格式控制，不负责校验等功能。电话号是横线分割</p>
        </a-form-model-item>
      </a-col>
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
      <a-col :span="formItemSpan">
        <a-form-model-item label="00">
          <label for="start">Start month:</label>
          <input type="month" id="start" name="start" min="2018-03" value="2018-05">
          <a-input type.native="month">
          </a-input>
        </a-form-model-item>
      </a-col>
    </a-form-model>
  </a-row>
  <a-row :gutter="24">
    <h1 style="font-weight:bold">其他</h1>
    <a-form-model>
      <a-col :span="formItemSpan">
        <a-form-model-item label="预格式化展示">
          <a-input-group compact>
            <a-input style=" width: 55px; text-align: center" placeholder="xxx" />
            <basic-input placeholder="-" style="width: 30px; border-left: 0; pointer-events: none;"></basic-input>
            <a-input style="width: 85px; text-align: center; border-left: 0" placeholder="xxxxxxxxxxx" />
          </a-input-group>
        </a-form-model-item>
      </a-col>
      <a-col :span="formItemSpan">
        <a-form-model-item label="自定义指令作用于原生input上">
          <input v-numberOnly placeholder="Number Only">
        </a-form-model-item>
      </a-col>
      <a-col :span="formItemSpan">
        <a-form-model-item label="uu">
          <a-textarea placeholder="textarea with clear icon" allow-clear @change="onChange" />
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
      value6: '哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼哦吼吼',
      value71: '',
      value72: '',
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
            e.value = e.value.replace(/\D+/, '') //删掉所有不是数字的
          }
          e.addEventListener('input', e.handler)
        },
        unbind: function(e) {
          e.removeEventListener('input', e.handler)
        }
      }
    },
  components: {
    'basic-input': () => import('/components/form/BasicInput.vue')
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
p {
  font-size: 12px;
  line-height:20px;
}
</style>