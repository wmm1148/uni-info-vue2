<template>
  <div>
    <a-card class="stu-card" title="Add/Edit Information" :headStyle='headStyle'>
      <template #extra>
        <a-icon type="left-square" style="fontSize:1.3em" @click="backClick"/>
      </template>
      <a-form-model>
        <a-form-model-item label="姓名">
          <a-input />
        </a-form-model-item>
        <a-form-model-item label="年龄">
          <a-input />
        </a-form-model-item>
        <a-form-model-item label="性别">
          <a-input />
        </a-form-model-item>
        <a-form-model-item label="专业">
          <a-input />
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headStyle: { 'font-weight': 'bold' }
    }
  },
  components: {
  },
  methods: {
    backClick () {
      this.$router.push('/stu/stuInfo/')
    },
    addClick () {
      this.$router.push('/stu/stuInfo/add')
    }
  },
}
</script>

<style scoped>
.stu-card {
  /* display: inline; */
    background: #feffff;
    width: 98%;
    margin: 12px auto;
    /* height: 100%; */
    height: auto;
    text-align: left;
}
.ant-card-body {
  padding: 0 24px 24px 24px;
}
</style>