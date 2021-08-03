<template>
  <a-select 
    style="width: 120px" 
    v-bind="$attrs" 
    @blur="blur" 
    @change="change" 
    @focus="focus" 
    @search="search" 
    @click.native="click">
    <template 
      v-for="(_, slot) of $scopedSlots" 
      #[slot]="scope">
      <slot :name="slot" v-bind="scope" />
    </template>
    <template 
      v-for="(_, slot) of $slots" 
      :slot="slot">
      <slot :name="slot"></slot>
    </template>
    <a-select-option 
      :key="item[valueOf]" 
      :value="item[valueOf]" 
      v-for="item in data">
      {{ item[labelOf] }}
    </a-select-option>
  </a-select>
</template>

<script>
import { request } from '@/network/request.js'
// import * as qs from 'qs'

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
      delay: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        data: [],
      }
    },
    beforeMount() {
      this.data = this.dataSource;
    },
    created() {
      // this.data = this.dataSource;
      // this.data = this.dataSource ? this.dataSource : [];
      if(this.dataSource) {
        for(let i = 0; i < this.dataSource.length; i++) {
          this.data.push(this.dataSource[i]);
        }
      } else {
        // console.log('fetch');
        // this.fetch();
      }
      console.log('data', this.data);
    },
    methods: {
      async fetch() {
        // const url= this.url.split("?")[0];
        // const data = qs.parse(this.url.split("?")[1])
        try {
          const res = await request({ url: this.url })();
          setTimeout(() => {
            this.data = res.data;
          }, 2000);
          } finally {
            setTimeout(() => {
              this.loading = false;
            }, 2000);
            
          }
      },

      blur() {
        // console.log('blur');
      },

      change() {
        console.log('change');
      },

      focus() {
        this.fetch()
      },

      search() {
        console.log('search');
      },

      click () {
        console.log('click');
      }
    }
  }
</script>

<style lang="less" scoped>

</style>