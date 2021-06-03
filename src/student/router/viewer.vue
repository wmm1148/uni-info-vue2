<template>
  <div>
    <a-card class="stu-card" title="View Component" :headStyle='headStyle'>
      <view-cpn :status.sync="status">
        <h1>ahhhhhhhhhhhh</h1>
      </view-cpn>
      <a-radio-group class="radio-group" v-if="status === 'init'">
        <a-radio-button value="loading" @click="loadingClick">
          Loading
        </a-radio-button>
      </a-radio-group>
      <a-radio-group class="radio-group" v-if="status === 'loading'" :value="status">
        <h1>Loading的结果：</h1>
        <a-radio-button value="empty" @click="emptyClick">
          Empty
        </a-radio-button>
        <a-radio-button value="error" @click="errorClick">
          Error
        </a-radio-button>
        <a-radio-button value="cancel" @click="emptyClick">
          Cancel
        </a-radio-button>
        <a-radio-button value="view" @click="viewClick">
          View
        </a-radio-button>
      </a-radio-group>
    </a-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        headStyle: { 'font-weight': 'bold' },
        status: 'init',
      }
  },
    components: {
      'view-cpn': () => import('/components/display/view-cpn.vue')
    },
    methods: {
      initClick () {
      this.status = 'init'
      },
      loadingClick () {
      this.status = 'loading'
      },
      emptyClick () {
      this.status = 'empty'
      },
      errorClick () {
        this.status = 'error'
      },
      viewClick () {
      this.status = 'view'
      },
    },
    created () {
      window.status = this.status;
    }
  }
</script>

<style lang="less" scoped>
.stu-card {
  /* display: inline; */
    background: #feffff;
    width: 98%;
    margin: 12px auto;
    /* height: 100%; */
    height: 460px;
    text-align: left;
}
.radio-group {
  margin: 30px;

}
.ant-card-body {
  padding: 0 24px 24px 24px;
}
</style>