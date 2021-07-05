<template>
  <a-tooltip>
    <template #title v-if="readOnly">
      {{ value }}
    </template>
    <a-input :value="value" v-bind="$attrs" @change="$emit('change', $event.target.value)" v-bind:readOnly="readOnly" @input="numberCount" ref="input" :class="[{'readOnly': readOnly}]">
      <template v-for="(_, slot) of $scopedSlots" #[slot]="scope" >
          <slot :name="slot" v-bind="scope" />
        </template>
        <template v-for="(_, slot) of $slots" :slot="slot">
          <slot :name="slot"></slot>
        </template>
        <template #addonAfter v-if="copyAll">
          <a-icon type="copy" @click="copyText"/>
        </template>
        <template #suffix v-if="showNumber">
          <span :class="[{'changeNumber': (lengthLimit < enter )}]">
          <!-- <span :class="[ (lengthLimit <= enter ) ? 'changeNumber':'' ]"> -->
            {{ enter }}
          </span>
        </template>
    </a-input>
  </a-tooltip>
</template>

<script>
  export default {
    data() {
      return {
      enter: 0,
      // changeNumber: false
      }
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: String,
      readOnly: {  //这种自定义的必须在prop里写吗
        type: Boolean,
        default: false
      },
      copyAll: {
        type: Boolean,
        default: false
      },
      showNumber: {
        type: Boolean,
        default: false
      },
      lengthLimit: {
        type: Number,
        default:2
      }
    },
    created() {
      // $("#input1").inputlimitor({limit:10});
      // document.querySelector('#input').inputlimitor({limit:10});
      // console.log('attrs', this.$attrs);
      // console.log('value', this.value);
      this.enter = this.value.length;
      console.log('this.enter', this.enter);
      console.log('this.lengthLimit', this.lengthLimit);

    },
    methods: {
      copyText() {
        //document进行选择是整个页面，如果同一个页面也用到这个组件，选中的就不一定是这个input框了，所以要用refs来绑定
        // var copyText = document.querySelector('#input');
        var copyText = this.$refs.input;
        copyText.select();
        document.execCommand("copy");
        this.$message.success('复制成功！');
      },
      numberCount(event) {
        // var txtVal = event.target.value.length;
        this.enter = event.target.value.length;
        console.log('this.enter', this.enter);
        console.log('this.lengthLimit', this.lengthLimit);
      },
    }
  }
</script>

<style lang="less" scoped>
/deep/ .ant-input-affix-wrapper {
  // border: 1px solid gray !important;
  // border: none;
  /deep/ .ant-input:hover {
  border: 1px solid #C0C4CC !important;
  // border: none;
  box-shadow: none;
  // border-color: #C0C4CC;
  // cursor:pointer;
}
  .ant-input:focus {
  // border: 1px solid gray !important;
  box-shadow: none;
  border-color: #C0C4CC;
}
}
.readOnly {
  /deep/ .ant-input {
    overflow:hidden; 
    white-space:nowrap; 
    text-overflow:ellipsis;
  }
}
.changeNumber {
  color: red
}

</style>