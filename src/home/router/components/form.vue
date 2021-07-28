<template>
  <div class="form-layout">
    <basic-card class="basic-card" title="Input">
      <form3></form3>
    </basic-card>
    <basic-card class="basic-card" title="Captcha By Way2">
      <form2></form2>
    </basic-card>
    <!-- <basic-card title="Captcha By Way3 - Delete">
      <form1></form1> 
    </basic-card>-->
    
  </div>
</template>

<script>
export default {
  data () {
    return {
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
    // 'form1': () => import('@/home/view/components/form1'),
    'form2': () => import('@/home/view/components/form2'),
    'form3': () => import('@/home/view/components/form3')

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

<style lang="less" scoped>
.form-layout {
  display: flex;
  .basic-card {
    width: 30%;
  }
}
</style>