<template>
  <div>
    <h1>{{ id }}</h1>
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
    }
  },
  created() {
    this.fetchStudentInfo();
  },
  methods: {
    fetchStudentInfo () {
      api.getStudentById(this.id).then((res) => {
        console.log('res', res)
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
