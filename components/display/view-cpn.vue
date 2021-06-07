<template>
  <div class="statusLayout">
    <!-- <slot name="init">
      <h1>inittttttttttttttttttttttttttt</h1>
    </slot>
    <slot name="loading">
      <h1>loadingggggggggg</h1>
    </slot>
    <slot name="error">
      <h1>errorrrrrrrrrrrrrrrrrr</h1>
    </slot> -->
    <a-spin tip="Loading..." :spinning="viewSpinning" v-if="isView">
      <slot>
        <!-- <div class="spin-content"> -->
          <a-skeleton active :paragraph="{ rows: 4 }" />
        <!-- </div> -->
      </slot>
    </a-spin>
    <a-spin tip="Loading..." :spinning="extraSpinning" v-else class="statusLayout">
      <a-skeleton active :paragraph="{ rows: 4 }" v-if="val === 'init'" />
      <a-empty v-if="val === 'empty'">
        <a-button type="primary" @click="reload">
          Reload
        </a-button>
      </a-empty>
      <a-result 
      status="warning"
      title="There are some problems with your operation." 
      v-if="val === 'error'">
        <template #extra>
          <a-button type="primary" @click="reload">
            Reload
          </a-button>
        </template>
      </a-result>
    </a-spin>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        spinning: false,
        viewSpinning: false,
        extraSpinning: false,
        val: 'init',
        isView: false,
        refresh: false
      }
    },
    props: {
      status: {
        // type: Object,
        type: String,
        default: () => {},
      }
    },
    watch: {
      status (newVal, oldVal) {
        console.log('newVal,', newVal);
        if(newVal === 'loading') {
          if(oldVal === 'view') {
            this.isView = true
            this.viewSpinning = true
          }
          else {
            this.val = 'init',
            this.extraSpinning = true
          }
        }
        else if (newVal === 'view') {
          this.$emit('update:refresh', true)
          this.isView = true
          this.val = newVal
          this.viewSpinning = false
        }
        else {
          this.val = newVal
          this.isView = false
          this.viewSpinning = false
          this.extraSpinning = false
        }
      }
    },
    created () {
      console.log('status',this.status);
    },
    methods: {
      reload () {
        this.$emit('update:status', 'loading')
        this.val = 'init',
        this.extraSpinning = true
      },
    }
  }
</script>

<style lang="less" scoped>
.statusLayout {
  width: 100%;
  height: 240px;
}
/deep/ .spinBtn {
// /deep/ .ant-btn {
  width: 80px;
  height: 25px;
  margin-left: -40px;
}
</style>