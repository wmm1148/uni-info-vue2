<template>
  <a-input :value="value" v-bind="$attrs" @change="$emit('change', $event.target.value)" v-bind:readOnly="readOnly" id="input">
    <template v-for="(_, slot) of $scopedSlots" #[slot]="scope" >
        <slot :name="slot" v-bind="scope" />
      </template>
      <template v-for="(_, slot) of $slots" :slot="slot">
        <slot :name="slot"></slot>
      </template>
      <template #addonAfter>
        <a-icon type="copy" @click="copyText"/>
      </template>
  </a-input>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: String,
      readOnly: {
        type: Boolean,
        default: false
      }
    },
    created() {
      // $("#input1").inputlimitor({limit:10});
      // document.querySelector('#input').inputlimitor({limit:10});
    },
    methods: {
      copyText() {
        // console.log('ref', this.$refs.input);
        // const copyText = this.value;
        // copyText.select();
        
        var copyText = document.querySelector('#input');
        console.log('copyText', copyText);
        copyText.select();
        document.execCommand("copy");
      }
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

</style>