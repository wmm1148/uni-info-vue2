<template>
  <div>
    <a-card class="book-card" title="Add/Edit Information" :headStyle='headStyle'>
      <template #extra>
        <a-icon type="left-square" style="fontSize:1.3em" @click="backClick"/>
      </template>
      <a-row :gutter="24">
        <a-form-model 
        >
          <a-col :span="12">
            <a-form-model-item label="Name">
              <a-input />
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="Age">
              <a-input />
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="Gender">
              <a-input />
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="Major">
              <a-input />
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item label="Status">
              <a-input />
            </a-form-model-item>
          </a-col>
        </a-form-model>
      </a-row>
    </a-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headStyle: { 'font-weight': 'bold' },
    }
  },
  components: {
  },
  methods: {
    backClick () {
      this.$router.push('/book/wangeditor/')
    },
    addClick () {
      this.$router.push('/book/wangeditor/add')
    }
  },
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