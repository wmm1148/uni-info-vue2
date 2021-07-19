<template>
<!-- 以第二种方式写的验证码 ———— 交互更舒服一点 -->
  <div>
    <a-spin :spinning="loading" :class="size" v-bind="$attrs" v-if="!CaptchaOnly">
      <a-input v-bind="$attrs" :value="value" @change="$emit('change', $event.target.value)" v-if="!CaptchaOnly">
        <template #suffix>
          <img :src="captchaPath" @click="getCaptcha"/>
        </template>
        <template v-for="(_, slot) of $options.omit(['suffix'],$scopedSlots)" #[slot]="scope" >
          <slot :name="slot" v-bind="scope" />
        </template>
        <template v-for="(_, slot) of $slots" :slot="slot">
          <slot :name="slot"></slot>
        </template>
      </a-input>
      <template slot="indicator">
        <slot name="indicator"></slot>
      </template>
    </a-spin>
    <div class="testDiv" v-if="CaptchaOnly">
      <a-spin class="imgOnly" :spinning="loading" >
        <img :src="captchaPath" @click="getCaptcha"/>
      </a-spin>
    </div>
  </div>
</template>

<script>
import { omit } from 'ramda';
import { request } from '@/network/request.js'
// const Qs = require('qs')
import qs from 'qs'
  export default {
    inheritAttrs: false,
    omit,
    data() {
      return {
        loading: false,
        captchaPath: '',
        size: 'default',
        // indicator: <a-icon type="loading" style="font-size: 24px" spin />,
      }
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      url: {
        type: String,
        required: true,
      },
      method: {
        type: String,
        default: 'get',
      },
      value: String,
      CaptchaOnly: {
        type: Boolean,
        default: false
      }
    },
    created () {
      this.size = this.$attrs.size ? this.$attrs.size : 'default';
      this.getCaptcha();
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
            const data = qs.parse(this.url.split("?")[1])  //获取参数 进行序列化，这里先单独使用，可以在网络请求里封装下
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

.default img {
  height:32px;
}

.small img {
  height: 24px;
}

.large img {
  height: 40px;
}
.testDiv {
  // height: 24px;
  width: 48px;
  .imgOnly img {
    height: 24px;
  }
}
</style>