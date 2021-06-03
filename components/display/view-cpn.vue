<template>
  <div class="statusLayout">
    <a-spin tip="Loading..." :spinning="viewSpinning" v-if="isView">
      <slot>
        <!-- <div class="spin-content"> -->
          <a-skeleton active :paragraph="{ rows: 4 }" />
        <!-- </div> -->
      </slot>
      <!-- <a-button 
        slot="indicator" 
        @click="cancel" 
        size="large" 
        style="font-size: 12px" 
        class="spinBtn" 
        type="primary">Cancel</a-button> -->
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
      <!-- <a-button 
      slot="indicator" 
      @click="cancel" 
      size="large" 
      style="font-size: 12px" 
      class="spinBtn" 
      type="primary">Cancel</a-button> -->
    </a-spin>
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