<template>
  <a-spin :spinning="loading" :class="size" :size="size" v-bind="$attrs" :indicator="indicator">
    <a-input v-bind="$attrs" :size="size" :value="value" @change="$emit('input', $event.target.value)">
      <template #suffix>
        <img :src="captchaPath" @click="getCaptcha"/>
      </template>
      <!-- hh -->
      <template
        v-for="(_, slot) of $options.omit(['suffix'],$scopedSlots)"
        #[slot]="scope"
      >
        <slot
          :name="slot"
          v-bind="scope"
        />
      </template>
    </a-input>
  </a-spin>
</template>

<script>
import { omit } from 'ramda';
import { request } from '@/network/request.js'
const Qs = require('qs')
  export default {
    inheritAttrs: false,
    omit,
    data() {
      return {
        loading: false,
        captchaPath: '',
        inputValue: '',
        indicator: <a-icon type="loading" style="font-size: 24px" spin />,
      }
    },
    // model: {
    //   prop: 'value',
    //   event: 'change'
    // },
    props: {
      url: {
        type: String,
        required: true,
      },
      method: {
        type: String,
        default: 'get',
      },
      size: {
        type: String,
        default: 'default',
      },
      value: String,
    },
    watch: {
      // value(newVal) {
      //   this.inputValue = newVal;
      // },
      // inputValue(newVal) {
      //   this.$emit('change', newVal)
      // },
    },
    created () {
      console.log('captchaValue', this.captchaValue);
      this.getCaptcha();
      console.log('this.$attrs', this.$attrs);
    },
    methods: {
      async getCaptcha() {
        if (!this.loading) {
          this.loading = true;
          if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(this.url)) {
            this.captchaPath = this.url;
            this.loading = false;
          }
          else {
            //无论是get还是post这里都使用query的传参方式
            const url= this.url.split("?")[0];  //获取url
            const data = Qs.parse(this.url.split("?")[1])  //获取参数 进行序列化，这里先单独使用，可以在网络请求里封装下
            try {
              const res = await request({ url, method: this.method, data})();
              //如果发过来的是图片直接渲染
              if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(res)) {
                this.captchaPath = res.data;
              } 
              //后端发过来的数据，如果是base64格式，可以直接赋值渲染
              else if (/^data:image\/(png|jpe?g|gif|svg);base64,/.test(res)) {
                this.captchaPath = res.data;
              }
              //如果是ArrayBuffer格式，需要处理
              else if (res instanceof ArrayBuffer) {
                this.captchaPath = `data:image/png;base64,${btoa(new Uint8Array(res).reduce((data, byte) => data + String.fromCharCode(byte), ''))}`;
              }
              //如果是Blob格式，需要处理

              //如果都不是(这里是因为mock直接返回链接，直接渲染，走的这)
              else {
                setTimeout(() => {
                  this.captchaPath = res.data;
                }, 2000);
              }
            } 
            finally {
              setTimeout(() => {
                  this.loading = false;
                }, 2000);
            }
          }
        }
      }
    }
    
  }
</script>

<style lang="less" scoped>
/deep/ .ant-input-suffix{
  right: 0px;
  .ant-input-clear-icon {
    padding-right: 4px;
  }
}
img {
  border-radius: 0 4px 4px 0;
}

.default {
  img {
    height:32px;
  }
}

.small {
  img {
    height: 24px;
    }
}

.large {
  img {
    height: 40px;
    }
}
</style>