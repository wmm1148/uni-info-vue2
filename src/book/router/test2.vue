<template>
  <div>
    <blog-post>
      <template v-slot:header>
        <h1>About Me</h1>
      </template>

      <p>Here's some page content, which will be included in vm.$slots.default, because it's not inside a named slot.</p>

      <template v-slot:footer>
        <p>Copyright 2016 Evan You</p>
      </template>

      <p>If I have some content down here, it will also be included in vm.$slots.default.</p>.
    </blog-post>
  </div>
</template>
  
<script>
import Vue from 'vue';

  Vue.component('anchored-headin', {
    render: function (createElement) {
      return createElement(
        'h' + this.level,   // 标签名称
        this.$slots.default // 子节点数组
      )
    },
    props: {
      level: {
        type: Number,
        required: true
      }
    }
  })

  Vue.component('blog-post', {
  render: function (createElement) {
    console.log('this', this);
    console.log('slots', this.$slots);
    var header = this.$slots.header
    var body   = this.$slots.default
    var footer = this.$slots.footer
    return createElement('div', [
      createElement('header', header),
      createElement('main', body),
      createElement('footer', footer)
    ])
  }
})

export default {
  created() {
    // console.log('slots', this.$slots);
  }
}

</script>

<style lang="less" scoped>

</style>