<template>
  <a-input
    ref="input"
    v-bind="$attrs"
    :value="text"
    class="captcha-input"
    v-on="$options.omit(['change'],$listeners)"
    @change="e => $emit('change', e.target.value)"
  >
    <!-- slot继承 -->
    <template
      v-for="(_, slot) of $scopedSlots"
      #[slot]="scope"
    >
      <slot
        :name="slot"
        v-bind="scope"
      />
    </template>
    <a-spin
      slot="suffix"
      :spinning="spinning"
      class="captcha"
    >
      <img
        :src="src"
        @click.prevent.self="$emit('refresh')"
      />
    </a-spin>
  </a-input>
</template>

<script>
import $ from '@http';
import { omit } from 'ramda';

export default {
  omit,
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    /**
     * 输入框的值
     */
    value: {
      type: String,
      default: undefined,
    },
    /**
     * 验证码请求地址，可以是 一个后端接口地址
     */
    url: {
      type: String,
      default: '',
    },
  },
  data () {
    return {
      text: null,
      // 地址
      src: '',
      // 加载状态
      spinning: false,
    };
  },
  watch: {
    value: {
      immediate: true,
      handler (val = null) {
        this.text = val;
      },
    },
    url () {
      this.loadCaptche();
    },
  },
  created () {
    this.loadCaptche();
  },
  methods: {
    loadCaptche () {
      //如果loading正在转，则不可以再次点击
      if (!this.spinning) {
        //加载数据，先转起来
        this.spinning = true;

        //看父组件传来的是图片格式 还是 后端接口
        //如果是图片直接渲染就好
        if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(this.url)) {
          this.src = this.url;
          this.spinning = false;
        } 

        //如果是后端接口，则发起请求
        else {
          //如果明确知道返回类型，可以设置为responseType: 'arraybuffer'
          $.get(this.url, {}, { responseType: 'arraybuffer' }).then((res) => {
            
            //后端发过来的数据，如果是base64格式，可以直接赋值渲染
            if (/^data:image\/(png|jpe?g|gif|svg);base64,/.test(res)) {
              this.src = res;
            }
            //如果是ArrayBuffer格式，需要处理
            else if (res instanceof ArrayBuffer) {
              this.src = `data:image/png;base64,${btoa(new Uint8Array(res).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`;
            }
            //如果是Blob格式，需要处理
          }).finally(() => {
            this.spinning = false;
          });
        }
      }
    },
  },
};
</script>

<style lang="less" scoped>
  .captcha-input {
    /deep/ .allow-clear {
      opacity: 0;
    }
    &:hover {
      /deep/ .allow-clear {
          opacity: .3;
        &:hover {
          opacity: .8;
        }
      }
    }
  }
  .ant-input-affix-wrapper, .ant-input-affix-wrapper-lg, .ant-input-affix-wrapper-sm {
    /deep/ .captcha {
      margin-left: 12px;
      min-width: 40px;
      img {
        cursor: pointer;
        border: 1px solid transparent!important;
        border-radius: 0 4px 4px 0;
      }
    }
  }
  .ant-input-affix-wrapper .captcha {
    /deep/ .ant-spin-container {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .ant-input-affix-wrapper .captcha img{
    height: 32px;
  }
  .ant-input-affix-wrapper-lg .captcha img{
    height: 40px;
  }
  .ant-input-affix-wrapper-sm .captcha img{
    height: 24px;
  }
  /deep/ .ant-input-suffix {
    right: 0;
    align-items: center;
    display: inline-flex;
  }

</style>
