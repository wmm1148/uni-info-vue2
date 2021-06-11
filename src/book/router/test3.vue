<template>
  <test>
    <div slot="header">slot: header</div>
    <div slot-scope="scope">slot: {{scope}}</div>
    <div slot="footer">slot: footer</div>
  </test>
</template>

<script>
import Test from './test4.vue'
export default {
  components: {
    Test
  }
}
</script>