<template>
  <a-select style="width: 120px" v-bind="$attrs">
    <template v-for="(_, slot) of $scopedSlots" #[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
    <template v-for="(_, slot) of $slots" :slot="slot">
      <slot :name="slot"></slot>
    </template>
    <a-select-option :key="item[valueOf]" :value="item[valueOf]" v-for="item in dataSource">
      {{ item[labelOf] }}
    </a-select-option>
  </a-select>
</template>

<script>
  export default {
    props: {
      valueOf: {
        type: String,
        default: 'id'
      },
      labelOf: {
        type: String,
        default: 'name'
      },
      dataSource: {
        type: Array,
        default: () => {},
      },
      url: {
        type: String,
        // required: true,
      },
    },
    created() {
      console.log('dataSource', this.dataSource);
    }
  }
</script>

<style lang="less" scoped>

</style>