<template>
<!-- 有改动的版本 -->
  <div class="captcha-layout" :class="size">
    <a-input
    :placeholder="placeholder" 
    v-model="inputValue" 
    ref="input"
    :allowClear="allowClear"
    v-bind="$attrs"
    v-if="!deleteInput"
    :size="size"
    :disabled="loading"
    >
      <slot name="prefix" slot="prefix"></slot>
      <slot name="suffix" slot="suffix"></slot>
      <template
      #[slot]="scope"
      v-for="(_,slot) of $scopedSlots"
      >
      <span :key="slot">{{$scopedSlots}}</span>
      <slot v-bind="scope" :name="slot"></slot>
      </template>
    </a-input>
    <a-spin :spinning="loading" :size="size" :delay="delay">
      <img :src="captchaPath" @click="captchaClick()" :alt="alt" :class="size | imgSize" class="img-captcha">
    </a-spin>
  </div>
</template>

<script>
import { request } from '@/network/request.js'
const Qs = require('qs')

  export default {
    data () {
      return {
        captchaPath: '',
        inputValue: '',
        loading: true,
        delayTime: 2000,
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
      size: {
        type: String,
        default: 'default',
      },
      allowClear: {
        type: Boolean,
        default: false,
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
      placeholder: {
        type: String,
        default: 'Please input',
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
          return 'img-'+size;
      },
        },
    created () {
      console.log('$$$$$$$$$$$$$$$$$', this.$scopedSlots);
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
//公共样式
.captcha-layout {
  display: flex;
  // border:1px solid #fea91d;
  // box-shadow: 12px 12px 2px black;
  // box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); // 浮层阴影
}
img {
  border-radius: 0 4px 4px 0;
}
.ant-input-affix-wrapper {
  margin-bottom: 1em;
  height: 100%;
  // border-color:#fea91d;
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
    border: 1px solid #1890ff;
    border-left: none;
    }
  }
}
.captcha-layout:hover {
  .img-captcha {
    border: 1px solid #1890ff;
    border-left: none;
  }
  /deep/ .ant-input {
    border: 1px solid #1890ff;
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
  //     border: 1px solid #1890ff;
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
      // border: 1px solid #1890ff;
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
      // border: 1px solid #1890ff;
    }
  }
}

</style>