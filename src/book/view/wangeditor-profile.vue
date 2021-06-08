<template>
  <div>
    <a-card class="book-card" title="Detail Information" :headStyle='headStyle'>
      <template #extra>
        <a-icon type="left-square" style="fontSize:1.3em" @click="backClick"/>
      </template>
      <a-descriptions :column="1">
        <a-descriptions-item label="姓名">
          <h1>{{ data.name }}</h1>
        </a-descriptions-item>
        <a-descriptions-item label="年龄">
          <h1>{{ data.age }}</h1>
        </a-descriptions-item>
        <a-descriptions-item label="性别">
          <h1>{{ data.gender }}</h1>
        </a-descriptions-item>
        <a-descriptions-item label="班级">
          <h1>{{ data.major }}</h1>
        </a-descriptions-item>
    </a-descriptions>
    </a-card>
  </div>
</template>

<script>
import api from '../api.js'
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      data: {},
      headStyle: { 'font-weight': 'bold' }
    }
  },
  created() {
    this.fetchStudentInfo();
  },
  methods: {
    fetchStudentInfo () {
      api.getStudentById(this.id).then((res) => {
        console.log('res', res)
        this.data = res 
        // this.pagination.total = res.total;
        // this.list = res.list
        // this.$router.push('list');
      }).catch((err) => {
        console.log(err)
      })
    },
    backClick () {
      this.$router.push('/book/wangeditor')
    },
    addClick () {
      this.$router.push('/book/wangeditor/add')
    }
  }
  }
</script>

<style scoped>
.book-card {
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
