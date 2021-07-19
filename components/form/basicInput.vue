<template>
  <!-- <a-tooltip>
    <template #title v-if="true">
      {{ value }}
    </template> -->
    <a-input
      :value="value"
      v-bind="$attrs"
      @change="$emit('change', $event.target.value)"
      v-bind:readOnly="readOnly"
      @input="numberCount"
      ref="input"
      :class="[{ readOnly: readOnly }]"
      :maxLength="innerMaxLength"
    >
      <template v-for="(_, slot) of $scopedSlots" #[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
      <template v-for="(_, slot) of $slots" :slot="slot">
        <slot :name="slot"></slot>
      </template>
      <template #addonAfter v-if="copyAll">
        <a-icon type="copy" @click="copyText" />
      </template>
      <template #suffix v-if="count">
        <!-- 显示的数据还没修改 -->
        <!-- <span :class="[{ changeNumber: lengthLimit <= enter }]" v-if="innerMaxLength"> -->
        <span :class="[{ changeNumber: innerMaxLength <= enter }]"  v-if="innerMaxLength">
          {{ enter + '/' + innerMaxLength}}
        </span>
        <span :class="[{ changeNumber: innerMaxLength <= enter }]" v-else>
          {{ enter }}
        </span>
      </template>
      <template #suffix v-else-if="byteCount">
        <span :class="[{ changeNumber: byteLimit <= byteNumber }]"  v-if="byteLimit">
          {{ byteNumber + '/' + byteLimit}}
        </span>
        <span :class="[{ changeNumber: byteLimit <= byteNumber }]" v-else>
          {{ byteNumber }}
        </span>
      </template>
    </a-input>
  <!-- </a-tooltip> -->
</template>

<script>
export default {
  data() {
    return {
      enter: 0,
      byteNumber: 0,
      innerMaxLength: 0,
    }
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    value: String,
    readOnly: {
      //这种自定义的必须在prop里写吗??
      type: Boolean,
      default: false,
    },
    copyAll: {
      type: Boolean,
      default: false,
    },
    count: {
      type: Boolean,
      default: false,
    },
    byteCount: {
      type: Boolean,
      default: false,
    },
    delimiter: {
      type: String,
      default: ' ',
    },
    // 忘了lengthLimit是干啥的
    // lengthLimit: {
    //   type: Number,
    // },
    byteLimit: {
      type: Number,
    },
  },
  watch: { //监听只能处理手动输入的情况
    value(newValue, oldValue) {
      if (this.$attrs.type === 'mobile') {
        console.log('newValue.length', newValue.length);
        if (newValue.length > oldValue.length) {
          // 文本框中输入
          if (newValue.length === 3 || newValue.length === 8) {
            var insertTemp = this.value + this.delimiter;
            this.$emit('change', insertTemp);
          }
        } else {
          // 文本框中删除
          if (newValue.length === 9 || newValue.length === 4) {
            var delTemp = this.value.trim(); //如果不是空格应该就用不了trim
            this.$emit('change', delTemp);
          }
        }
      }
    },
  },
  created() {
    // $("#input1").inputlimitor({limit:10});
    // document.querySelector('#input').inputlimitor({limit:10});
    console.log('this.value', this.value);
    this.enter = this.value ? this.value.length : 0;
    this.innerMaxLength = this.$attrs.type === 'mobile' ? 13 : this.$attrs.maxLength
    // this.innerMaxLength = this.byteLimit ? this.byteLimit : (this.$attrs.type === 'mobile' ? 13 : this.$attrs.maxLength)
    // console.log('this.innerMaxLength', this.innerMaxLength);
  },
  methods: {
    copyText() {
      //document进行选择是整个页面，如果同一个页面也用到这个组件，选中的就不一定是这个input框了，所以要用refs来绑定
      // var copyText = document.querySelector('#input');
      var copyText = this.$refs.input
      copyText.select()
      document.execCommand('copy')
      this.$message.success('复制成功！')
    },
    numberCount(event) {
      console.log('event.target.value.length', event.target.value.length);
      this.enter = event.target.value.length
      // this.WidthCheckTest(event.target.value, this.byteLimit)
    },
    WidthCheckTest(str, maxLen) {
      this.byteNumber = 0;
      //length 获取字数数，不区分汉子和英文
      for (var i = 0; i < str.length; i++) {
        //charCodeAt()获取字符串中某一个字符的编码
        var code = str.charCodeAt(i)
        //单字节加1
        if (
          (code >= 0x0001 && code <= 0x007e) ||
          (0xff60 <= code && code <= 0xff9f)
        ) {
          // if((this.byteNumber - this.innerMaxLength) === 1)
        } else {
          // this.byteNumber += 2
          if((this.byteNumber += 2) >= this.byteLimit) {
            this.innerMaxLength = this.enter;
          }
        }
        if (this.byteNumber > maxLen) {
          str = str.substr(0, i)
          break
        }
      }
      // console.log('this.byteNumber', this.byteNumber)
      this.enter = this.byteNumber;
      if(this.byteNumber >= this.byteLimit) {
        this.innerMaxLength = this.enter;
      }
    },
  },
}
</script>

<style lang="less" scoped>
@border-base: 1px solid #d9d9d9;
.readOnly {
  border: @border-base;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.readOnly:hover {
  border: @border-base;
}
.readOnly:focus {
  border: @border-base;
  box-shadow: none;
  border-color: #c0c4cc;
  }
// .readOnly {
//   /deep/ .ant-input {
//     overflow: hidden;
//     white-space: nowrap;
//     text-overflow: ellipsis;
//   }
// }
.changeNumber {
  color: red;
}
</style>
