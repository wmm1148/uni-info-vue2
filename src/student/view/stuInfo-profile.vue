<template>
  <div>
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
  }
  }
</script>
