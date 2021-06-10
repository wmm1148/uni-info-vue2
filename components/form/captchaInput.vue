<template>
  <div class="captcha-layout">
    <a-input :placeholder="placeholder" v-model="inputValue">
      <a-icon slot="prefix" type="safety" />
    </a-input>
    <!-- <a-spin> -->
      <img :src="captchaPath" @click="getCaptcha()" alt="hold on">
    <!-- </a-spin> -->
    <!-- <img :src="captchaPath" @click="getCaptcha()" alt="hold on"> -->
  </div>
</template>

<script>
import { request } from '@/network/request.js'

  export default {
    data () {
      return {
        captchaPath: '',
        inputValue: ''
      }
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
        console.log('newVal', newVal);
        this.inputValue = newVal;
      }
    },
    created () {
      this.getCaptcha();
    },
    methods: {
      getCaptcha() {
        const { url } = this;
        const fetch = request({ url, method: 'get'})();
        // console.log('fetch', fetch);

        fetch.then((res) => {
          this.captchaPath = res.data;
        }).catch((err) => {
          console.log('err', err);
        })
    },

    }
  }
</script>

<style lang="less" scoped>
.captcha-layout {
  display: inline-block;
  width: 300px;
  // height: 100%;
  // background:#dddddd;
}
.ant-input-affix-wrapper {
  width: 135px;
}
.ant-spin-nested-loading {
  width: 120px;
}
img {
    border-radius: 0 4px 4px 0;
    // margin-bottom: 0.1em;   //放大样式就有问题
    margin-bottom: 0.14em;
    // width: 80px;
  }
/deep/ .ant-input {
  // width: 120px;
  border-radius: 4px 0 0 4px;
  // border-radius: 0;
  padding: 0;
}

</style>