<template>
  <div class="layout">
    <basic-card class="basic-card" title="Form2">
      <form2></form2>
    </basic-card>
    <basic-card title="Form1">
      <form1></form1>
    </basic-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formItemSpan: 12,
      headStyle: { 'font-weight': 'bold' },
      captchaValue: '',
      uuid: '12345'
    }
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    }
    },
  components: {
    'basic-card': () => import('/components/common/BasicCard.vue'),
    'form1': () => import('@/home/view/components/form1'),
    'form2': () => import('@/home/view/components/form2')

  },
  methods: {
    backClick () {
      this.$router.push('/stu/stuInfo/')
    },
    addClick () {
      this.$router.push('/stu/stuInfo/add')
    },
    handleOk() {
      console.log('captchaValue', this.captchaValue);
    },
    handleCancel() {
    this.$emit('update:visible', false);
    }
  },
}
</script>

<style scoped>
.layout {
  display: flex;
  width: 48;
}
</style>