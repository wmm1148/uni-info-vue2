<template>
  <div>
    <a-spin :spinning="loading">
      <a-input>
        <template #suffix>
          <img :src="captchaPath" @click="captchaClick"/>
        </template>
      </a-input>
    </a-spin>
  </div>
</template>

<script>
import { request } from '@/network/request.js'
const Qs = require('qs')
  export default {
    data() {
      return {
        loading: false,
        captchaPath: '',
      }
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
      captchaValue: {
        type: String,
      }
    },
    created () {
      console.log('url', this.url);
      this.getCaptcha();
    },
    methods: {
      async getCaptcha() {
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

            //如果都不是
            else {
              this.captchaPath = res.data;
              console.log('hhhhhh');
            }
          } 
          finally {
          this.loading = false;
          }
        }
      },
      captchaClick () {
        this.loading = true;
        this.getCaptcha();
      }
    }
    
  }
</script>

<style lang="less" scoped>
img {
  height:32px;
  border-radius: 0 4px 4px 0;
}
/deep/ .ant-input {
  // padding: 0;
}
/deep/ .ant-input-suffix{
  right: 0px;
}
</style>