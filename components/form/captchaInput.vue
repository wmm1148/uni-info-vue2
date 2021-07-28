<template>
<!-- 以input框和验证码拼接方式写的验证码，已弃用 -->
  <div class="captcha-layout" :class="$attrs.size">
    <a-input
    v-model="inputValue"
    v-bind="$attrs"
    v-if="!deleteInput"
    :disabled="loading"
    >
      <slot name="prefix" slot="prefix"></slot>
      <slot name="suffix" slot="suffix"></slot>
      <template
      #[slot]="scope"
      v-for="(_,slot) of $scopedSlots"
      >
      <!-- <span :key="slot">{{$scopedSlots}}</span> -->
      <slot v-bind="scope" :name="slot"></slot>
      </template>
    </a-input>
    <a-spin :spinning="loading" v-bind="$attrs" :delay="delay">
      <img :src="captchaPath" @click="captchaClick()" :alt="alt" :class="$attrs.size | imgSize" class="img-captcha" v-bind="$attrs">
      <template slot="indicator">
        <slot name="indicator"></slot>
    </template>
    </a-spin>
  </div>
</template>

<script>
import { request } from '@/network/request.js'
//require是AMD引用方式 import是ES6引用方式
// const Qs = require('qs')
import * as qs from 'qs'

  export default {
    data () {
      return {
        captchaPath: '',
        inputValue: '',
        loading: true,
        delayTime: 2000,
        // indicator: <a-icon type="loading" style="font-size: 24px" spin />,
        // val: `background-image:url(${this.captchaPath})`
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
      alt: {
        type: String,
      },
      deleteInput: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      value: {
        type: String,
        default: undefined,
      },
      method: {
        type: String,
        default: 'get',
      },
      delay: {
        type: Number,
        default: 0,
      }
    },
    watch: {
      value(newVal) {
        this.inputValue = newVal;
      },
      inputValue(newVal) {
        this.$emit('change', newVal)
      },
    },
    
    filters:{
      imgSize(size) {
        // if(!this.deleteInput) {
          return 'img-'+size;
        // }
      },
        },
    created () {
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
          const data = qs.parse(this.url.split("?")[1])  //获取参数 进行序列化，这里先单独使用，可以在网络请求里封装下
          try {
            const res = await request({ url, method: this.method, data})();
            setTimeout(() => {
              console.log(res);
              this.captchaPath = res.data;
            }, 2000);
            } finally {
              setTimeout(() => {
                this.loading = false;
              }, 2000);
              
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
@basicBorder: 1px solid #1890ff;
//公共样式
.captcha-layout {
  display: flex;
}
img {
  border-radius: 0 4px 4px 0;
}
.ant-input-affix-wrapper {
  margin-bottom: 1em;
  height: 100%;
  /deep/ .ant-input {
    border-radius: 4px 0 0 4px;
    // padding: 4px 11px;
  }
}
.ant-spin-nested-loading {
  .img-captcha {
    border: 1px solid #C0C4CC;
    border-left: none;
  }
  .ant-spin-blur {
    .img-captcha {
    border: @basicBorder;
    border-left: none;
    }
  }
}
.captcha-layout:hover {
  .img-captcha {
    border: @basicBorder;
    border-left: none;
  }
  /deep/ .ant-input {
    border: @basicBorder;
  // border: black;
  // border-color: #C0C4CC;
  // border-bottom: 1px solid black !important;
  // box-shadow: none;
    border-right: none;
    // box-shadow: #1890ff;
}
  // /deep/ .ant-input:focus {
  //   box-shadow: none;
  //   /deep/ .img-captcha {
  //     border: @basicBorder;
  //     border-left: none;
  //     // box-shadow: #1890ff;
  //   }
  // }
}

// size为default
.default {
  .ant-input-affix-wrapper {
    width: 135px;
  }
  .ant-spin-nested-loading {
    // width: 60px;
    // margin-top: 1em;
    /deep/ .ant-spin {
      // top: -6px;
      height: 32px;
    }
    // /deep/ .ant-spin-dot {
    // margin: 5px;
    // }
    .img-default {
      width: 60px;
      margin-bottom: 1em;
      height: 32px;
      line-height: 32px;
      // overflow: hidden;
      // white-space: nowrap;
      // text-overflow: ellipsis;
    }
  }
}

// size为small
.small {
  .ant-input-affix-wrapper {
    width: 118px;
    // font-size: 12px;
    /deep/ .ant-input {
      // padding: 1px 7px;
    }
  }
  .ant-spin-nested-loading {
    /deep/ .ant-spin {
      height: 24px;
    }
    .img-small {
      width: 52px;
      margin-bottom: 2em;
      height: 24px;
      line-height: 24px;
      // border: @basicBorder;
    }
  }
  
}

// size为large
.large {
  .ant-input-affix-wrapper {
    width: 180px;
    // font-size: 24px;
    /deep/ .ant-input {
      // padding: 6px 11px;
    }
  }
  .ant-spin-nested-loading {
    /deep/ .ant-spin {
      height: 40px;
    }
    .img-large {
      width: 68px;
      margin-bottom: 0.4em;
      height: 40px;
      line-height: 40px;
      // border: @basicBorder;
    }
  }
}

</style>