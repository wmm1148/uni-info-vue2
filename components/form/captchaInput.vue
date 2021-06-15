<template>
  <div class="captcha-layout">
    <a-input
    :placeholder="placeholder" 
    v-model="inputValue" 
    @change="e => inputValue = e.target.value"
    ref="input"
    :allowClear="allowClear"
    v-bind="$attrs"
    v-if="!deleteInput"
    :size="size"
    :class="size"
    >
      <!-- <template #prefix>
        <slot name="prefix"></slot>
      </template> -->
      <!-- <template #suffix>
        <slot name="suffix"></slot>
      </template> -->
    </a-input>
    <a-spin :spinning="loading" :size="size" :class="size">
      <img :src="captchaPath" @click="captchaClick()" :alt="alt" :class="size" class="captcha-img">
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
    },
    watch: {
      value(newVal) {
        this.inputValue = newVal;
      },
      inputValue(newVal) {
        this.$emit('change', newVal)
      }
    },
    created () {
      this.getCaptcha();
    },
    methods: {
      async getCaptcha() {
        this.loading = true;
        const url= this.url.split("?uuid=")[0];  //获取url
        const data = Qs.parse(this.url.split("?")[1])  //获取参数 进行序列化，这里先单独使用，可以在网络请求里封装下
        try {
          const res = await request({ url, method: 'post', data})();
          setTimeout(() => {
            console.log(res);
            this.captchaPath = res.data;
          }, 2000);
          } finally {
            setTimeout(() => {
              this.loading = false;
            }, 2000);
            
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
.captcha-layout {
  display: inline-flex;
  // width: 300px;
  // height: 100%;
  // background:#dddddd;
}
// .captcha-layout:HOVER{
// -webkit-transition:border linear .2s,-webkit-box-shadow linear .5s;
// border-color:rgba(141,39,142,.75);
// -webkit-box-shadow:0 0 18px rgba(111,1,32,3);
// }
/deep/ .ant-input {
  // width: 120px;
  border-radius: 4px 0 0 4px;
  padding: 4px 11px;
}
.ant-input-affix-wrapper {
  margin-bottom: 1em;
  width: 135px;
}
.ant-spin-nested-loading {
  // width: 60px;
  // margin-top: 1em;
  /deep/ .ant-spin {
    top: -6px;
  }
}
/deep/ .ant-spin-dot {
  margin: 5px;
}
img {
  border-radius: 0 4px 4px 0;
}
.captcha-img {
  width: 60px;
  margin-bottom: 1em;
  height: 32px;
  // max-width: 120px;
}


// .default {
//   width: 60px;
//   margin-bottom: 1em;
//   height: 32px;
//   & /deep/ .ant-input-affix-wrapper {
//     margin-bottom: 1em;
//     width: 135px;
//     /deep/ .ant-input {
//       // width: 120px;
//       border-radius: 4px 0 0 4px;
//       padding: 4px 11px;
//     }
//   }
//   & .ant-spin-nested-loading {
//   // width: 60px;
//   // margin-top: 1em;
//   /deep/ .ant-spin {
//     top: -6px;
//   }
// }
// }

.small {
  width: 48px;
  margin-bottom: 2em;
  height: 24px;
}

.large {
  width: 68px;
  margin-bottom: 2em;
  height: 40px;
  & .ant-spin-nested-loading {
  /deep/ .ant-spin {
    top: -12px;
  }
}
}

</style>