<template>
  <div class="captcha-layout">
    <a-input
    :placeholder="placeholder" 
    v-model="inputValue" 
    @change="e => inputValue = e.target.value"
    >
      <template #prefix>
        <slot name="prefix"></slot>
      </template>
    </a-input>
    <a-spin :spinning="loading">
      <img :src="captchaPath" @click="getCaptcha()" alt="hold on" class="captcha-img">
      <!-- <div class="captcha" :style="val"></div> -->
    </a-spin>
  </div>
</template>

<script>
import { request } from '@/network/request.js'

  export default {
    data () {
      return {
        captchaPath: '',
        inputValue: '',
        loading: false,
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
      console.log('value', this.value);
      this.loading = true;
      this.getCaptcha();
      console.log('listeners', this.$listeners);
    },
    methods: {
      getCaptcha() {
        const { url } = this;
        const fetch = request({ url, method: 'get'})();
        // console.log('fetch', fetch);

        fetch.then((res) => {
          this.captchaPath = res.data;
          this.loading = false;
        }).catch((err) => {
          console.log('err', err);
        })
      },
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
.ant-input-affix-wrapper {
  width: 135px;
}
.ant-spin-nested-loading {
  width: 55px;
}
img {
    border-radius: 0 4px 4px 0;
    // margin-bottom: 0.1em;   //放大样式就有问题
    // margin-bottom: 0.14em;
  }
/deep/ .ant-input {
  // width: 120px;
  border-radius: 4px 0 0 4px;
  // border-radius: 0;
  padding: 0;
}
.captcha-img {
  width: 60px;
  // height: 32px;
  // max-width: 60px;
  // height: auto;
}
.captcha {
  width: 90px;
  height: 32px;
  // background-color: red;
  //background: url({{ captchaPath }}) no-repeat;  //此时captchaPath中是路径
}
</style>